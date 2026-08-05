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
  ).slice(0, 5)
)
</script>

<template>
  <div class="classic-resume flex min-h-screen justify-center px-4 pt-7 pb-24 sm:py-12">
    <main class="sheet w-full max-w-[980px]">
      <ResumeHeader :profile="resume.profile" />

      <section class="reveal">
        <SectionHeader title="个人优势" />
        <RichText tag="p" :text="resume.profile.summary" class="m-0 text-[14px] leading-[1.85] text-classic-ink-soft" />
      </section>

      <section class="reveal">
        <SectionHeader title="专业技能" />
        <div class="flex flex-col">
          <div
            v-for="s in resume.skills"
            :key="s.label"
            class="break-avoid grid gap-1 border-t border-classic-line py-2.5 first:border-t-0 sm:grid-cols-[96px_1fr] sm:gap-5"
          >
            <span class="text-[12px] font-semibold text-classic-ink">{{ s.label }}</span>
            <RichText :text="s.body" class="min-w-0 text-[13px] leading-[1.7] text-classic-ink-soft" />
          </div>
        </div>
      </section>

      <section class="reveal">
        <SectionHeader title="工作经历" :sub="resume.experience.sub.split(' · ')[0]" />
        <ul class="list-none p-0 m-0">
          <li
            v-for="c in resume.companies"
            :key="c.name"
            class="break-avoid grid gap-1 border-t border-classic-line py-3 first:border-t-0 sm:grid-cols-[1fr_auto]"
          >
            <div>
              <span class="text-[14px] font-bold text-classic-ink">{{ c.name }}</span>
              <span class="ml-3 text-[12px] text-classic-ink-soft">{{ c.department }} · {{ c.role }}</span>
            </div>
            <span class="text-[11.5px] text-classic-ink-faint tabular-nums">{{ c.period }}</span>
          </li>
        </ul>
      </section>

      <section class="reveal">
        <SectionHeader title="项目经历" :sub="`${featuredProjects.length} 个代表项目`" />
        <div class="divide-y divide-classic-line">
          <ProjectItem v-for="(p, i) in featuredProjects" :key="p.name" :project="p" :index="i" />
        </div>
      </section>

      <section class="reveal">
        <SectionHeader title="其他项目" />
        <div class="border-b border-classic-line">
          <CompactProjectItem v-for="(p, i) in compactProjects" :key="p.name" :project="p" :index="i" />
        </div>
      </section>

      <section class="reveal">
        <SectionHeader title="开源经历" :sub="resume.openSource.sub" />
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
      </section>

      <section class="reveal">
        <SectionHeader title="教育背景" />
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

      <footer class="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-classic-line pt-4">
        <p class="m-0 text-[11.5px] text-classic-ink-faint">{{ resume.closing }}</p>
        <span class="text-[11px] text-classic-ink-faint tabular-nums">© {{ year }} {{ resume.profile.name }}</span>
      </footer>
    </main>

    <Toolbar />
  </div>
</template>
