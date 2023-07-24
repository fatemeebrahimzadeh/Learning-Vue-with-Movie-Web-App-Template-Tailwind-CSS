<script setup>
import FavoriteMoviesHeader from '@/components/favorite-movies/FavoriteMoviesHeader.vue'
import FavoriteMoviesMain from '@/components/favorite-movies/FavoriteMoviesMain.vue'
// import { Axios } from '@/utils/axios.js'
// import { GET_FAVORITE_MOVIE_LIST } from '@/constants/endpoints'
// import { inject } from 'vue'
// import { USER } from '@/constants/provide-keys.js'

// const user = inject(USER)

// const movieDetail = await Axios.get(GET_FAVORITE_MOVIE_LIST(user))
// console.log(movieDetail.data)
</script>

<template>
  <favorite-movies-header />
  <favorite-movies-main />
</template>
