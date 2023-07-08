import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import FavoritePage from '@/pages/FavoritePage.vue'
import SingleMoviePage from '@/pages/SingleMoviePage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/profile', component: ProfilePage },
  { path: '/favorite-movies', component: FavoritePage },
  { path: '/single-movie', component: SingleMoviePage }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
