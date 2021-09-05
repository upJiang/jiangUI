import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import menus from './menus'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: AppLayout,
      redirect: '/button',
      children: menus.reduce((prev, item) => {
        const _routes = item.items.map((i) => {
          console.log(i.component)
          return {
            path: `/${i.name.toLowerCase()}`,
            name: i.name,
            component: i.component,
          }
        })
        prev.push(..._routes)
        return prev
      }, [] as RouteRecordRaw[]),
    },
  ],
})
