<script setup>
import HeaderNav from '@/components/ui/HeaderNav.vue'
import HeaderSearchBar from '@/components/ui/HeaderSearchBar.vue'
defineProps(['backdrop_src'])
</script>

<template>
  <header
    :style="{ backgroundImage: `url(${backdrop_src})` }"
    class="w-full h-[500px] bg-cover backdrop-blur-sm"
  >
    <div class="w-full h-full bg-lighten dark:bg-transparent backdrop-blur-sm">
      <div class="container">
        <header-nav />
        <header-search-bar />
      </div>
    </div>
  </header>
</template>
