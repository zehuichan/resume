import { createApp } from 'vue'
import './styles/main.css'
import App from './app.vue'
import { resume } from './data'
import { getExperienceYears } from './utils/experience'

/** SEO 描述里的经验年限与页头展示同源计算，避免每年手动改数字导致的文案漂移 */
function syncDescriptionMeta(): void {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) return
  const years = getExperienceYears(resume.profile.experienceStartYear)
  meta.content = `${resume.profile.name} · ${resume.profile.title}简历 · ${years} 年+ Vue / Taro / uniapp 实战经验`
}

const app = createApp(App)

app.config.errorHandler = (err, _instance, info) => {
  console.error('[resume] Uncaught error:', err, info)
}

app.mount('#app')
syncDescriptionMeta()
