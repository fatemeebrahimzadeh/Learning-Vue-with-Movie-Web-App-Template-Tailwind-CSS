<script setup>
import ads1 from '@/assets/images/ads1.png'
import SingleMovieSideBar from '@/components/single-movie/SingleMovieSideBar.vue'
import RelatedMovieItem from '@/components/single-movie/RelatedMovieItem.vue'
import SingleMovieItem from '@/components/single-movie/SingleMovieItem.vue'
import CastItem from '@/components/single-movie/CastItem.vue'
import { Axios } from '@/utils/axios.js'
import useAxios from '@/composable/useAxios.js'
import { USER } from '@/constants/provide-keys.js'
import { inject, computed, watch } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useImage } from '@/composable/useImage.js'
import { months } from '@/constants/months.js'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'
import {
  ADD_MOVIE_TO_FAVORITE_LIST,
  MOVIE_DETAILS_URL,
  TV_SERIES_DETAILS_URL,
  TV_SERIES_IMAGES_URL,
  MOVIE_IMAGES_URL,
  TV_SERIES_KEYWORDS_URL,
  MOVIE_KEYWORDS_URL,
  TV_SERIES_REVIEWS_URL,
  MOVIE_REVIEWS_URL,
  MOVIE_CREDITS_URL,
  TV_SERIES_CREDITS_URL,
  MOVIE_STATE_URL,
  TV_SERIES_STATE_URL
} from '@/constants/endpoints.js'
const { getMovieImageUrl } = useImage()
const $toast = useToast()
const user = inject(USER)

const props = defineProps(['movieData', 'type', 'id'])

const { data: relatedMovies, dofetch: getRelatedMovies } = useAxios(
  `${
    props.type === 'tv-series' ? TV_SERIES_DETAILS_URL(props.id) : MOVIE_DETAILS_URL(props.id)
  }/recommendations?language=en-US&page=1`
)
const { data: movieImages, dofetch: getMovieImages } = useAxios(
  `${props.type === 'tv-series' ? TV_SERIES_IMAGES_URL(props.id) : MOVIE_IMAGES_URL(props.id)}`
)
const { data: movieKeywords, dofetch: getMovieKeywords } = useAxios(
  `${props.type === 'tv-series' ? TV_SERIES_KEYWORDS_URL(props.id) : MOVIE_KEYWORDS_URL(props.id)}`
)
const { data: movieReview, dofetch: getMovieReview } = useAxios(
  `${props.type === 'tv-series' ? TV_SERIES_REVIEWS_URL(props.id) : MOVIE_REVIEWS_URL(props.id)}`
)
const { data: credits, dofetch: getCredits } = useAxios(
  `${props.type === 'tv-series' ? TV_SERIES_CREDITS_URL(props.id) : MOVIE_CREDITS_URL(props.id)}`
)

const directors = computed(() => {
  return (
    credits.value &&
    credits.value.data &&
    credits.value.data.cast &&
    credits.value.data.cast.filter((crew) => crew.known_for_department === 'Directing')
  )
})

const writers = computed(() => {
  return (
    credits.value &&
    credits.value.data &&
    credits.value.data.cast &&
    credits.value.data.cast.filter((crew) => crew.known_for_department === 'writing')
  )
})

const year = computed(() => {
  return (
    props.movieData.data.release_date && new Date(props.movieData.data.release_date).getFullYear()
  )
})

const releaseDate = computed(() => {
  const date = props.movieData.data.release_date && new Date(props.movieData.data.release_date)

  const month = props.movieData.data.release_date && months[date.getMonth()]
  return props.movieData.data.release_date && `${month}, ${date.getDate()}, ${date.getFullYear()}`
})

const reviewDate = computed(() => {
  if (!movieReview.data) return
  const date = new Date(movieReview.data.results[0].created_at)
  const month = months[date.getMonth()]
  return `${month}, ${date.getDate()}, ${date.getFullYear()}`
})

const reviewDetail = computed(() => {
  return movieReview.data && movieReview.data.results[0].author_details.rating
})

const { data: movieState, dofetch: getMovieState } = useAxios(
  `${props.type === 'tv-series' ? TV_SERIES_STATE_URL(props.id) : MOVIE_STATE_URL(props.id)}`
)

const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)

async function addMovieToFavoriteList() {
  if (!user.value) {
    $toast.error('Please log in first!')
  } else {
    try {
      updateLoadingVisibility(true)
      await Axios.post(ADD_MOVIE_TO_FAVORITE_LIST(user), {
        media_type: 'movie',
        media_id: props.id,
        favorite: !movieState.value.data.favorite
      })
      getMovieState(
        `${props.type === 'tv-series' ? TV_SERIES_STATE_URL(props.id) : MOVIE_STATE_URL(props.id)}`
      )
      $toast.success('Success!')
    } catch (error) {
      $toast.error('Somthing wrong happened!')
    } finally {
      updateLoadingVisibility(false)
    }
  }
}

watch(
  () => props.id,
  async () => {
    getRelatedMovies(
      `${
        props.type === 'tv-series' ? TV_SERIES_DETAILS_URL(props.id) : MOVIE_DETAILS_URL(props.id)
      }/recommendations?language=en-US&page=1`
    )
    getMovieImages(
      `${props.type === 'tv-series' ? TV_SERIES_IMAGES_URL(props.id) : MOVIE_IMAGES_URL(props.id)}`
    )
    getMovieKeywords(
      `${
        props.type === 'tv-series' ? TV_SERIES_KEYWORDS_URL(props.id) : MOVIE_KEYWORDS_URL(props.id)
      }`
    )
    getMovieReview(
      `${
        props.type === 'tv-series' ? TV_SERIES_REVIEWS_URL(props.id) : MOVIE_REVIEWS_URL(props.id)
      }`
    )
    getCredits(
      `${
        props.type === 'tv-series' ? TV_SERIES_CREDITS_URL(props.id) : MOVIE_CREDITS_URL(props.id)
      }`
    )
    getMovieState(
      `${props.type === 'tv-series' ? TV_SERIES_STATE_URL(props.id) : MOVIE_STATE_URL(props.id)}`
    )
  }
)
</script>

<template>
  <main class="py-10 z-20 relative">
    <div
      class="container flex flex-col items-center lg:items-start lg:flex-row -mt-80 gap-10"
      v-if="!!movieData"
    >
      <single-movie-side-bar :src="getMovieImageUrl('w342', movieData.data.poster_path)" />
      <div class="basis-2/3 flex flex-col gap-8">
        <h1 class="font-extralight text-2xl">
          <span
            class="dark:text-white font-bold text-4xl overflow-hidden text-ellipsis line-clamp-1"
          >
            {{ movieData.data.title }}</span
          >
          {{ year }}
        </h1>
        <div class="flex flex-col sm:flex-row gap-5 text-red">
          <a @click="addMovieToFavoriteList" class="flex items-center gap-1 hover:cursor-pointer">
            <span
              class="circle-border before:content-heart"
              :class="{ 'bg-white': movieState.data.favorite }"
            ></span>
            <span>ADD TO FAVORITE</span>
          </a>
          <a class="flex items-center gap-1">
            <span class="circle-border before:content-share"></span>
            <span>SHARE</span>
          </a>
        </div>
        <div class="sm:border-y-[1px] sm:border-dark-100 flex flex-col sm:flex-row text-xs sm:h-12">
          <div
            class="flex justify-between items-center p-1 font-extralight sm:border-r-[1px] sm:border-dark-100 sm:basis-1/4"
          >
            <span class="star flex items-center gap-2">
              <i class="fa-fw fa-xl fa-star text-yellow fa"></i>
              <div>
                <span class="text-white text-lg">{{ movieData.data.vote_average }}</span>
                <span>/10</span>
                <p class="text-black dark:text-blue">{{ movieData.data.vote_count }} Reviews</p>
              </div>
            </span>
          </div>
          <div class="sm:basis-3/4 flex items-center text-lg gap-2 p-2">
            Rate This Movie:
            <span>
              <i
                v-for="index in 5"
                :key="index"
                class="fa-fw fa-xl fa-star fa"
                :class="{ 'text-yellow': index <= movieData.data.vote_average / 2 }"
              ></i>
            </span>
          </div>
        </div>
        <ul class="flex flex-col md:flex-row justify-between">
          <li class="single-movie-tab selected">
            <a href="#overview"> OVERVIEW </a>
          </li>
          <li class="single-movie-tab">
            <a href="#reviews">REVIEWS</a>
          </li>
          <li class="single-movie-tab">
            <a href="#cast">CAST & CREW</a>
          </li>
          <li class="single-movie-tab">
            <a href="#media">MEDIA</a>
          </li>
          <li class="single-movie-tab">
            <a href="#related-movies">RELATED MOVIES</a>
          </li>
        </ul>
        <div class="flex flex-col gap-10 md:flex-row md:gap-0">
          <div class="basis-3/4 md:pr-10 flex flex-col gap-10">
            <p id="overview" class="text-black dark:text-text font-light scroll-m-10">
              {{ movieData.data.overview }}
            </p>
            <div id="media" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">VIDEOS & PHOTOS</h2>
                <a
                  class="text-sm hover:text-red dark:hover:text-yellow text-blue font-light hover:cursor-pointer"
                  >All 5 Videos & 245 Photos <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="flex flex-wrap gap-2" v-if="!!movieImages">
                <single-movie-item
                  v-for="(imageSrc, index) in movieImages.data.posters.slice(0, 4)"
                  :key="index"
                  :src="getMovieImageUrl('w92', imageSrc.file_path)"
                />
                <!-- <div class="movie-item relative group">
                  <img class="hover:cursor-pointer" :src="image4" alt="image4" />
                  <div class="movie-item-hover justify-center items-center">
                    <button>
                      <i class="fa-fw fa-lg fa fa-play text-red"></i>
                    </button>
                  </div>
                </div> -->
              </div>
            </div>
            <div id="cast" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">CAST</h2>
                <a
                  class="text-sm hover:text-red dark:hover:text-yellow text-blue font-light hover:cursor-pointer"
                  >Full Cast & Crew <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="flex flex-col gap-10" v-if="!!credits">
                <cast-item
                  v-for="cast in credits.data.cast.slice(0, 10)"
                  :key="cast.id"
                  :cast="cast"
                />
              </div>
            </div>
            <div id="reviews" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">USER REVIEWS</h2>
                <a
                  class="text-sm text-blue hover:text-red dark:hover:text-yellow font-light hover:cursor-pointer"
                  >See All 56 Reviews <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="flex flex-col gap-2" v-if="!!movieReview">
                <span>
                  <i
                    v-for="index in 5"
                    :key="index"
                    class="fa-fw fa-xl fa-star fa"
                    :class="{ 'text-yellow': index <= reviewDetail / 2 }"
                  ></i>
                </span>
                <span
                  >{{ reviewDate }} by
                  <span
                    class="text-blue hover:text-red hover:dark:text-yellow hover:cursor-pointer font-extralight"
                  >
                    {{ movieReview.data.results[0].author }}</span
                  ></span
                >
                <p class="text-black dark:text-text font-light">
                  {{ movieReview.data.results[0].content }}
                </p>
              </div>
            </div>
            <div id="related-movies" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">REALATED MOVIES</h2>
                <a
                  class="text-sm hover:text-red dark:hover:text-yellow text-blue font-light hover:cursor-pointer"
                  >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div
                class="movie-list flex overflow-hidden gap-4 max-[450px]:justify-center"
                v-if="!!relatedMovies"
              >
                <related-movie-item
                  v-for="relatedMovie in relatedMovies.data.results.slice(0, 4)"
                  :key="relatedMovie.id"
                  :movie="relatedMovie"
                  :type="type"
                />
              </div>
            </div>
          </div>
          <aside class="text-black dark:text-text basis-1/4 flex flex-col gap-5">
            <div>
              Director:
              <div>
                <span
                  v-for="director in directors"
                  :key="director.id"
                  class="text-blue hover hover:cursor-pointer font-light after:content-[','] last-of-type:after:content-['']"
                  >{{ director.name }}</span
                >
              </div>
            </div>
            <div class="text-black dark:text-text">
              Writer:
              <div>
                <span
                  v-for="writer in writers"
                  :key="writer.id"
                  class="text-blue hover hover:cursor-pointer font-light after:content-[','] last-of-type:after:content-['']"
                  >{{ writer.name }}</span
                >
              </div>
            </div>
            <div class="text-black dark:text-text" v-if="!!credits">
              Stars:
              <div v-for="star in credits.data.cast.slice(0, 10)" :key="star.id">
                <span class="text-blue hover hover:cursor-pointer font-light">{{ star.name }}</span>
                <span>,</span>
              </div>
            </div>
            <div class="text-black dark:text-text">
              Genres:
              <div>
                <span class="" v-for="genre in movieData.data.genres" :key="genre.id">
                  <span class="text-blue hover hover:cursor-pointer font-light">{{
                    genre.name
                  }}</span>
                  <span>,</span>
                </span>
              </div>
            </div>
            <div class="text-black dark:text-text">
              Release Date:
              <div class="font-light text-text">{{ releaseDate }}</div>
            </div>
            <div class="text-black dark:text-text">
              Run Time:
              <div class="font-light text-text">{{ `${movieData.data.runtime} min` }}</div>
            </div>
            <div class="text-black dark:text-text">
              MMPA Rating:
              <div class="font-light text-text">PG-13</div>
            </div>
            <div class="text-black dark:text-text">
              Plot Keywords:
              <div class="flex flex-wrap gap-1 text-text" v-if="!!movieKeywords">
                <span
                  v-for="keyword in movieKeywords.data.keywords"
                  :key="keyword.id"
                  class="keyword-span"
                  >{{ keyword.name }}</span
                >
              </div>
            </div>
            <img :src="ads1" alt="ads" />
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>
