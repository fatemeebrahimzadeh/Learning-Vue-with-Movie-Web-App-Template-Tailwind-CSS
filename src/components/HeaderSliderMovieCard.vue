<script setup>
import { genres } from '@/constants/genres.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps([
  'src',
  'title',
  'rate',
  'genre_ids',
  'release_date',
  'vote_count',
  'overview'
])

const computedGenres = computed(() => {
  return props.genre_ids.map((id) => {
    const genre = genres.find((g) => g.id === id)
    return genre && genre
  })
})

function redirectToSingleMoviePage() {
  router.push({
    path: '/single-movie',
    query: { ...props, computedGenres: computedGenres.value }
  })
}
</script>

<template>
  <div class="movie-item relative group">
    <div class="mv-img">
      <a @click="redirectToSingleMoviePage">
        <img class="slider-image" :src="src" />
      </a>
    </div>
    <div class="slider-item__title-in">
      <div class="cate flex flex-wrap gap-1">
        <span
          v-for="genre in computedGenres"
          :key="genre.id"
          :style="{ backgroundColor: genre.color }"
          class="slider-item__title-in__status"
        >
          <span>{{ genre.name }}</span>
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
