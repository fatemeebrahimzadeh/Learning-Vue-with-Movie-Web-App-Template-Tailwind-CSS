import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/router/routs.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
