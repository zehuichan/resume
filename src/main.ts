import { createApp } from 'vue'
import './shared/styles/ui.css'
import App from './app.vue'
import { createResumeRouter } from './router'
import { applyRouteMeta } from './router/route-meta'

const app = createApp(App)
const router = createResumeRouter()

app.config.errorHandler = (err, _instance, info) => {
  console.error('[resume] Uncaught error:', err, info)
}

router.afterEach((to) => applyRouteMeta(to.meta))
app.use(router)
router.isReady().then(() => app.mount('#app'))
