<script setup>
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
defineProps(['celebrityData'])
</script>

<template>
  <article class="celebrity-item">
    <img
      class="rounded-lg"
      :src="getMovieImageUrl('w45', celebrityData.profile_path)"
      alt="celebrity1"
    />
    <div class="celebrity-detail">
      <h6 class="celebrity-name">
        <a class="item-hover hover:cursor-pointer">{{ celebrityData.name }}</a>
      </h6>
      <span class="celebrity-job">{{ celebrityData.known_for_department }}</span>
    </div>
  </article>
</template>
