<script setup>
import TrailerMovieItem from '@/components/TrailerMovieItem.vue'
</script>

<template>
  <div
    class="slider max-h-[435px] w-full lg:w-[400px] 2xl:w-[600px] overflow-y-scroll scroll-snap-y-mandatory"
  >
    <trailer-movie-item />
    <trailer-movie-item />
    <trailer-movie-item />
    <trailer-movie-item />
    <trailer-movie-item />
    <trailer-movie-item />
  </div>
</template>
