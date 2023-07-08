<script setup>
import SingleMovieHeader from '@/components/SingleMovieHeader.vue'
import SingleMovieMain from '@/components/SingleMovieMain.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
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
  />
</template>
