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
<<<<<<< HEAD
        path: '/movie-list',
        component: FavoritePage,
        meta: {
          requiresAuth: true
=======
        path: '/favorite-movies',
        component: FavoritePage,
        meta: {
          requiresAuth: true // Set the meta property for authentication
>>>>>>> d6525152e723c76583f3a35abdb216d4887366bb
        }
      },
      { path: '/single-movie', component: SingleMoviePage }
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

export default routes
