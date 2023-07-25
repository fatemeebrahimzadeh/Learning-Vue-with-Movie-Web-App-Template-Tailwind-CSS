<script setup>
import CategoriesSidebar from '@/components/home/category-section/CategoriesSidebar.vue'
import CategorySection from '@/components/home/category-section/CategorySection.vue'
import { TV_SHOWS_URL, MOVIES_URL } from '@/constants/endpoints.js'
import useAxios from '@/composable/useAxios.js'
const { data: tvShows } = useAxios(
  `${TV_SHOWS_URL}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
)
const { data: movies } = useAxios(
  `${MOVIES_URL}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
)
</script>

<template>
  <section>
    <div class="container flex flex-col gap-5 md:flex-row">
      <div class="w-full flex flex-col gap-5">
        <template v-if="movies">
          <category-section :list="movies.data.results.slice(0, 4)" title="MOVIES" type="movies" />
        </template>
        <template v-if="tvShows">
          <category-section
            :list="tvShows.data.results.slice(0, 4)"
            title="ON TV"
            type="tv-series"
          />
        </template>
      </div>
      <categories-sidebar />
    </div>
  </section>
</template>
