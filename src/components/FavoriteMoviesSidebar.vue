<script setup>
import ads1 from '@/assets/images/ads1.png'
import FavoriteMoviesSearchBar from '@/components/FavoriteMoviesSearchBar.vue'

const socialMediaSections = [
  { id: 1, title: 'FIND US ON FACEBOOK' },
  { id: 2, title: 'TWITTER TO US' }
]
</script>

<template>
  <aside class="flex flex-col gap-5 lg:basis-1/3">
    <section class="search grid gap-5">
      <h3 class="text-black dark:text-white text-lg">
        SEARCH FOR MOVIE
        <hr class="h-1" />
      </h3>
      <favorite-movies-search-bar />
    </section>
    <img :src="ads1" alt="ads" />
    <div class="h-full">
      <section v-for="socialMedia in socialMediaSections" :key="socialMedia.id" class="min-h-[50%]">
        <h3 class="text-black dark:text-white text-lg">
          {{ socialMedia.title }}
          <hr class="h-1" />
        </h3>
      </section>
    </div>
  </aside>
</template>
