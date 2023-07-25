<script setup>
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
defineProps(['cast'])
</script>

<template>
  <article class="cast-card">
    <div class="flex gap-5 items-center">
      <img :src="getMovieImageUrl('w45', cast.profile_path)" alt="cast" />
      <span class="cast-name">{{ cast.name }}</span>
    </div>
    <span>{{ cast.character }} </span>
  </article>
</template>
