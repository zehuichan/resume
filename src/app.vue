<script setup lang="ts">
import { computed } from 'vue'
import { resume } from './data'
import { ProjectItem, ResumeHeader, RichText, SectionHeader, Toolbar } from './components'
import { getExperienceYears } from './utils/experience'

const year = new Date().getFullYear()
const experienceYears = computed(() => getExperienceYears(resume.profile.experienceStartYear))

/** 第一张数字卡由起算年份实时计算，其余来自数据文件 */
const metrics = computed(() => [
  { value: String(experienceYears.value), unit: '年+', label: '前端研发经验' },
  ...resume.metrics
])
</script>

<template>
  <div class="min-h-screen px-4 py-8 sm:py-14 flex justify-center">
    <main class="sheet w-full max-w-[900px]">
      <ResumeHeader :profile="resume.profile" />

      <!-- 数字卡：先立量级 -->
      <div class="reveal grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 mt-6" style="animation-delay: 0.06s">
        <div v-for="m in metrics" :key="m.label" class="break-avoid">
          <div class="font-display text-[24px] font-medium text-seal leading-none tabular-nums">
            {{ m.value }}<span class="text-[16px] ml-0.5">{{ m.unit }}</span>
          </div>
          <div class="mt-1.5 text-[12.5px] text-ink-faint">{{ m.label }}</div>
        </div>
      </div>

      <!-- 个人简介 -->
      <section class="reveal" style="animation-delay: 0.12s">
        <SectionHeader title="个人简介" />
        <RichText tag="p" :text="resume.profile.summary" class="m-0 text-[14px] leading-[1.85] text-ink-soft" />
      </section>

      <!-- 工作经历：时间线 + 核心项目 -->
      <section class="reveal" style="animation-delay: 0.18s">
        <SectionHeader title="工作经历" :sub="resume.experience.sub" />

        <div class="grid sm:grid-cols-4 gap-x-7 gap-y-4 mb-4">
          <div v-for="step in resume.experience.timeline" :key="step.year" class="break-avoid">
            <div class="flex items-baseline gap-2">
              <span class="font-display text-[15.5px] font-medium text-seal tabular-nums">{{ step.year }}</span>
              <span class="font-display text-[14.5px] font-medium text-ink">{{ step.head }}</span>
            </div>
            <p class="mt-1 mb-0 text-[12.5px] leading-[1.7] text-ink-faint">{{ step.body }}</p>
          </div>
        </div>

        <div class="flex flex-col divide-y divide-line/60">
          <ProjectItem v-for="p in resume.experience.projects" :key="p.name" :project="p" />
        </div>
      </section>

      <!-- 更多项目 -->
      <section class="reveal" style="animation-delay: 0.24s">
        <SectionHeader title="更多项目" :sub="resume.moreProjects.sub" />
        <div class="flex flex-col divide-y divide-line/60">
          <ProjectItem v-for="p in resume.moreProjects.projects" :key="p.name" :project="p" />
        </div>
      </section>

      <!-- 工作经历一览 -->
      <section class="reveal" style="animation-delay: 0.3s">
        <SectionHeader
          title="工作经历一览"
          :sub="`${resume.companies.length} 家公司 · ${resume.experience.sub.split(' · ')[0]}`"
        />
        <ul class="list-none p-0 m-0">
          <li
            v-for="c in resume.companies"
            :key="c.name"
            class="break-avoid flex flex-wrap items-baseline gap-x-3 gap-y-0.5 py-2"
          >
            <span class="font-display text-[15px] font-medium text-ink">{{ c.name }}</span>
            <span class="text-[13px] text-ink-faint">· {{ c.department }} · {{ c.role }}</span>
            <span class="ml-auto text-[12.5px] text-ink-faint tabular-nums">{{ c.period }}</span>
          </li>
        </ul>
      </section>

      <!-- 开源项目 -->
      <section class="reveal" style="animation-delay: 0.36s">
        <SectionHeader title="开源项目" :sub="resume.openSource.sub" />
        <RichText
          tag="p"
          :text="resume.openSource.intro"
          class="m-0 mb-3 text-[13.5px] leading-[1.8] text-ink-soft"
        />
        <div class="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          <div
            v-for="o in resume.openSource.items"
            :key="o.href"
            class="break-avoid flex items-baseline gap-3 py-1.5 border-b border-dotted border-line"
          >
            <a
              :href="o.href"
              target="_blank"
              rel="noreferrer"
              class="font-display text-[14px] font-medium text-seal whitespace-nowrap transition-colors hover:text-seal-deep"
            >
              {{ o.name }}
            </a>
            <span class="text-[12.5px] leading-[1.6] text-ink-faint">{{ o.desc }}</span>
          </div>
        </div>
        <div class="break-avoid mt-4 rounded-[3px] bg-seal/10 px-3.5 py-2.5 text-[13px] leading-[1.7] text-ink-soft">
          <span
            class="inline-block mr-2 rounded-[3px] bg-seal px-1.5 py-0.5 text-[11.5px] font-medium text-paper -translate-y-px"
          >
            {{ resume.openSource.highlightTag }}
          </span>{{ resume.openSource.highlight }}
        </div>
      </section>

      <!-- 核心能力 -->
      <section class="reveal" style="animation-delay: 0.42s">
        <SectionHeader title="核心能力" />
        <div class="flex flex-col">
          <div
            v-for="s in resume.skills"
            :key="s.label"
            class="break-avoid flex flex-col sm:flex-row gap-x-4 gap-y-1 py-2.5 border-b border-dotted border-line last:border-b-0"
          >
            <span class="flex-none sm:w-24 text-[13px] font-medium text-seal tracking-wide">{{ s.label }}</span>
            <RichText :text="s.body" class="min-w-0 text-[13.5px] leading-[1.7] text-ink-soft" />
          </div>
        </div>
      </section>

      <!-- 教育背景 -->
      <section class="reveal" style="animation-delay: 0.48s">
        <SectionHeader title="教育背景" />
        <ul class="list-none p-0 m-0">
          <li
            v-for="e in resume.education"
            :key="e.school"
            class="break-avoid flex flex-wrap items-baseline gap-x-3 py-2"
          >
            <span class="font-display text-[15px] font-medium text-ink">{{ e.school }}</span>
            <span class="text-[13px] text-ink-faint">· {{ e.major }}</span>
            <span class="ml-auto text-[12.5px] text-ink-faint">{{ e.degree }}</span>
          </li>
        </ul>
      </section>

      <footer class="mt-10 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-3">
        <p class="m-0 text-[13px] text-ink-faint">{{ resume.closing }}</p>
        <span class="text-[12px] text-ink-faint tabular-nums">© {{ year }} {{ resume.profile.name }}</span>
      </footer>
    </main>

    <Toolbar />
  </div>
</template>
