<script setup>
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'

import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps(['movie', 'type'])

function redirectToSingleMoviePage() {
  router.push({
    path: '/single-movie',
    query: { movieId: props.movie.id, type: props.type }
  })
}
</script>

<template>
  <div class="movie-item relative group">
    <a @click="redirectToSingleMoviePage" class="hover:cursor-pointer">
      <img
        class="flex-shrink-0 object-cover"
        :src="`${API_IMAGE_BASE_URL}w342${movie.poster_path}`"
      />
    </a>
  </div>
</template>
