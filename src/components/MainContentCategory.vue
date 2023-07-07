<script setup>
import CategoryMovieItem from '@/components/CategoryMovieItem.vue'
import CategoryAnchorTagsList from '@/components/CategoryAnchorTagsList.vue'
</script>

<template>
  <section class="movie">
    <header class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 sm:items-center">
      <h2 class="text-black dark:text-white text-3xl max-[450px]:text-center">IN THEATER</h2>
      <a class="text-sm item-hover max-[450px]:text-center" href="#"
        >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
      ></a>
    </header>
    <section class="tabs-link">
      <category-anchor-tags-list />
      <div class="movie-list flex flex-wrap gap-4 max-[450px]:justify-center">
        <category-movie-item v-for="index in 4" :key="index" />
      </div>
    </section>
  </section>
</template>
