<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useCommand } from '@/shared/commands/use-commands'
import { copyLabels, useCopyFeedback } from '@/shared/composables/use-copy-feedback'
import { resolveResumeSource } from '@/shared/data/resume-sources'
import { buildOnlineResumeBlocks, type CopyField } from '@/shared/lib/online-resume-copy'
import { cn } from '@/shared/lib/utils'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import CopyBlock from './components/copy-block.vue'

interface CopyTarget {
  key: string
  field: CopyField
}

const source = resolveResumeSource()
const copy = computed(() => buildOnlineResumeBlocks(source.resume, source.extras))

const companyKey = (name: string, part: 'content' | 'result' | 'skills') => `company-${part}-${name}`
const projectKey = (name: string, part: 'content' | 'result') => `project-${part}-${name}`

/** 页面上所有能复制的段，顺序就是 J / K 走的顺序 */
const targets = computed<CopyTarget[]>(() =>
  copy.value.blocks.flatMap((block): CopyTarget[] => {
    switch (block.kind) {
      case 'advantage':
      case 'education':
        return [{ key: block.kind, field: block.field }]
      case 'companies':
        return block.items.flatMap((item) =>
          (['content', 'result', 'skills'] as const).flatMap((part) => {
            const field = item[part]
            return field ? [{ key: companyKey(item.name, part), field }] : []
          })
        )
      case 'projects':
        return block.items.flatMap((item) =>
          (['content', 'result'] as const).map((part) => ({ key: projectKey(item.name, part), field: item[part] }))
        )
      case 'expectations':
        return []
    }
  })
)

const activeKey = ref<string>()
const feedback = useCopyFeedback()

const copyButton = (key: string) =>
  [...document.querySelectorAll<HTMLElement>('[data-copy-key]')].find((el) => el.dataset.copyKey === key)!
const copySource = (key: string) =>
  [...document.querySelectorAll<HTMLElement>('[data-copy-text]')].find((el) => el.dataset.copyText === key)!

/** 复制不成时选中原文，按 Ctrl C 就能手动复制 */
function selectText(key: string) {
  window.getSelection()?.selectAllChildren(copySource(key))
}

async function copyTarget(key: string) {
  activeKey.value = key
  const target = targets.value.find((t) => t.key === key)!
  const ok = await feedback.copy(key, target.field.text)
  if (!ok) selectText(key)
}

async function moveActive(step: 1 | -1) {
  const keys = targets.value.map((t) => t.key)
  const index = activeKey.value ? keys.indexOf(activeKey.value) : -1
  const next = index === -1 ? (step === 1 ? 0 : keys.length - 1) : Math.min(Math.max(index + step, 0), keys.length - 1)
  activeKey.value = keys[next]

  await nextTick()
  const button = copyButton(activeKey.value!)
  button.focus({ preventScroll: true })
  button.closest('[data-slot="card"]')!.scrollIntoView({ block: 'nearest' })
}

/** 鼠标点过或 Tab 停到的复制按钮，也算当前段 */
function followFocus(event: FocusEvent) {
  const key = (event.target as HTMLElement).closest<HTMLElement>('[data-copy-key]')?.dataset.copyKey
  if (key) activeKey.value = key
}

useCommand('next-block', () => moveActive(1))
useCommand('prev-block', () => moveActive(-1))
useCommand('copy-block', () => {
  if (activeKey.value) copyTarget(activeKey.value)
})
useCommand('leave-block', () => {
  activeKey.value = undefined
  ;(document.activeElement as HTMLElement | null)?.blur()
})

const blockProps = (key: string, field: CopyField) => ({
  copyKey: key,
  field,
  status: feedback.statusOf(key),
  active: activeKey.value === key
})
</script>

<template>
  <div class="min-h-screen bg-background px-4 pt-4 pb-24 font-sans sm:px-6 sm:pt-10">
    <main class="mx-auto flex w-full max-w-5xl flex-col gap-5" @focusin="followFocus">
      <Card>
        <CardHeader>
          <CardTitle>线上版</CardTitle>
          <CardDescription>项目 {{ copy.projectCount }} · 工作经历 {{ copy.companyCount }}</CardDescription>
        </CardHeader>
      </Card>

      <template v-for="block in copy.blocks" :key="block.kind">
        <Card v-if="block.kind === 'advantage'">
          <CardHeader>
            <CardTitle class="text-base">{{ block.title }}</CardTitle>
            <CardAction>
              <Button
                variant="outline"
                size="xs"
                data-copy-key="advantage"
                :class="feedback.statusOf('advantage') === 'failed' && 'text-bad hover:text-bad'"
                @click="copyTarget('advantage')"
              >
                {{ copyLabels[feedback.statusOf('advantage')] }}
                <span class="text-muted-foreground font-normal">{{ block.field.charCount }}</span>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <pre
              data-copy-text="advantage"
              :class="
                cn(
                  'text-foreground rounded-md border border-border px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap transition-colors duration-150',
                  activeKey === 'advantage' ? 'bg-accent' : 'bg-background'
                )
              "
              >{{ block.field.text }}</pre
            >
          </CardContent>
        </Card>

        <Card v-else-if="block.kind === 'expectations'">
          <CardHeader>
            <CardTitle class="text-base">{{ block.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in block.items"
                :key="`${item.title}-${i}`"
                class="text-muted-foreground flex flex-wrap gap-x-4 gap-y-2 border-t border-border py-3 text-sm first:border-t-0"
              >
                <strong class="text-foreground font-semibold">{{ item.title }}</strong>
                <span>{{ item.salary }}</span>
                <span>{{ item.cities }}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <section v-else-if="block.kind === 'companies'" class="flex flex-col gap-3">
          <h2 class="px-1 text-base font-semibold">{{ block.title }}</h2>
          <Card v-for="item in block.items" :key="item.name">
            <CardHeader>
              <CardTitle class="text-base">{{ item.onlineName }}</CardTitle>
              <CardDescription>{{ item.role }} · {{ item.period }}</CardDescription>
              <CardAction v-if="item.missing">
                <Badge variant="warning">待补充</Badge>
              </CardAction>
            </CardHeader>
            <CardContent class="grid gap-4 lg:grid-cols-2">
              <CopyBlock
                v-if="item.content"
                title="内容"
                stretch
                v-bind="blockProps(companyKey(item.name, 'content'), item.content)"
                @copy="copyTarget(companyKey(item.name, 'content'))"
              />
              <CopyBlock
                v-if="item.result"
                title="业绩"
                stretch
                v-bind="blockProps(companyKey(item.name, 'result'), item.result)"
                @copy="copyTarget(companyKey(item.name, 'result'))"
              />
              <CopyBlock
                v-if="item.skills"
                title="技能标签"
                class="lg:col-span-2"
                v-bind="blockProps(companyKey(item.name, 'skills'), item.skills)"
                @copy="copyTarget(companyKey(item.name, 'skills'))"
              />
            </CardContent>
          </Card>
        </section>

        <section v-else-if="block.kind === 'projects'" class="flex flex-col gap-3">
          <h2 class="px-1 text-base font-semibold">{{ block.title }}</h2>
          <Card v-for="item in block.items" :key="item.name">
            <CardHeader>
              <CardTitle class="text-base">{{ item.name }}</CardTitle>
              <CardDescription>{{ item.role }} · {{ item.period }} · {{ item.kind }}</CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4 lg:grid-cols-2">
              <CopyBlock
                title="内容"
                stretch
                v-bind="blockProps(projectKey(item.name, 'content'), item.content)"
                @copy="copyTarget(projectKey(item.name, 'content'))"
              />
              <CopyBlock
                title="业绩"
                stretch
                v-bind="blockProps(projectKey(item.name, 'result'), item.result)"
                @copy="copyTarget(projectKey(item.name, 'result'))"
              />
            </CardContent>
          </Card>
        </section>

        <Card
          v-else-if="block.kind === 'education'"
          :class="cn('transition-colors duration-150', activeKey === 'education' && 'bg-accent')"
        >
          <CardHeader>
            <CardTitle class="text-base">{{ block.title }}</CardTitle>
            <CardAction>
              <Button
                variant="outline"
                size="xs"
                data-copy-key="education"
                :class="feedback.statusOf('education') === 'failed' && 'text-bad hover:text-bad'"
                @click="copyTarget('education')"
              >
                {{ copyLabels[feedback.statusOf('education')] }}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ul data-copy-text="education" class="flex flex-col">
              <li
                v-for="item in block.items"
                :key="item.school"
                class="text-muted-foreground flex flex-wrap gap-x-4 gap-y-2 border-t border-border py-3 text-sm first:border-t-0"
              >
                <strong class="text-foreground font-semibold">{{ item.school }}</strong>
                <span>{{ item.major }}</span>
                <span>{{ item.degree }}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </template>
    </main>
  </div>
</template>
