<script setup>
import { computed } from 'vue'
import { useImage } from '@/composable/useImage.js'
import { useRouter } from 'vue-router'
import { months } from '@/constants/months.js'
import useAxios from '@/composable/useAxios.js'
import { MOVIE_CREDITS_URL, TV_SERIES_CREDITS_URL } from '@/constants/endpoints.js'
const router = useRouter()
const { getMovieImageUrl } = useImage()
const props = defineProps(['movieData', 'type', 'id'])

const { data: credits } = useAxios(
  `${props.type === 'tv-series' ? TV_SERIES_CREDITS_URL(props.id) : MOVIE_CREDITS_URL(props.id)}`
)

const year = computed(() => {
  return props.movieData.release_date && new Date(props.movieData.release_date).getFullYear()
})

const releaseDate = computed(() => {
  const date = props.movieData.release_date && new Date(props.movieData.release_date)
  const month = props.movieData.release_date && months[date.getMonth()]
  return props.movieData.release_date && `${date.getDate()}, ${month}, ${date.getFullYear()}`
})

function redirectToSingleMoviePage() {
  router.push({
    path: '/single-movie',
    query: { movieId: props.movieData.id, type: props.type }
  })
}
</script>

<template>
  <article class="movie-list__card">
    <a @click="redirectToSingleMoviePage">
      <img
        class="rounded-md max-w-[200px] hover:cursor-pointer"
        :src="getMovieImageUrl('w342', movieData.poster_path)"
        alt="movie"
      />
    </a>
    <div class="p-3 flex flex-col gap-3">
      <h4>
        <span class="text item-hover">{{ movieData.title }}</span>
        ({{ year }})
      </h4>
      <span class="star flex items-baseline">
        <i class="fa-fw fa-md fa-star text-yellow fa"></i>
        <span class="dark:text-white text-lg">{{ movieData.vote_average }}</span>
        <span>/10</span>
      </span>
      <p class="overflow-ellipsis font-light">{{ movieData.overview }}</p>
      <hr />
      <span class="flex justify-between font-light">
        <span>Run Time: 2h21’</span>
        <span>.</span>
        <span>MMPA: PG-13 </span>
        <span>.</span>
        <span>Release: {{ releaseDate }}</span>
      </span>
      <span class="font-light">Director: <span class="dark:text-blue">Joss Whedon</span></span>
      <span class="font-light flex gap-2" v-if="!!credits"
        >Stars:
        <span class="dark:text-blue" v-for="cast in credits.data.cast.slice(0, 2)" :key="cast.id">
          <span class="dark:hover:text-yellow">{{ cast.name }}</span>
          <span>,</span>
        </span></span
      >
    </div>
  </article>
</template>
