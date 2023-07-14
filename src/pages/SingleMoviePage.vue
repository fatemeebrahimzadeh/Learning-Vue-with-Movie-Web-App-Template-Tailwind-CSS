<script setup>
import SingleMovieHeader from '@/components/single-movie/SingleMovieHeader.vue'
import SingleMovieMain from '@/components/single-movie/SingleMovieMain.vue'

import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'

import { Axios } from '@/utils/Axios.js'
import { useRoute } from 'vue-router'
const route = useRoute()
import { onMounted, ref } from 'vue'

const movie = ref({})
const relatedMovies = ref({})

onMounted(async () => {
  try {
    const movieDetail = await Axios.get(`/movie/${route.query.movieId}?language=en-US`)
    movie.value = movieDetail.data
    const recommendedMovies = await Axios.get(
      `/movie/${route.query.movieId}/recommendations?language=en-US&page=1`
    )
    relatedMovies.value = recommendedMovies.data.results.slice(0, 4)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <single-movie-header :backdrop_src="`${API_IMAGE_BASE_URL}w1280${movie.backdrop_path}`" />
  <single-movie-main
    :src="`${API_IMAGE_BASE_URL}w342${movie.poster_path}`"
    :title="movie.title"
    :release_date="movie.release_date"
    :vote_count="movie.vote_count"
    :overview="movie.overview"
    :rate="movie.vote_average"
    :genres="movie.genres"
    :relatedMovies="relatedMovies"
  />
</template>
