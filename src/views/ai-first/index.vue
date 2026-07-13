<script setup lang="ts">
import { computed } from 'vue'
import { getExperienceYears } from '../../shared/utils/experience'
import {
  AiCaseCard,
  AiResumeHeader,
  AiRichText,
  AiToolbar,
  DeliveryPipeline,
  EvidenceMetric,
} from './components'
import { aiResume } from './data/resume'
import type { EvidenceMetric as EvidenceMetricData } from './types'
import './styles/resume.css'

const metrics = computed<EvidenceMetricData[]>(() => [
  {
    value: String(getExperienceYears(aiResume.profile.experienceStartYear)),
    unit: '年+',
    label: '前端研发经验',
    detail: `自 ${aiResume.profile.experienceStartYear} 年持续参与生产级前端交付`,
  },
  ...aiResume.metrics,
])
</script>

<template>
  <div class="ai-resume">
    <AiToolbar />

    <div class="ai-shell">
      <header class="ai-hero ai-panel ai-break-avoid" data-testid="ai-hero">
        <AiResumeHeader :profile="aiResume.profile" />
      </header>

      <main class="ai-main">
        <section class="ai-section" aria-labelledby="ai-evidence-title">
          <div class="ai-section-heading">
            <div class="ai-section-heading__copy">
              <h2 id="ai-evidence-title" class="ai-section-heading__title">可信交付读数</h2>
            </div>
            <span class="ai-section-heading__rule" aria-hidden="true"></span>
          </div>

          <div class="ai-metric-grid">
            <EvidenceMetric v-for="metric in metrics" :key="metric.label" :metric="metric" />
          </div>
        </section>

        <section
          class="ai-section ai-pipeline-section"
          aria-labelledby="ai-pipeline-title"
          data-testid="ai-pipeline"
        >
          <div class="ai-section-heading">
            <div class="ai-section-heading__copy">
              <h2 id="ai-pipeline-title" class="ai-section-heading__title">Vibe-Coding 怎么跑</h2>
            </div>
            <span class="ai-section-heading__rule" aria-hidden="true"></span>
          </div>

          <DeliveryPipeline :stages="aiResume.pipeline" />
        </section>

        <section class="ai-section" aria-labelledby="ai-cases-title">
          <div class="ai-section-heading">
            <div class="ai-section-heading__copy">
              <h2 id="ai-cases-title" class="ai-section-heading__title">代表案例</h2>
            </div>
            <span class="ai-section-heading__rule" aria-hidden="true"></span>
          </div>

          <div class="ai-case-grid">
            <AiCaseCard
              v-for="(project, index) in aiResume.cases"
              :key="project.name"
              :project="project"
              :index="index"
              data-testid="ai-case"
            />
          </div>
        </section>

        <section class="ai-section" aria-labelledby="ai-capabilities-title">
          <div class="ai-section-heading">
            <div class="ai-section-heading__copy">
              <h2 id="ai-capabilities-title" class="ai-section-heading__title">能力</h2>
            </div>
            <span class="ai-section-heading__rule" aria-hidden="true"></span>
          </div>

          <div class="ai-capability-grid">
            <article
              v-for="(capability, index) in aiResume.capabilities"
              :key="capability.label"
              class="ai-capability ai-panel ai-break-avoid"
            >
              <span class="ai-capability__index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <h3 class="ai-capability__label">{{ capability.label }}</h3>
              <p class="ai-capability__proof">
                <AiRichText :text="capability.proof" />
              </p>
            </article>
          </div>
        </section>

        <section
          class="ai-section ai-field-evidence ai-panel ai-break-avoid"
          aria-labelledby="ai-field-evidence-title"
        >
          <div class="ai-field-evidence__heading">
            <h2 id="ai-field-evidence-title" class="ai-field-evidence__title">业务硬证据</h2>
          </div>
          <ul class="ai-field-evidence__list">
            <li
              v-for="(evidence, index) in aiResume.classicEvidence"
              :key="evidence"
              class="ai-field-evidence__item"
            >
              <span class="ai-field-evidence__index" aria-hidden="true">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <AiRichText :text="evidence" />
            </li>
          </ul>
        </section>
      </main>

      <footer class="ai-footer">
        <p class="ai-footer__closing">{{ aiResume.closing }}</p>
        <p class="ai-footer__signature">陈泽辉</p>
      </footer>
    </div>
  </div>
</template>
