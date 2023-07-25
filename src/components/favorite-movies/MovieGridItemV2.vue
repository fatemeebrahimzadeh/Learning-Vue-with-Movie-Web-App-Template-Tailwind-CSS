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
    class="bg-light-backgroundColor dark:bg-dark-secondary sm:col-span-2 rounded-md shadow-lg text-center"
  >
    <div class="flex flex-col items-center md:items-start md:flex-row px-4 max-w-4xl">
      <a class="flex-none hover:cursor-pointer" @click="redirectToSingleMoviePage">
        <img
          :src="getMovieImageUrl('w342', movieData.poster_path)"
          alt="mv4"
          class="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
        />
      </a>

      <div class="flex-col">
        <p class="pt-4 text-2xl font-bold">{{ movieData.title }} ({{ year }})</p>
        <hr class="hr-text" data-content="" />
        <div class="text-md flex justify-between px-4 my-2">
          <span class="font-bold"
            >2h 2min |
            <span v-for="genre in computedGenres" :key="genre.id">
              <span>{{ genre.name }}</span>
              <span>,</span>
            </span>
          </span>
          <span class="font-bold"></span>
        </div>
        <p class="block px-4 my-4 text-sm text-left">
          {{ movieData.overview }}
        </p>

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

          <button
            type="button"
            class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
          >
            TICKET
          </button>
        </div>
        <!--             <p>ICON BTNS</p> -->
      </div>
    </div>
  </article>
</template>
