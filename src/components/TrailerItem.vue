<script setup>
defineProps(['src', 'name', 'duration'])
</script>

<template>
  <a href="#" class="movie-slide-item">
    <img :src="src" alt="movie-slide-item" />
    <div class="movie-slide-item-detail">
      <h6 class="movie-slide-item-name text">{{ name }}</h6>
      <span class="movie-slide-item-time">{{ duration }}</span>
    </div>
  </a>
</template>
