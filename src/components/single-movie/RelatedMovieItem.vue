<script setup>
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
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
      <img class="flex-shrink-0 object-cover" :src="getMovieImageUrl('w342', movie.poster_path)" />
    </a>
  </div>
</template>
