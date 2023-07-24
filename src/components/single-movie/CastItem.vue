<script setup>
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'

defineProps(['cast'])
</script>

<template>
  <article class="cast-card">
    <div class="flex gap-5 items-center">
      <img :src="`${API_IMAGE_BASE_URL}w45${cast.profile_path}`" alt="cast" />
      <span class="cast-name">{{ cast.name }}</span>
    </div>
    <span>{{ cast.character }} </span>
  </article>
</template>
