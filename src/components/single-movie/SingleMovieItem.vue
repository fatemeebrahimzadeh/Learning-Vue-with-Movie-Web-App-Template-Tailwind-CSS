<script setup>
defineProps(['src'])
</script>

<template>
  <div class="movie-item relative group">
    <img class="hover:cursor-pointer" :src="src" alt="poster" />
    <div class="movie-item-hover"></div>
  </div>
</template>
