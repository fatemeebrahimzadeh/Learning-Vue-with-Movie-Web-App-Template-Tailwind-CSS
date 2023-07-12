<script setup>
defineProps(['src'])
</script>

<template>
  <div class="movie-item relative group">
    <a>
      <img class="flex-shrink-0 object-cover" :src="src" />
    </a>
  </div>
</template>
