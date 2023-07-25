<script setup>
import HeaderNav from '@/components/ui/HeaderNav.vue'
import HeaderSearchBar from '@/components/ui/HeaderSearchBar.vue'

defineProps(['title'])
</script>

<template>
  <header class="w-full h-[50%] bg-header bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent">
      <div class="container flex flex-col h-full">
        <header-nav />
        <header-search-bar />
        <div class="flex flex-col items-center justify-center gap-5 h-full">
          <h1 class="text-2xl sm:text-4xl text-black dark:text-white">{{ title }}</h1>
          <ul class="flex breadcrumb">
            <li class="text-black dark:text-blue"><router-link to="/">HOME</router-link></li>
            <li class="before:content-chevron-right">{{ title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
