<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'

import author from '@/assets/images/author.png'
</script>

<template>
  <header class="w-full h-[50%] bg-header bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent">
      <div class="container flex flex-col h-full">
        <header-nav>
          <a>
            <img class="m-2" :src="author" alt="user" />
          </a>
        </header-nav>
        <header-search-bar />
        <div class="flex flex-col items-center justify-center gap-5 h-full">
            <h1 class="text-2xl sm:text-4xl text-black dark:text-white">
              FAVORITE MOVIES
            </h1>
            <ul class="flex breadcrumb">
              <li class="text-black dark:text-blue"><a>HOME</a></li>
              <li class="before:content-chevron-right">FAVORITE MOVIES</li>
            </ul>
          </div>
      </div>
    </div>
  </header>
</template>
