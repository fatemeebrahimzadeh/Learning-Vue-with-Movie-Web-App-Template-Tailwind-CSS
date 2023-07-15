<script setup>
import CategoryMovieItem from '@/components/home/category-section/CategoryMovieItem.vue'
import CategoryAnchorTagsList from '@/components/home/category-section/CategoryAnchorTagsList.vue'
import { inject, onMounted, ref } from 'vue'
import { Axios } from '@/utils/axios.js'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'
import { TV_SHOWS_URL } from '@/constants/endpoints.js'

let tvShows = ref([])
const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)
updateLoadingVisibility(true)

onMounted(async () => {
  try {
    const response = await Axios.get(TV_SHOWS_URL)
    tvShows.value = response.data.results.slice(0, 4)
  } catch (error) {
    console.error(error)
  } finally {
    updateLoadingVisibility(false)
  }
})
</script>

<template>
  <section class="movie">
    <header class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 sm:items-center">
      <h2 class="text-black dark:text-white text-3xl max-[450px]:text-center">ON TV</h2>
      <a class="text-sm item-hover max-[450px]:text-center"
        >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
      ></a>
    </header>
    <section class="tabs-link">
      <category-anchor-tags-list />
      <div class="movie-list flex flex-wrap gap-4 max-[450px]:justify-center">
        <category-movie-item
          v-for="tvShow in tvShows"
          :key="tvShow.id"
          :name="tvShow.name"
          :rate="tvShow.vote_average"
          :src="`${API_IMAGE_BASE_URL}w185${tvShow.poster_path}`"
        />
      </div>
    </section>
  </section>
</template>
