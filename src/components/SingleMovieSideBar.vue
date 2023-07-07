<script setup>
import MovieSingle from '@/assets/images/movie-single.jpg'
</script>

<template>
  <aside
    class="w-fit bg-dark-primary lg:sticky top-1 lg:border-2 lg:border-dark-secondary flex flex-col items-center gap-5 pb-5 h-fit"
  >
    <img class="w-fit" :src="MovieSingle" alt="movie-single" />
    <button
      class="sidebar-button bg-red text-white before:content-trailer after:content-['WATCH_TRAILER']"
    ></button>
    <button
      class="sidebar-button bg-yellow text-black before:content-ticket after:content-['BUY_TICKET']"
    ></button>
  </aside>
</template>
