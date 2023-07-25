<script setup>
import HeaderSliderMovieCard from '@/components/home/header-slider/HeaderSliderMovieCard.vue'
import { NOW_PLAYING_MOVIES_URL } from '@/constants/endpoints.js'
import useAxios from '@/composable/useAxios.js'
const { data: response } = useAxios(`${NOW_PLAYING_MOVIES_URL}?language=en-US&page=1`)
</script>

<template>
  <div class="slider [&::-webkit-scrollbar]:hidden flex overflow-x-scroll scroll-snap-x-mandatory">
    <div v-if="!!response" class="slider-images flex gap-4 scroll-snap-align-center w-full mb-2">
      <header-slider-movie-card
        v-for="movie in response.data.results"
        :key="movie.id"
        :movieData="movie"
      />
    </div>
  </div>
</template>
