<script setup>
import slider1 from '@/assets/images/slider1.jpg'

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="movie-item relative group">
    <div class="mv-img">
      <router-link to="/single-movie">
        <img class="slider-image" :src="slider1" />
      </router-link>
    </div>
    <div class="slider-item__title-in">
      <div class="cate">
        <span class="bg-[#1692bb] slider-item__title-in__status"><a href="#">Sci-fi</a></span>
      </div>
      <h6 class="slider-item__title-in__heading">
        <a href="#">Interstellar</a>
      </h6>
      <p>
        <i class="fa-fw fa-md fa-star text-[#f5b50a] fa"></i
        ><span class="text-lg text-white">7.4</span> /10
      </p>
    </div>
  </div>
</template>
