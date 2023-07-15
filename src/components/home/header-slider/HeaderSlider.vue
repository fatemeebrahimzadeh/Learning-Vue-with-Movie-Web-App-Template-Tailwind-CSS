<script setup>
import HeaderSliderMovieCard from '@/components/home/header-slider/HeaderSliderMovieCard.vue'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'
import { NOW_PLAYING_MOVIES_URL } from '@/constants/endpoints.js'
import { Axios } from '@/utils/axios.js'
import { inject, onMounted, ref } from 'vue'
let movies = ref([])

const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)
updateLoadingVisibility(true)

onMounted(async () => {
  try {
    const response = await Axios.get(NOW_PLAYING_MOVIES_URL)
    movies.value = response.data.results
  } catch (error) {
    console.error(error)
  } finally {
    updateLoadingVisibility(false)
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
        :id="movie.id"
      />
    </div>
  </div>
</template>
