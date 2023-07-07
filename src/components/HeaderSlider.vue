<script setup>
import HeaderSliderMovieCard from '@/components/HeaderSliderMovieCard.vue'
</script>

<template>
  <div class="slider [&::-webkit-scrollbar]:hidden flex overflow-x-scroll scroll-snap-x-mandatory">
    <div class="slider-images flex gap-4 scroll-snap-align-center w-full mb-2">
      <header-slider-movie-card v-for="index in 10" :key="index" />
    </div>
  </div>
</template>
