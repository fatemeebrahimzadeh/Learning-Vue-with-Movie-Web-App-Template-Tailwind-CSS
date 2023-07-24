<script setup>
import CategoryMovieItem from '@/components/home/category-section/CategoryMovieItem.vue'
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'
import CategoryAnchorTagsList from '@/components/home/category-section/CategoryAnchorTagsList.vue'

defineProps(['list', 'title', 'type'])
</script>

<template>
  <section class="movie">
    <header class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 sm:items-center">
      <h2 class="text-black dark:text-white text-3xl max-[450px]:text-center">{{ title }}</h2>
      <a class="text-sm item-hover max-[450px]:text-center"
        >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
      ></a>
    </header>
    <section class="tabs-link">
      <category-anchor-tags-list :type="type" />
      <div class="movie-list flex flex-wrap gap-4 max-[450px]:justify-center">
        <category-movie-item
          v-for="item in list"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :rate="item.vote_average"
          :src="`${API_IMAGE_BASE_URL}w185${item.poster_path}`"
          :type="type"
        />
      </div>
    </section>
  </section>
</template>
