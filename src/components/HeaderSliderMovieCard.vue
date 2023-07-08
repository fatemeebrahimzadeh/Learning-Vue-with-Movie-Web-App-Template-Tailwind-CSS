<script setup>
import { RouterLink } from 'vue-router'
import { genres } from '@/constants/genres.js'
import { computed } from 'vue'

const props = defineProps(['src', 'title', 'rate', 'genre_ids'])

const computedGenres = computed(() => {
  return props.genre_ids.map((id) => {
    const genre = genres.find((g) => g.id === id)
    return genre && genre
  })
})
</script>

<template>
  <div class="movie-item relative group">
    <div class="mv-img">
      <router-link to="/single-movie">
        <img class="slider-image" :src="src" />
      </router-link>
    </div>
    <div class="slider-item__title-in">
      <div class="cate flex flex-wrap gap-1">
        <span
          v-for="genre in computedGenres"
          :key="genre.id"
          :style="{ backgroundColor: genre.color }"
          class="slider-item__title-in__status"
        >
          <a href="#">{{ genre.name }}</a>
        </span>
      </div>
      <h6 class="slider-item__title-in__heading">
        <a href="#">{{ title }}</a>
      </h6>
      <p>
        <i class="fa-fw fa-md fa-star text-[#f5b50a] fa"></i
        ><span class="text-lg text-white">{{ rate }}</span> /10
      </p>
    </div>
  </div>
</template>
