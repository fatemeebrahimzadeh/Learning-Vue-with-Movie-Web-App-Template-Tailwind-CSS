<script setup>
import cast1 from '@/assets/images/cast1.jpg'
</script>

<template>
  <article class="cast-card">
    <div class="flex gap-5 items-center">
      <img :src="cast1" alt="cast1" />
      <span class="cast-name">Robert Downey Jr.</span>
    </div>
    <span> ... Robert Downey Jr. </span>
  </article>
</template>
