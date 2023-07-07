<script setup>
import image1 from '@/assets/images/image1.jpg'
</script>

<template>
  <div class="movie-item relative group">
    <img class="hover:cursor-pointer" :src="image1" alt="image1" />
    <div class="movie-item-hover"></div>
  </div>
</template>
