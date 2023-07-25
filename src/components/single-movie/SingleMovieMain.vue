<script setup>
import SingleMovieSideBar from '@/components/single-movie/SingleMovieSideBar.vue'
import RelatedMovieItem from '@/components/single-movie/RelatedMovieItem.vue'
import SingleMovieItem from '@/components/single-movie/SingleMovieItem.vue'
import CastItem from '@/components/single-movie/CastItem.vue'
import { Axios } from '@/utils/axios.js'
import { USER } from '@/constants/provide-keys.js'
import { ADD_MOVIE_TO_FAVORITE_LIST } from '@/constants/endpoints.js'
import { inject } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
const $toast = useToast()

const user = inject(USER)

// import image4 from '@/assets/images/image4.jpg'
import ads1 from '@/assets/images/ads1.png'
import { computed } from 'vue'

const props = defineProps([
  'src',
  'title',
  'rate',
  'genres',
  'release_date',
  'vote_count',
  'overview',
  'relatedMovies',
  'movieImages',
  'run_time',
  'movieKeywords',
  'movieReview',
  'movieCast',
  'movieCrew',
  'type',
  'id'
])

const year = computed(() => {
  return props.release_date && new Date(props.release_date).getFullYear()
})

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const releaseDate = computed(() => {
  const date = props.release_date && new Date(props.release_date)

  const month = props.release_date && months[date.getMonth()]
  return props.release_date && `${month}, ${date.getDate()}, ${date.getFullYear()}`
})

const reviewDate = computed(() => {
  const date = props.movieReview.created_at && new Date(props.movieReview.created_at)

  const month = props.movieReview.created_at && months[date.getMonth()]
  return props.movieReview.created_at && `${month}, ${date.getDate()}, ${date.getFullYear()}`
})

const reviewDetail = computed(() => {
  return props.movieReview.author_details && props.movieReview.author_details.rating
})

async function addMovieToFavoriteList() {
  if (!user.value) {
    $toast.error('Please log in first!')
  } else {
    try {
      await Axios.post(ADD_MOVIE_TO_FAVORITE_LIST(user), {
        media_type: 'movie',
        media_id: props.id,
        favorite: true
      })
      $toast.success('Success!')
    } catch (error) {
      $toast.error('Somthing wrong happened!')
    }
  }
}
</script>

<template>
  <main class="py-10 z-20 relative">
    <div class="container flex flex-col items-center lg:items-start lg:flex-row -mt-80 gap-10">
      <single-movie-side-bar :src="src" />
      <div class="basis-2/3 flex flex-col gap-8">
        <h1 class="font-extralight text-2xl">
          <span
            class="dark:text-white font-bold text-4xl overflow-hidden text-ellipsis line-clamp-1"
          >
            {{ title }}</span
          >
          {{ year }}
        </h1>
        <div class="flex flex-col sm:flex-row gap-5 text-red">
          <a @click="addMovieToFavoriteList" class="flex items-center gap-1 hover:cursor-pointer">
            <span class="circle-border before:content-heart"></span>
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
                <span class="text-white text-lg">{{ rate }}</span>
                <span>/10</span>
                <p class="text-black dark:text-blue">{{ vote_count }} Reviews</p>
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
                :class="{ 'text-yellow': index <= rate / 2 }"
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
              {{ overview }}
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
              <div class="flex flex-wrap gap-2">
                <single-movie-item
                  v-for="(imageSrc, index) in movieImages"
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
              <div class="flex flex-col gap-10">
                <cast-item v-for="cast in movieCast" :key="cast.id" :cast="cast" />
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
              <div class="flex flex-col gap-2">
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
                    {{ movieReview.author }}</span
                  ></span
                >
                <p class="text-black dark:text-text font-light">
                  {{ movieReview.content }}
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
              <div class="movie-list flex overflow-hidden gap-4 max-[450px]:justify-center">
                <related-movie-item
                  v-for="relatedMovie in relatedMovies"
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
                <span class="text-blue hover hover:cursor-pointer font-light">Joss Whedon</span>
              </div>
            </div>
            <div class="text-black dark:text-text">
              Writer:
              <div>
                <span class="text-blue hover hover:cursor-pointer font-light">Joss Whedon</span>
                <span>,</span>
                <span class="text-blue hover hover:cursor-pointer font-light">Stan Lee</span>
              </div>
            </div>
            <div class="text-black dark:text-text">
              Stars:
              <div v-for="star in movieCast" :key="star.id">
                <span class="text-blue hover hover:cursor-pointer font-light">{{ star.name }}</span>
                <span>,</span>
              </div>
            </div>
            <div class="text-black dark:text-text">
              Genres:
              <div>
                <span class="" v-for="genre in genres" :key="genre.id">
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
              <div class="font-light text-text">{{ `${run_time} min` }}</div>
            </div>
            <div class="text-black dark:text-text">
              MMPA Rating:
              <div class="font-light text-text">PG-13</div>
            </div>
            <div class="text-black dark:text-text">
              Plot Keywords:
              <div class="flex flex-wrap gap-1 text-text">
                <span v-for="keyword in movieKeywords" :key="keyword.id" class="keyword-span">{{
                  keyword.name
                }}</span>
              </div>
            </div>
            <img :src="ads1" alt="ads" />
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>
