<script setup>
import FavoriteMoviesSidebar from '@/components/favorite-movies/FavoriteMoviesSidebar.vue'
import FilterBar from '@/components/favorite-movies/FilterBar.vue'
import MovieListCard from '@/components/favorite-movies/MovieListCard.vue'
import MovieGridItemV1 from '@/components/favorite-movies/MovieGridItemV1.vue'
import MovieGridItemV2 from '@/components/favorite-movies/MovieGridItemV2.vue'
import PaginationBar from '@/components/favorite-movies/PaginationBar.vue'
</script>

<template>
  <main class="py-10">
    <div class="container flex flex-col lg:flex-row gap-10">
      <div class="lg:basis-2/3">
        <filter-bar />
        <!-- replace grid to show -->
        <section id="movie-list" class="hidden movie-list gap-5 my-10">
          <movie-list-card v-for="index in 5" :key="index" />
        </section>
        <section id="movie-grid" class="movie-grid my-10 grid gap-5 grid-cols-1 sm:grid-cols-2">
          <movie-grid-item-v1 />
          <movie-grid-item-v1 />
          <movie-grid-item-v2 />
          <movie-grid-item-v1 />
          <movie-grid-item-v1 />
          <movie-grid-item-v1 />
        </section>
        <pagination-bar />
      </div>
      <favorite-movies-sidebar />
    </div>
  </main>
</template>
