<script setup>
import FavoriteMoviesSidebar from '@/components/favorite-movies/FavoriteMoviesSidebar.vue'
import FilterBar from '@/components/favorite-movies/FilterBar.vue'
import MovieListCard from '@/components/favorite-movies/MovieListCard.vue'
import MovieGridItemV1 from '@/components/favorite-movies/MovieGridItemV1.vue'
import MovieGridItemV2 from '@/components/favorite-movies/MovieGridItemV2.vue'
import PaginationBar from '@/components/favorite-movies/PaginationBar.vue'
import { ref } from 'vue'

defineProps(['movieList'])

const listMode = ref('grid')
</script>

<template>
  <main class="py-10">
    <div class="container flex flex-col lg:flex-row gap-10">
      <div class="lg:basis-2/3" v-if="!!movieList">
        <filter-bar />
        <section
          id="movie-list"
          class="movie-list gap-5 my-10"
          :class="{ hidden: listMode === 'grid', grid: listMode !== 'grid' }"
        >
          <movie-list-card
            v-for="movie in movieList.data.results.slice(0, 10)"
            :key="movie.id"
            :movieData="movie"
            :id="movie.id"
          />
        </section>
        <section
          id="movie-grid"
          class="movie-grid my-10 gap-5 grid-cols-1 sm:grid-cols-2"
          :class="{ hidden: listMode !== 'grid', grid: listMode === 'grid' }"
        >
          <movie-grid-item-v1
            v-for="movie in movieList.data.results.slice(0, 2)"
            :key="movie.id"
            :movieData="movie"
            :id="movie.id"
          />
          <movie-grid-item-v2
            v-for="movie in movieList.data.results.slice(2, 3)"
            :key="movie.id"
            :movieData="movie"
            :id="movie.id"
          />
          <movie-grid-item-v1
            v-for="movie in movieList.data.results.slice(3, 6)"
            :key="movie.id"
            :movieData="movie"
            :id="movie.id"
          />
        </section>
        <pagination-bar />
      </div>
      <favorite-movies-sidebar />
    </div>
  </main>
</template>
