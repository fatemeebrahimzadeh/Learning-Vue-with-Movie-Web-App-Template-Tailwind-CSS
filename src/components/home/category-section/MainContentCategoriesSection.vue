<script setup>
import CategoriesSidebar from '@/components/home/category-section/CategoriesSidebar.vue'
import CategorySection from '@/components/home/category-section/CategorySection.vue'
import { inject, onMounted, ref } from 'vue'
import { Axios } from '@/utils/axios.js'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'
import { TV_SHOWS_URL, MOVIES_URL } from '@/constants/endpoints.js'

let tvShows = ref([])
let movies = ref([])
const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)
updateLoadingVisibility(true)

onMounted(async () => {
  try {
    const tvShowsResponse = await Axios.get(TV_SHOWS_URL)
    tvShows.value = tvShowsResponse.data.results.slice(0, 4)
    const moviesResponse = await Axios.get(MOVIES_URL)
    movies.value = moviesResponse.data.results.slice(0, 4)
  } catch (error) {
    console.error(error)
  } finally {
    updateLoadingVisibility(false)
  }
})
</script>

<template>
  <section>
    <div class="container flex flex-col gap-5 md:flex-row">
      <div class="w-full flex flex-col gap-5">
        <category-section :list="movies" title="MOVIES" type="movies" />
        <category-section :list="tvShows" title="ON TV" type="tv-series" />
      </div>
      <categories-sidebar />
    </div>
  </section>
</template>
