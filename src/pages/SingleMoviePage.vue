<script setup>
import SingleMovieHeader from '@/components/SingleMovieHeader.vue'
import SingleMovieMain from '@/components/SingleMovieMain.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

import MvItem1 from '@/assets/images/mv-item1.jpg'
import MvItem2 from '@/assets/images/mv-item2.jpg'
import MvItem3 from '@/assets/images/mv-item3.jpg'
import MvItem4 from '@/assets/images/mv-item4.jpg'

const relatedMovies = [
  {
    id: 1,
    src: MvItem1
  },
  {
    id: 2,
    src: MvItem2
  },
  {
    id: 3,
    src: MvItem3
  },
  {
    id: 4,
    src: MvItem4
  }
]
</script>

<template>
  <single-movie-header />
  <single-movie-main
    :src="route.query.src"
    :title="route.query.title"
    :rate="route.query.rate"
    :computedGenres="route.query.computedGenres"
    :release_date="route.query.release_date"
    :vote_count="route.query.vote_count"
    :overview="route.query.overview"
    :relatedMovies="relatedMovies"
  />
</template>
