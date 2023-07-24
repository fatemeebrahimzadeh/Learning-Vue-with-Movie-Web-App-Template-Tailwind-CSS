<script setup>
import SingleMovieHeader from '@/components/single-movie/SingleMovieHeader.vue'
import SingleMovieMain from '@/components/single-movie/SingleMovieMain.vue'
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'
import {
  MOVIE_DETAILS_URL,
  TV_SERIES_DETAILS_URL,
  TV_SERIES_IMAGES_URL,
  MOVIE_IMAGES_URL,
  TV_SERIES_KEYWORDS_URL,
  MOVIE_KEYWORDS_URL,
  TV_SERIES_REVIEWS_URL,
  MOVIE_REVIEWS_URL,
  MOVIE_CREDITS_URL,
  TV_SERIES_CREDITS_URL
} from '@/constants/endpoints.js'
import { Axios } from '@/utils/axios.js'
import { useRoute } from 'vue-router'
const route = useRoute()
import { inject, onMounted, ref } from 'vue'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'

const movie = ref({})
const relatedMovies = ref({})
const movieImages = ref({})
const movieKeywords = ref({})
const movieReview = ref({})
const movieCast = ref({})
const movieCrew = ref({})

const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)
updateLoadingVisibility(true)

onMounted(async () => {
  try {
    const movieDetail = await Axios.get(
      `${
        route.query.type === 'tv-series'
          ? TV_SERIES_DETAILS_URL(route.query.movieId)
          : MOVIE_DETAILS_URL(route.query.movieId)
      }?language=en-US`
    )
    movie.value = movieDetail.data
    const recommendedMovies = await Axios.get(
      `${
        route.query.type === 'tv-series'
          ? TV_SERIES_DETAILS_URL(route.query.movieId)
          : MOVIE_DETAILS_URL(route.query.movieId)
      }/recommendations?language=en-US&page=1`
    )
    relatedMovies.value = recommendedMovies.data.results.slice(0, 4)
    const movieImagesData = await Axios.get(
      `${
        route.query.type === 'tv-series'
          ? TV_SERIES_IMAGES_URL(route.query.movieId)
          : MOVIE_IMAGES_URL(route.query.movieId)
      }`
    )
    movieImages.value = movieImagesData.data.posters.slice(0, 4)
    const movieKeywordsData = await Axios.get(
      `${
        route.query.type === 'tv-series'
          ? TV_SERIES_KEYWORDS_URL(route.query.movieId)
          : MOVIE_KEYWORDS_URL(route.query.movieId)
      }`
    )
    movieKeywords.value = movieKeywordsData.data.keywords
    const movieReviewsData = await Axios.get(
      `${
        route.query.type === 'tv-series'
          ? TV_SERIES_REVIEWS_URL(route.query.movieId)
          : MOVIE_REVIEWS_URL(route.query.movieId)
      }`
    )
    movieReview.value = movieReviewsData.data.results[0] && movieReviewsData.data.results[0]

    const {
      data: { cast, crew }
    } = await Axios.get(
      `${
        route.query.type === 'tv-series'
          ? TV_SERIES_CREDITS_URL(route.query.movieId)
          : MOVIE_CREDITS_URL(route.query.movieId)
      }`
    )
    movieCast.value = cast && cast.slice(0, 10)
    movieCrew.value = crew && crew
  } catch (error) {
    console.error(error)
  } finally {
    updateLoadingVisibility(false)
  }
})
</script>

<template>
  <single-movie-header :backdrop_src="`${API_IMAGE_BASE_URL}w1280${movie.backdrop_path}`" />
  <single-movie-main
    :src="`${API_IMAGE_BASE_URL}w342${movie.poster_path}`"
    :title="movie.title"
    :release_date="movie.release_date"
    :vote_count="movie.vote_count"
    :overview="movie.overview"
    :rate="movie.vote_average"
    :genres="movie.genres"
    :run_time="movie.runtime"
    :relatedMovies="relatedMovies"
    :movieImages="movieImages"
    :movieKeywords="movieKeywords"
    :movieReview="movieReview"
    :movieCast="movieCast"
    :movieCrew="movieCrew"
    :type="route.query.type"
  />
</template>
