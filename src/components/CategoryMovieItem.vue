<script setup>
import MovieItem1 from '@/assets/images/mv-item1.jpg'
</script>

<template>
  <div class="movie-item relative group">
    <img class="flex-shrink-0 object-cover" :src="MovieItem1" />
    <div class="movie-item__hover">
      <a class="button z-10" href="./single-movie.html"> READ MORE </a>
    </div>
    <div class="movie-item__title-in">
      <h6 class="movie-item__title-in__heading">
        <a href="./single-movie.html">Interstellar</a>
      </h6>
      <p>
        <i class="fa-fw fa-md fa-star text-[#f5b50a] fa"></i
        ><span class="text-lg text-white">7.4</span> /10
      </p>
    </div>
  </div>
</template>
