<script setup>
import HeaderNav from '@/components/ui/HeaderNav.vue'
import HeaderSearchBar from '@/components/ui/HeaderSearchBar.vue'
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
defineProps(['movieData'])
</script>

<template>
  <header
    v-if="movieData"
    :style="{ backgroundImage: `url(${getMovieImageUrl('w1280', movieData.data.backdrop_path)}` }"
    class="w-full h-[500px] bg-cover backdrop-blur-sm"
  >
    <div class="w-full h-full bg-lighten dark:bg-transparent backdrop-blur-sm">
      <div class="container">
        <header-nav />
        <header-search-bar />
      </div>
    </div>
  </header>
</template>
