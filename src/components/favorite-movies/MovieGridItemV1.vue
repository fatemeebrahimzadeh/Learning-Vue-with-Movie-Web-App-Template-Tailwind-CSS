<script setup>
import { computed } from 'vue'
import { useImage } from '@/composable/useImage.js'
import { genres } from '@/constants/genres.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const { getMovieImageUrl } = useImage()
const props = defineProps(['movieData', 'type', 'id'])

const year = computed(() => {
  return props.movieData.release_date && new Date(props.movieData.release_date).getFullYear()
})

const computedGenres = computed(() => {
  return props.movieData.genre_ids.map((id) => {
    const genre = genres.find((g) => g.id === id)
    return genre && genre
  })
})

function redirectToSingleMoviePage() {
  router.push({
    path: '/single-movie',
    query: { movieId: props.movieData.id, type: props.type }
  })
}
</script>

<template>
  <article
    class="h-fit flex-grow bg-light-backgroundColor dark:bg-dark-secondary shadow-md rounded m-3"
  >
    <a class="h-3/4 w-full hover:cursor-pointer" @click="redirectToSingleMoviePage">
      <img
        class="w-full h-full object-cover rounded-t"
        :src="getMovieImageUrl('w342', movieData.poster_path)"
        alt="mv1"
      />
    </a>
    <div class="flex-col px-4">
      <p class="pt-4 text-2xl font-bold overflow-hidden text-ellipsis">
        {{ movieData.title }} ({{ year }})
      </p>
      <hr class="hr-text" data-content="" />
      <div class="text-md flex justify-between px-4 my-2">
        <span class="font-bold"
          >2h 2min |
          <span v-for="genre in computedGenres.slice(0, 2)" :key="genre.id">
            <span>{{ genre.name }}</span>
            <span>,</span>
          </span>
        </span>
        <span class="font-bold"></span>
      </div>
      <p class="flex text-md px-4 my-2">
        Rating: {{ movieData.vote_average }}/10
        <span class="font-bold px-2">|</span>
        Mood: Dark
      </p>

      <div class="text-xs">
        <button
          type="button"
          class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
        >
          TRAILER
        </button>

        <button
          type="button"
          class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
        >
          IMDB
        </button>
      </div>
      <!--             <p>ICON BTNS</p> -->
    </div>
  </article>
</template>
