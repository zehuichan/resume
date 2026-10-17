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
      description: '陈泽辉 · 前端负责人 / 前端架构师 · 20 人前端团队 · 前端基建、低代码与 AI 工程化',
      themeColor: '#ffffff',
      resumeVersion: 'classic'
    }
  },
  {
    path: '/online',
    name: 'online',
    component: () => import('../views/online/index.vue'),
    meta: {
      title: '陈泽辉 · 线上简历内容',
      description: '陈泽辉的线上简历复制内容',
      themeColor: '#ffffff',
      resumeVersion: 'classic'
    }
  },
  {
    path: '/classic',
    redirect: '/'
  },
  {
    path: '/ai-first',
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
