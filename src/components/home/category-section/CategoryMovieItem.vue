<script setup>
defineProps(['src', 'name', 'rate'])
</script>

<template>
  <div class="movie-item relative group">
    <img class="flex-shrink-0 object-cover" :src="src" />
    <div class="movie-item__hover">
      <a class="button z-10"> READ MORE </a>
    </div>
    <div class="movie-item__title-in">
      <h6 class="movie-item__title-in__heading">
        <a>{{ name }}</a>
      </h6>
      <p>
        <i class="fa-fw fa-md fa-star text-[#f5b50a] fa"></i
        ><span class="text-lg text-white">{{ rate }}</span> /10
      </p>
    </div>
  </div>
</template>
