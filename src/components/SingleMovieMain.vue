<script setup>
import SingleMovieSideBar from '@/components/SingleMovieSideBar.vue'
import RelatedMovieItem from '@/components/RelatedMovieItem.vue'
import SingleMovieItem from '@/components/SingleMovieItem.vue'
import CastItem from '@/components/CastItem.vue'

import image4 from '@/assets/images/image4.jpg'
import ads1 from '@/assets/images/ads1.png'
import { computed } from 'vue'

const props = defineProps([
  'src',
  'title',
  'rate',
  'computedGenres',
  'release_date',
  'vote_count',
  'overview'
])

const year = computed(() => {
  return props.release_date.split('-')[0]
})
</script>

<template>
  <main class="py-10">
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
          <a href="#" class="flex items-center gap-1">
            <span class="circle-border before:content-heart"></span>
            <span>ADD TO FAVORITE</span>
          </a>
          <a href="#" class="flex items-center gap-1">
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
              <i class="fa-fw fa-xl fa-star text-yellow fa"></i>
              <i class="fa-fw fa-xl fa-star text-yellow fa"></i>
              <i class="fa-fw fa-xl fa-star text-yellow fa"></i>
              <i class="fa-fw fa-xl fa-star text-yellow fa"></i>
              <i class="fa-fw fa-xl fa-star fa"></i>
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
                  class="text-sm hover:text-red dark:hover:text-yellow text-blue font-light"
                  href="#"
                  >All 5 Videos & 245 Photos <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="flex flex-wrap gap-2">
                <single-movie-item v-for="index in 3" :key="index" />
                <div class="movie-item relative group">
                  <img class="hover:cursor-pointer" :src="image4" alt="image4" />
                  <div class="movie-item-hover justify-center items-center">
                    <button>
                      <i class="fa-fw fa-lg fa fa-play text-red"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="cast" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">CAST</h2>
                <a
                  class="text-sm hover:text-red dark:hover:text-yellow text-blue font-light"
                  href="#"
                  >Full Cast & Crew <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="flex flex-col gap-10">
                <cast-item v-for="index in 9" :key="index" />
              </div>
            </div>
            <div id="reviews" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">USER REVIEWS</h2>
                <a
                  class="text-sm text-blue hover:text-red dark:hover:text-yellow font-light"
                  href="#"
                  >See All 56 Reviews <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="flex flex-col gap-2">
                <h3 class="text-black dark:text-text">Best Marvel movie in my opinion</h3>
                <span>
                  <i class="fa-fw fa-sm fa-star text-yellow fa"></i>
                  <i class="fa-fw fa-sm fa-star text-yellow fa"></i>
                  <i class="fa-fw fa-sm fa-star text-yellow fa"></i>
                  <i class="fa-fw fa-sm fa-star text-yellow fa"></i>
                  <i class="fa-fw fa-sm fa-star fa"></i>
                </span>
                <span
                  >17 December 2016 by
                  <span
                    class="text-blue hover:text-red hover:dark:text-yellow hover:cursor-pointer font-extralight"
                  >
                    hawaiipierson</span
                  ></span
                >
                <p class="text-black dark:text-text font-light">
                  This is by far one of my favorite movies from the MCU. The introduction of new
                  Characters both good and bad also makes the movie more exciting. giving the
                  characters more of a back story can also help audiences relate more to different
                  characters better, and it connects a bond between the audience and actors or
                  characters. Having seen the movie three times does not bother me here as it is as
                  thrilling and exciting every time I am watching it. In other words, the movie is
                  by far better than previous movies (and I do love everything Marvel), the plotting
                  is splendid (they really do out do themselves in each film, there are no problems
                  watching it more than once.
                </p>
              </div>
            </div>
            <div id="related-movies" class="scroll-m-10">
              <header
                class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 border-b-[1px] border-dark-100"
              >
                <h2 class="text-black dark:text-white">REALATED MOVIES</h2>
                <a
                  class="text-sm hover:text-red dark:hover:text-yellow text-blue font-light"
                  href="#"
                  >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
                ></a>
              </header>
              <div class="movie-list flex overflow-hidden gap-4 max-[450px]:justify-center">
                <related-movie-item v-for="index in 4" :key="index" />
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
              <div>
                <span class="text-blue hover hover:cursor-pointer font-light"
                  >Robert Downey Jr</span
                >
                <span>,</span>
                <span class="text-blue hover hover:cursor-pointer font-light">Chris Evans</span>
                <span>,</span>
                <span class="text-blue hover hover:cursor-pointer font-light">Mark Ruffalo</span>
                <span>,</span>
                <span class="text-blue hover hover:cursor-pointer font-light"
                  >Scarlett Johansson</span
                >
              </div>
            </div>
            <div class="text-black dark:text-text">
              Genres:
              <div>
                <span
                  class=""
                  v-for="genre in computedGenres"
                  :key="genre.id"
                >
                  <span class="text-blue hover hover:cursor-pointer font-light">{{
                    genre.name
                  }}</span>
                  <span>,</span>
                </span>
              </div>
            </div>
            <div class="text-black dark:text-text">
              Release Date:
              <div class="font-light text-text">May 1, 2015 (U.S.A)</div>
            </div>
            <div class="text-black dark:text-text">
              Run Time:
              <div class="font-light text-text">141 min</div>
            </div>
            <div class="text-black dark:text-text">
              MMPA Rating:
              <div class="font-light text-text">PG-13</div>
            </div>
            <div class="text-black dark:text-text">
              Plot Keywords:
              <div class="flex flex-wrap gap-1 text-text">
                <span class="keyword-span">superhero marvel</span>
                <span class="keyword-span">universe comic</span>
                <span class="keyword-span">blockbuster</span>
                <span class="keyword-span">final battle</span>
              </div>
            </div>
            <img :src="ads1" alt="ads" />
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>
