<script setup>
import FavoriteMoviesHeader from '@/components/favorite-movies/FavoriteMoviesHeader.vue'
import FavoriteMoviesMain from '@/components/favorite-movies/FavoriteMoviesMain.vue'
import { useRoute } from 'vue-router'
import {
  GET_FAVORITE_MOVIE_LIST,
  TV_SERIES_BY_CATEGORY_URL,
  MOVIE_LIST_BY_CATEGORY_URL
} from '@/constants/endpoints'
import { inject, computed } from 'vue'
import useAxios from '@/composable/useAxios.js'
import { USER } from '@/constants/provide-keys.js'

const user = inject(USER)
const route = useRoute()

const pageType = computed(() => route.query.type)
const pageCategory = computed(() => route.query.category)
const title = computed(() => {
  if (pageType.value === 'favorite-movies') return 'FAVORITE MOVIES'
  return `${pageType.value.toUpperCase()} ${pageCategory.value.toUpperCase()}`
})

const url = computed(() => {
  if (pageType.value === 'favorite-movies') return GET_FAVORITE_MOVIE_LIST(user.value.id)
  else if (pageType.value === 'tv-series') return TV_SERIES_BY_CATEGORY_URL(route.query.category)
  return MOVIE_LIST_BY_CATEGORY_URL(route.query.category)
})

const { data: movieList } = useAxios(url.value)
</script>

<template>
  <favorite-movies-header :title="title" />
  <favorite-movies-main :movieList="movieList" :type="pageType" />
</template>
