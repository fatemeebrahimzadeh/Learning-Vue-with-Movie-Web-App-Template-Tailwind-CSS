<script setup>
import { genres } from '@/constants/genres.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
const router = useRouter()
const props = defineProps(['movieData'])

const computedGenres = computed(() => {
  return props.movieData.genre_ids.map((id) => {
    const genre = genres.find((g) => g.id === id)
    return genre && genre
  })
})

function redirectToSingleMoviePage() {
  router.push({
    path: '/single-movie',
    query: { movieId: props.movieData.id, type: 'movies' }
  })
}
</script>

<template>
  <div class="movie-item relative group hover:cursor-pointer">
    <div class="mv-img">
      <a @click="redirectToSingleMoviePage">
        <img class="slider-image" :src="getMovieImageUrl('w342', movieData.poster_path)" />
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
        <a>{{ movieData.title }}</a>
      </h6>
      <p>
        <i class="fa-fw fa-md fa-star text-[#f5b50a] fa"></i
        ><span class="text-lg text-white">{{ movieData.vote_average }}</span> /10
      </p>
    </div>
  </div>
</template>
