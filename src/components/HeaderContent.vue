<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'
</script>

<template>
  <header class="w-full h-full bg-header bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent">
      <div class="container h-full flex flex-col justify-around">
        <header-nav />
        <header-search-bar />
      </div>
    </div>
  </header>
</template>
