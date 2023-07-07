<script setup>
import mv1 from '@/assets/images/mv1.jpg'
</script>

<template>
  <article
    class="h-fit flex-grow bg-light-backgroundColor dark:bg-dark-secondary shadow-md rounded m-3"
  >
    <a href="./single-movie.html" class="h-3/4 w-full">
      <img class="w-full h-full object-cover rounded-t" :src="mv1" alt="mv1" />
    </a>
    <div class="flex-col px-4">
      <p class="pt-4 text-2xl font-bold overflow-hidden text-ellipsis">
        MULHOLLAND PRIDE MMMMMMMMMMMMMMMMMMMMMMMMMMMM(2015)
      </p>
      <hr class="hr-text" data-content="" />
      <div class="text-md flex justify-between px-4 my-2">
        <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
        <span class="font-bold"></span>
      </div>
      <p class="flex text-md px-4 my-2">
        Rating: 9.0/10
        <span class="font-bold px-2">|</span>
        Mood: Dark
      </p>

      <div class="text-xs">
        <button
          type="button"
          class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
        >
          TRAILER
        </button>

        <button
          type="button"
          class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
        >
          IMDB
        </button>
      </div>
      <!--             <p>ICON BTNS</p> -->
    </div>
  </article>
</template>
