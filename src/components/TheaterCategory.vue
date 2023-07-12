<script setup>
import CategoryMovieItem from '@/components/CategoryMovieItem.vue'
import CategoryAnchorTagsList from '@/components/CategoryAnchorTagsList.vue'
import MovieItem1 from '@/assets/images/mv-item1.jpg'
import MovieItem2 from '@/assets/images/mv-item2.jpg'
import MovieItem3 from '@/assets/images/mv-item3.jpg'
import MovieItem4 from '@/assets/images/mv-item4.jpg'

const theaters = [
  {
    id: 1,
    name: 'Interstellar',
    rate: 7.4,
    src: MovieItem1
  },
  {
    id: 2,
    name: 'The revenant',
    rate: 6.3,
    src: MovieItem2
  },
  {
    id: 3,
    name: 'Die Hard',
    rate: 5.9,
    src: MovieItem3
  },
  {
    id: 4,
    name: 'The walk',
    rate: 4.7,
    src: MovieItem4
  }
]
</script>

<template>
  <section class="movie">
    <header class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 sm:items-center">
      <h2 class="text-black dark:text-white text-3xl max-[450px]:text-center">IN THEATER</h2>
      <a class="text-sm item-hover max-[450px]:text-center"
        >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
      ></a>
    </header>
    <section class="tabs-link">
      <category-anchor-tags-list />
      <div class="movie-list flex flex-wrap gap-4 max-[450px]:justify-center">
        <category-movie-item
          v-for="theater in theaters"
          :key="theater.id"
          :name="theater.name"
          :rate="theater.rate"
          :src="theater.src"
        />
      </div>
    </section>
  </section>
</template>
