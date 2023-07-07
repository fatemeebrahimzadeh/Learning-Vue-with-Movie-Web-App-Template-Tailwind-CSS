<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'
import SocialMediaLinksList from '@/components/SocialMediaLinksList.vue'
</script>

<template>
  <header class="w-full h-full bg-header bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent">
      <div class="container h-full flex flex-col justify-around">
        <h1 class="hidden">MovieMaven</h1>
        <header-nav />
        <header-search-bar />
        <social-media-links-list />
      </div>
    </div>
  </header>
</template>
