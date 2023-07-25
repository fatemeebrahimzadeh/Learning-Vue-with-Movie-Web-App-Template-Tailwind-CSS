<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['type'])
const router = useRouter()

function redirectToMovieListPage(category) {
  router.push({
    path: '/movie-list',
    query: { type: props.type, category }
  })
}
</script>

<template>
  <ul class="block gap-3 mb-5 lg:flex max-[450px]:text-center">
    <li class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage('popular')"> #POPULAR </a>
    </li>
    <li class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage('top_rated')"> #TOP RATED </a>
    </li>
    <li v-if="type === 'movies'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage('upcoming')"> #UPCOMING </a>
    </li>
    <li v-if="type === 'movies'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage('now_playing')"> #NOW PLAYING </a>
    </li>
    <li v-if="type === 'tv-series'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage('airing_today')"> #AIRING TODAY </a>
    </li>
    <li v-if="type === 'tv-series'" class="item-hover hover:cursor-pointer">
      <a @click="redirectToMovieListPage('on_the_air')"> #ON THE AIR </a>
    </li>
  </ul>
</template>
