const HomePage = () => import('@/pages/HomePage.vue')
const FavoritePage = () => import('@/pages/FavoritePage.vue')
const SingleMoviePage = () => import('@/pages/SingleMoviePage.vue')
const ProfilePage = () => import('@/pages/ProfilePage.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/profile', component: ProfilePage },
  { path: '/favorite-movies', component: FavoritePage },
  { path: '/single-movie', component: SingleMoviePage }
]

export default routes
