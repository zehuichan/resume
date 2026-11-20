import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouterHistory,
  type RouterScrollBehavior,
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
      title: '陈泽辉 · 线上版',
      description: '陈泽辉简历的线上版：按招聘平台的栏目分段复制',
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

/**
 * 节的固定链接是 `#/#<节>`。首次打开时页面在路由就绪之后才挂载，
 * 等下一帧再找节点，否则找不到要滚到的那一节。
 */
export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) return savedPosition
  if (!to.hash) return { top: 0 }
  return new Promise((resolve) => requestAnimationFrame(() => resolve({ el: to.hash, top: 16 })))
}

export function createResumeRouter(
  history: RouterHistory = createWebHashHistory(import.meta.env.BASE_URL)
): Router {
  return createRouter({ history, routes, scrollBehavior })
}
