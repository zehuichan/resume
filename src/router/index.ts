import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouterHistory,
  type RouteRecordRaw
} from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ai-first',
    component: () => import('../views/ai-first/index.vue'),
    meta: {
      title: '陈泽辉 · 前端负责人｜AI 编码工程化',
      description: '陈泽辉 · 10 年+ 前端研发 · 6 人团队管理 · Vue3 架构与团队级 Vibe-Coding',
      themeColor: '#070b09',
      resumeVersion: 'ai-first'
    }
  },
  {
    path: '/classic',
    name: 'classic',
    component: () => import('../views/classic/index.vue'),
    meta: {
      title: '陈泽辉 · 前端负责人',
      description: '陈泽辉 · 10 年+ Vue3、多端架构、组件化与 CI/CD 实战经验',
      themeColor: '#fafaf8',
      resumeVersion: 'classic'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export function createResumeRouter(
  history: RouterHistory = createWebHashHistory(import.meta.env.BASE_URL)
): Router {
  return createRouter({ history, routes })
}
