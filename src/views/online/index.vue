<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { resolveResumeSource } from '@/shared/data/resume-sources'
import { copyText } from '@/shared/lib/clipboard'
import { buildOnlineResumeBlocks, type CopyField } from '@/shared/lib/online-resume-copy'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/card'

const route = useRoute()
const copiedKey = ref('')
let copiedTimer: ReturnType<typeof setTimeout> | undefined

const sourceVersion = computed(() => (route.query.source === 'ai-first' ? 'ai-first' : 'classic'))
const source = computed(() => resolveResumeSource(sourceVersion.value))
const copy = computed(() => buildOnlineResumeBlocks(source.value.resume, source.value.extras))

watch(sourceVersion, () => {
  copiedKey.value = ''
})

async function copyField(key: string, field: CopyField) {
  const ok = await copyText(field.text)
  if (!ok) {
    window.alert('复制失败，请手动选中文本后复制。')
    return
  }

  copiedKey.value = key
  if (copiedTimer) clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => {
    copiedKey.value = ''
  }, 1600)
}

function labelFor(key: string) {
  return copiedKey.value === key ? '已复制' : '复制'
}
</script>

<template>
  <div class="min-h-screen bg-muted/40 px-4 pt-20 pb-16 font-sans sm:px-6 sm:pt-24">
    <main class="mx-auto flex w-full max-w-5xl flex-col gap-5">
      <Card>
        <CardHeader>
          <div class="flex flex-col gap-1.5">
            <CardTitle>线上简历内容 · {{ source.label }}</CardTitle>
            <CardDescription>
              本版应有项目 {{ copy.projectCount }} 条 / 工作经历 {{ copy.companyCount }}
              条；线上多出来的条目请删除。
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      <template v-for="block in copy.blocks" :key="block.kind">
        <Card v-if="block.kind === 'advantage'">
          <CardHeader class="flex-row items-center justify-between gap-3">
            <CardTitle class="text-base">{{ block.title }}</CardTitle>
            <Button variant="outline" size="xs" @click="copyField('advantage', block.field)">
              {{ labelFor('advantage') }}
              <span class="text-muted-foreground font-normal">{{ block.field.charCount }}</span>
            </Button>
          </CardHeader>
          <CardContent>
            <pre
              class="text-foreground/90 border border-border bg-muted px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap"
              >{{ block.field.text }}</pre
            >
          </CardContent>
        </Card>

        <Card v-else-if="block.kind === 'expectations'">
          <CardHeader class="flex-row items-center justify-between gap-3">
            <CardTitle class="text-base">{{ block.title }}</CardTitle>
            <CardDescription>BOSS 为选择器，仅作对照</CardDescription>
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
          <h2 class="px-1 text-lg font-semibold">{{ block.title }}</h2>
          <Card v-for="item in block.items" :key="item.name">
            <CardHeader class="flex-row items-start justify-between gap-3">
              <div class="flex flex-col gap-1">
                <CardTitle class="text-base">{{ item.onlineName }}</CardTitle>
                <CardDescription>{{ item.role }} · {{ item.period }}</CardDescription>
              </div>
              <Badge v-if="item.missing" variant="warning">待补充</Badge>
            </CardHeader>
            <CardContent class="grid gap-4 lg:grid-cols-2">
              <div v-if="item.content" class="flex min-w-0 flex-col gap-2">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-sm font-semibold">内容</h3>
                  <Button
                    variant="outline"
                    size="xs"
                    @click="copyField(`company-content-${item.name}`, item.content)"
                  >
                    {{ labelFor(`company-content-${item.name}`) }}
                  </Button>
                </div>
                <pre
                  class="text-foreground/90 h-full border border-border bg-muted px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap"
                  >{{ item.content.text }}</pre
                >
              </div>

              <div v-if="item.result" class="flex min-w-0 flex-col gap-2">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-sm font-semibold">业绩</h3>
                  <Button
                    variant="outline"
                    size="xs"
                    @click="copyField(`company-result-${item.name}`, item.result)"
                  >
                    {{ labelFor(`company-result-${item.name}`) }}
                  </Button>
                </div>
                <pre
                  class="text-foreground/90 h-full border border-border bg-muted px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap"
                  >{{ item.result.text }}</pre
                >
              </div>
            </CardContent>
          </Card>
        </section>

        <section v-else-if="block.kind === 'projects'" class="flex flex-col gap-3">
          <h2 class="px-1 text-lg font-semibold">{{ block.title }}</h2>
          <Card v-for="item in block.items" :key="item.name">
            <CardHeader>
              <CardTitle class="text-base">{{ item.name }}</CardTitle>
              <CardDescription>
                {{ item.role }} · {{ item.period }} · {{ item.kind }}
              </CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4 lg:grid-cols-2">
              <div class="flex min-w-0 flex-col gap-2">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-sm font-semibold">内容</h3>
                  <Button
                    variant="outline"
                    size="xs"
                    @click="copyField(`project-content-${item.name}`, item.content)"
                  >
                    {{ labelFor(`project-content-${item.name}`) }}
                  </Button>
                </div>
                <pre
                  class="text-foreground/90 h-full border border-border bg-muted px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap"
                  >{{ item.content.text }}</pre
                >
              </div>

              <div class="flex min-w-0 flex-col gap-2">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-sm font-semibold">业绩</h3>
                  <Button
                    variant="outline"
                    size="xs"
                    @click="copyField(`project-result-${item.name}`, item.result)"
                  >
                    {{ labelFor(`project-result-${item.name}`) }}
                  </Button>
                </div>
                <pre
                  class="text-foreground/90 h-full border border-border bg-muted px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap"
                  >{{ item.result.text }}</pre
                >
              </div>
            </CardContent>
          </Card>
        </section>

        <Card v-else-if="block.kind === 'education'">
          <CardHeader class="flex-row items-center justify-between gap-3">
            <CardTitle class="text-base">{{ block.title }}</CardTitle>
            <Button variant="outline" size="xs" @click="copyField('education', block.field)">
              {{ labelFor('education') }}
            </Button>
          </CardHeader>
          <CardContent>
            <ul class="flex flex-col">
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

      <p class="text-muted-foreground px-1 text-xs leading-relaxed">
        内容来自本仓库当前版本；改文案请先改数据文件，再复制到线上。
      </p>
    </main>
  </div>
</template>
