<script setup>
import mv1 from '@/assets/images/mv1.jpg'
</script>

<template>
  <article class="movie-list__card">
    <a href="./single-movie.html">
      <img class="rounded-md max-w-[200px]" :src="mv1" alt="mv1" />
    </a>
    <div class="p-3 flex flex-col gap-3">
      <h4>
        <span class="text item-hover"> OBLIVION</span>
        (2012)
      </h4>
      <span class="star flex items-baseline">
        <i class="fa-fw fa-md fa-star text-yellow fa"></i>
        <span class="dark:text-white text-lg">8.1</span>
        <span>/10</span>
      </span>
      <p class="overflow-ellipsis font-light">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop
        the mischievous Loki and his alien army from enslaving humanity...
      </p>
      <hr />
      <span class="flex justify-between font-light">
        <span>Run Time: 2h21’</span>
        <span>.</span>
        <span>MMPA: PG-13 </span>
        <span>.</span>
        <span>Release: 1 May 2015</span>
      </span>
      <span class="font-light">Director: <span class="dark:text-blue">Joss Whedon</span></span>
      <span class="font-light"
        >Stars:
        <span class="dark:text-blue flex">
          <span class="dark:hover:text-yellow">Robert Downey Jr.</span>
          <span>,</span>
          <span class="dark:hover:text-yellow">Chris Evans</span>
          <span>,</span>
          <span class="dark:hover:text-yellow">Chris Hemsworth</span>
        </span></span
      >
    </div>
  </article>
</template>
