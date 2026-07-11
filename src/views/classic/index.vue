<script setup lang="ts">
import { computed } from 'vue'
import { resume } from './data'
import { CompactProjectItem, ProjectItem, ResumeHeader, RichText, SectionHeader, Toolbar } from './components'
import type { Project } from './types'
import './styles/resume.css'

const year = new Date().getFullYear()

const featuredProjects = computed(() => resume.experience.projects.filter((p) => p.featured))
const getProjectSortValue = (project: Project) => {
  const dateText = project.sortDate ?? project.period.split('-').at(-1)?.trim() ?? project.period
  const match = dateText.match(/(\d{4})\.(\d{2})/)
  if (!match) return 0
  return Number(match[1]) * 100 + Number(match[2])
}
const compactProjects = computed(() =>
  [...resume.experience.projects.filter((p) => !p.featured), ...resume.moreProjects.projects].sort(
    (a, b) => getProjectSortValue(b) - getProjectSortValue(a)
  )
)
</script>

<template>
  <div class="classic-resume flex min-h-screen justify-center px-4 pt-7 pb-24 sm:py-12">
    <main class="sheet w-full max-w-[980px]">
      <ResumeHeader :profile="resume.profile" />

      <section class="reveal" style="animation-delay: 0.12s">
        <SectionHeader index="01" title="个人简介" />
        <RichText tag="p" :text="resume.profile.summary" class="m-0 max-w-[78ch] text-[14px] leading-[1.85] text-classic-ink-soft" />
      </section>

      <section class="reveal" style="animation-delay: 0.18s">
        <SectionHeader index="02" title="职业轨迹" :sub="resume.experience.sub" />
        <div class="grid gap-px border border-classic-line bg-classic-line sm:grid-cols-4">
          <div v-for="step in resume.experience.timeline" :key="step.year" class="break-avoid bg-classic-paper px-3.5 py-3.5">
            <div class="font-classic-mono text-[11px] font-bold text-classic-accent tabular-nums">{{ step.year }}</div>
            <div class="mt-1.5 font-classic-sans text-[13.5px] font-bold leading-tight tracking-[-0.015em] text-classic-ink">
              {{ step.head }}
            </div>
            <p class="mt-1.5 mb-0 text-[12px] leading-[1.6] text-classic-ink-faint">{{ step.body }}</p>
          </div>
        </div>
      </section>

      <section class="reveal" style="animation-delay: 0.24s">
        <SectionHeader index="03" title="精选项目" :sub="`${featuredProjects.length} 个代表项目`" />
        <div class="break-avoid mb-4 border border-classic-line bg-classic-paper-soft/55 px-4 py-3">
          <div class="font-classic-mono text-[10px] font-bold uppercase tracking-[0.14em] text-classic-accent">System Building</div>
          <p class="mt-2 mb-0 text-[13px] leading-[1.75] text-classic-ink-soft">
            敬城前端架构体系按路线图推进:
            <span class="hl">模板层、组件层、低代码层、AI 产码层、工程治理层</span>
            。代表资产包括后台/H5/小程序启动模板、PC/移动/小程序组件库、Tenon 低代码画布引擎与 Agent Skills 团队技能仓,目标是让项目启动、页面搭建、规范产码与发布监控都能复用。
          </p>
        </div>
        <div class="grid gap-4">
          <ProjectItem v-for="(p, i) in featuredProjects" :key="p.name" :project="p" :index="i" />
        </div>
      </section>

      <section class="reveal" style="animation-delay: 0.3s">
        <SectionHeader index="04" title="更多项目" :sub="`${compactProjects.length} 个项目摘要`" />
        <div class="border-b border-classic-line">
          <CompactProjectItem v-for="(p, i) in compactProjects" :key="p.name" :project="p" :index="i" />
        </div>
      </section>

      <section class="reveal" style="animation-delay: 0.36s">
        <SectionHeader
          index="05"
          title="工作经历一览"
          :sub="`${resume.companies.length} 家公司 · ${resume.experience.sub.split(' · ')[0]}`"
        />
        <ul class="list-none p-0 m-0">
          <li
            v-for="c in resume.companies"
            :key="c.name"
            class="break-avoid flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-classic-line py-2.5 first:border-t-0"
          >
            <span class="font-classic-sans text-[14px] font-bold tracking-[-0.015em] text-classic-ink">{{ c.name }}</span>
            <span class="font-classic-mono text-[11.5px] uppercase tracking-[0.06em] text-classic-ink-faint">
              / {{ c.department }} / {{ c.role }}
            </span>
            <span class="ml-auto font-classic-mono text-[11.5px] text-classic-ink-faint tabular-nums">{{ c.period }}</span>
          </li>
        </ul>
      </section>

      <section class="reveal" style="animation-delay: 0.42s">
        <SectionHeader index="06" title="开源项目" :sub="resume.openSource.sub" />
        <RichText tag="p" :text="resume.openSource.intro" class="m-0 mb-4 text-[13px] leading-[1.75] text-classic-ink-soft" />
        <div class="grid gap-2">
          <div
            v-for="o in resume.openSource.items"
            :key="o.href"
            class="break-avoid flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-classic-line py-2.5"
          >
            <a
              :href="o.href"
              target="_blank"
              rel="noreferrer"
              class="font-classic-sans text-[14px] font-bold tracking-[-0.015em] text-classic-accent transition-colors hover:text-classic-accent-deep"
            >
              {{ o.name }}
            </a>
            <span class="text-[12.5px] leading-[1.6] text-classic-ink-faint">/ {{ o.desc }}</span>
          </div>
        </div>
        <div class="break-avoid mt-4 border border-classic-line bg-classic-paper-soft/60 px-4 py-3 text-[13px] leading-[1.7] text-classic-ink-soft">
          <span class="mr-2 font-classic-mono text-[11px] font-bold uppercase tracking-[0.12em] text-classic-accent">
            {{ resume.openSource.highlightTag }}
          </span>
          {{ resume.openSource.highlight }}
        </div>
      </section>

      <section class="reveal" style="animation-delay: 0.48s">
        <SectionHeader index="07" title="核心能力" />
        <div class="flex flex-col">
          <div
            v-for="s in resume.skills"
            :key="s.label"
            class="break-avoid grid gap-1 border-t border-classic-line py-3 first:border-t-0 sm:grid-cols-[120px_1fr] sm:gap-5"
          >
            <span class="font-classic-mono text-[11.5px] font-bold uppercase tracking-[0.12em] text-classic-accent">{{ s.label }}</span>
            <RichText :text="s.body" class="min-w-0 text-[13.5px] leading-[1.7] text-classic-ink-soft" />
          </div>
        </div>
      </section>

      <section class="reveal" style="animation-delay: 0.54s">
        <SectionHeader index="08" title="教育背景" />
        <ul class="list-none p-0 m-0">
          <li
            v-for="e in resume.education"
            :key="e.school"
            class="break-avoid flex flex-wrap items-baseline gap-x-3 border-t border-classic-line py-2.5 first:border-t-0"
          >
            <span class="font-classic-sans text-[14px] font-bold tracking-[-0.015em] text-classic-ink">{{ e.school }}</span>
            <span class="font-classic-mono text-[11.5px] uppercase tracking-[0.06em] text-classic-ink-faint">/ {{ e.major }}</span>
            <span class="ml-auto font-classic-mono text-[11.5px] text-classic-ink-faint">{{ e.degree }}</span>
          </li>
        </ul>
      </section>

      <footer class="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-classic-line pt-5">
        <p class="m-0 font-classic-mono text-[11.5px] uppercase tracking-[0.08em] text-classic-ink-faint">{{ resume.closing }}</p>
        <span class="font-classic-mono text-[11px] text-classic-ink-faint tabular-nums">© {{ year }} {{ resume.profile.name }}</span>
      </footer>
    </main>

    <Toolbar />
  </div>
</template>
