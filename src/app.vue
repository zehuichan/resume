<script setup lang="ts">
import { ArrowUpRight, Check, ChevronRight, GitBranch } from '@lucide/vue'
import { resume } from './data'
import { ResumeHeader, SectionHeader, RichText, TechTag, Toolbar } from './components'

const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen px-4 py-8 sm:py-14 flex justify-center">
    <main class="sheet w-full max-w-[900px]">
      <ResumeHeader :profile="resume.profile" />

      <!-- 01 个人优势 -->
      <section class="reveal" style="animation-delay: 0.08s">
        <SectionHeader index="01" zh="个人优势" en="Highlights" />
        <ul class="grid sm:grid-cols-2 gap-x-9 gap-y-4 list-none p-0 m-0">
          <li
            v-for="(h, i) in resume.highlights"
            :key="i"
            class="break-avoid flex gap-2.5 text-[13.5px] leading-[1.7] text-ink-soft"
          >
            <Check :size="13" class="mt-[3px] text-seal flex-none" />
            <RichText :text="h" />
          </li>
        </ul>
      </section>

      <!-- 02 工作经历 -->
      <section class="reveal" style="animation-delay: 0.16s">
        <SectionHeader index="02" zh="工作经历" en="Experience" />
        <div class="flex flex-col gap-7">
          <article
            v-for="(job, jobIndex) in resume.jobs"
            :key="jobIndex"
            class="break-avoid relative pl-6 border-l border-line"
          >
            <span
              class="absolute -left-[5px] top-[6px] w-[10px] h-[10px] rounded-full bg-seal ring-4 ring-[var(--sheet-bg)]"
            />
            <div class="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 class="font-display text-[17px] font-semibold text-ink m-0">
                {{ job.company }}
                <span v-if="job.department" class="font-sans text-[13px] font-normal text-ink-faint">
                  · {{ job.department }}
                </span>
              </h3>
              <span class="font-mono text-[12px] text-ink-faint">{{ job.period }}</span>
            </div>
            <div class="mt-0.5 font-mono text-[12.5px] text-seal-deep">{{ job.role }}</div>
            <div class="mt-2.5 flex flex-wrap gap-1.5">
              <TechTag v-for="s in job.stack" :key="s" :label="s" />
            </div>
            <ul class="mt-3 list-none p-0 m-0 flex flex-col gap-1.5">
              <li
                v-for="(b, i) in job.bullets"
                :key="i"
                class="flex gap-2 text-[13.5px] leading-[1.7] text-ink-soft"
              >
                <span class="text-line mt-px select-none">—</span>
                <RichText :text="b" />
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- 03 项目经历 -->
      <section class="reveal" style="animation-delay: 0.24s">
        <SectionHeader index="03" zh="项目经历" en="Projects" />
        <div class="flex flex-col gap-4">
          <article
            v-for="(p, projectIndex) in resume.projects"
            :key="projectIndex"
            class="break-avoid rounded-lg border border-line bg-paper/40 p-5"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 class="font-display text-[17px] font-semibold text-ink m-0">{{ p.name }}</h3>
              <span class="font-mono text-[12px] text-ink-faint">{{ p.period }}</span>
            </div>
            <p class="mt-2 mb-0 text-[12.5px] leading-[1.75] text-ink-soft">{{ p.description }}</p>
            <ul class="mt-3 list-none p-0 m-0 flex flex-col gap-1.5">
              <li
                v-for="(r, i) in p.responsibilities"
                :key="i"
                class="flex gap-2 text-[13.5px] leading-[1.7] text-ink"
              >
                <ChevronRight :size="13" class="text-seal mt-[3px] flex-none" />
                <RichText :text="r" />
              </li>
            </ul>
            <div class="mt-3 flex flex-wrap gap-1.5">
              <TechTag v-for="s in p.stack" :key="s" :label="s" />
            </div>
          </article>
        </div>
      </section>

      <!-- 04 教育经历 -->
      <section class="reveal" style="animation-delay: 0.32s">
        <SectionHeader index="04" zh="教育经历" en="Education" />
        <ul class="list-none p-0 m-0 flex flex-col gap-2.5">
          <li
            v-for="(e, eduIndex) in resume.education"
            :key="eduIndex"
            class="break-avoid flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <span class="font-display text-[15.5px] font-semibold text-ink">{{ e.school }}</span>
            <span class="font-mono text-[12.5px] text-ink-soft">{{ e.major }}</span>
            <span
              class="font-mono text-[11px] text-seal-deep border border-seal/25 rounded px-1.5 py-0.5"
            >
              {{ e.degree }}
            </span>
          </li>
        </ul>
      </section>

      <!-- 05 开源项目 -->
      <section class="reveal" style="animation-delay: 0.4s">
        <SectionHeader index="05" zh="开源项目" en="Open Source" />
        <div class="grid sm:grid-cols-2 gap-3">
          <a
            v-for="o in resume.openSource"
            :key="o.href"
            :href="o.href"
            target="_blank"
            rel="noreferrer"
            class="group break-avoid block rounded-lg border border-line bg-paper/40 p-4 transition-colors hover:border-seal/40 hover:bg-seal/5"
          >
            <div class="flex items-center gap-2">
              <GitBranch :size="15" class="text-seal" />
              <span
                class="font-display text-[15px] font-semibold text-ink transition-colors group-hover:text-seal"
              >
                {{ o.name }}
              </span>
              <ArrowUpRight
                :size="14"
                class="ml-auto text-ink-faint transition-all group-hover:text-seal group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <p class="mt-1.5 mb-0 text-[12.5px] leading-snug text-ink-soft">{{ o.description }}</p>
            <p class="mt-1 mb-0 font-mono text-[11px] text-ink-faint truncate">
              {{ o.href.replace('https://', '') }}
            </p>
          </a>
        </div>
      </section>

      <footer
        class="mt-12 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-3"
      >
        <p class="m-0 font-display italic text-[15px] text-ink-soft">{{ resume.closing }}</p>
        <span class="font-mono text-[11px] text-ink-faint">
          © {{ year }} {{ resume.profile.name }}
        </span>
      </footer>
    </main>

    <Toolbar />
  </div>
</template>
