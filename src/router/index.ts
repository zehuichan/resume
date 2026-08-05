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
    name: 'classic',
    component: () => import('../views/classic/index.vue'),
    meta: {
      title: '陈泽辉 · 前端负责人',
      description: '陈泽辉 · 10 年+ Vue3、多端架构、组件化、团队管理与 CI/CD 实战经验',
      themeColor: '#ffffff',
      resumeVersion: 'classic'
    }
  },
  {
    path: '/ai-first',
    name: 'ai-first',
    component: () => import('../views/ai-first/index.vue'),
    meta: {
      title: '陈泽辉 · Agent 应用开发工程师',
      description: '陈泽辉 · Agent 应用开发 · Skills / 上下文编排 / 质检闭环 / 真实业务交付',
      themeColor: '#ffffff',
      resumeVersion: 'ai-first'
    }
  },
  {
    path: '/classic',
    redirect: '/'
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
