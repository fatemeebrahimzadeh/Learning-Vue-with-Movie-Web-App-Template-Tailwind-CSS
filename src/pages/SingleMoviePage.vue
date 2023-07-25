<script setup>
import SingleMovieHeader from '@/components/single-movie/SingleMovieHeader.vue'
import SingleMovieMain from '@/components/single-movie/SingleMovieMain.vue'
import { MOVIE_DETAILS_URL, TV_SERIES_DETAILS_URL } from '@/constants/endpoints.js'
import { useRoute } from 'vue-router'
import useAxios from '@/composable/useAxios.js'
import { watch } from 'vue'
const route = useRoute()

const { data: response, dofetch } = useAxios(
  `${
    route.query.type === 'tv-series'
      ? TV_SERIES_DETAILS_URL(route.query.movieId)
      : MOVIE_DETAILS_URL(route.query.movieId)
  }?language=en-US`
)

watch(
  () => route.query.movieId,
  (newID) => {
    dofetch(
      `${
        route.query.type === 'tv-series' ? TV_SERIES_DETAILS_URL(newID) : MOVIE_DETAILS_URL(newID)
      }?language=en-US`
    )
  }
)
</script>

<template>
  <single-movie-header :movieData="response" />
  <single-movie-main :movieData="response" :type="route.query.type" :id="route.query.movieId" />
</template>
