<script setup>
import HeaderSliderMovieCard from '@/components/home/header-slider/HeaderSliderMovieCard.vue'

import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'

import { Axios } from '@/utils/Axios.js'
import { inject, onMounted, ref } from 'vue'
let movies = ref([])

const { updateLoadingState } = inject('loading-state')
updateLoadingState(true)

onMounted(async () => {
  try {
    const response = await Axios.get('/movie/now_playing?language=en-US&page=1')
    movies.value = response.data.results
  } catch (error) {
    console.error(error)
  } finally {
    updateLoadingState(false)
  }
})
</script>

<template>
  <div class="slider [&::-webkit-scrollbar]:hidden flex overflow-x-scroll scroll-snap-x-mandatory">
    <div class="slider-images flex gap-4 scroll-snap-align-center w-full mb-2">
      <header-slider-movie-card
        v-for="movie in movies"
        :key="movie.id"
        :src="`${API_IMAGE_BASE_URL}w342${movie.poster_path}`"
        :title="movie.title"
        :rate="movie.vote_average"
        :genre_ids="movie.genre_ids"
        :release_date="movie.release_date"
        :vote_count="movie.vote_count"
        :overview="movie.overview"
        :backdrop_path="`${API_IMAGE_BASE_URL}w1280${movie.backdrop_path}`"
      />
    </div>
  </div>
</template>
