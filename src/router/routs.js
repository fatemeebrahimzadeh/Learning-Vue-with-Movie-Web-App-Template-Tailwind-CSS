const HomePage = () => import('@/pages/HomePage.vue')
const FavoritePage = () => import('@/pages/FavoritePage.vue')
const SingleMoviePage = () => import('@/pages/SingleMoviePage.vue')
const ProfilePage = () => import('@/pages/ProfilePage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')
import MainLayoutPage from '@/layouts/MainLayoutPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayoutPage,
    children: [
      { path: '', component: HomePage },
      {
        path: '/profile',
        component: ProfilePage,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/movie-list',
        component: FavoritePage,
        meta: {
          requiresAuth: true
        }
      },
      { path: '/single-movie', component: SingleMoviePage }
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

export default routes
