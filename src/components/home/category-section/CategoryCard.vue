<script setup>
import { useRouter } from 'vue-router'
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
const router = useRouter()
const props = defineProps(['movieData'])

function redirectToSingleMoviePage() {
  router.push({
    path: '/single-movie',
    query: { movieId: props.movieData.id, type: props.type }
  })
}
</script>

<template>
  <div class="movie-item relative group">
    <img class="flex-shrink-0 object-cover" :src="getMovieImageUrl('w185', movieData.poster_path)" />
    <div class="movie-item__hover">
      <a class="button z-10 hover:cursor-pointer" @click="redirectToSingleMoviePage"> READ MORE </a>
    </div>
    <div class="movie-item__title-in">
      <h6 class="movie-item__title-in__heading">
        <a>{{ movieData.name }}</a>
      </h6>
      <p>
        <i class="fa-fw fa-md fa-star text-[#f5b50a] fa"></i
        ><span class="text-lg text-white">{{ vote_average }}</span> /10
      </p>
    </div>
  </div>
</template>
