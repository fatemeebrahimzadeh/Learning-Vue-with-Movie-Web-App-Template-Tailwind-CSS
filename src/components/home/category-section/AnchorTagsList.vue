<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['type'])
const router = useRouter()

function redirectToMovieListPage() {
  router.push({
    path: '/movie-list',
    query: { movieId: props.type }
  })
}
</script>

<template>
  <ul class="block gap-3 mb-5 lg:flex max-[450px]:text-center">
    <li class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage"> #POPULAR </a>
    </li>
    <li class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage"> #TOP RATED </a>
    </li>
    <li v-if="type === 'tv-series'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage"> #UPCOMING </a>
    </li>
    <li v-if="type === 'tv-series'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage"> #NOW PLAYING </a>
    </li>
    <li v-if="type === 'movies'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage"> #AIRING TODAY </a>
    </li>
    <li v-if="type === 'movies'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage"> #ON THE AIR </a>
    </li>
  </ul>
</template>
