<script setup>
import HeaderNav from '@/components/ui/HeaderNav.vue'
import HeaderSearchBar from '@/components/ui/HeaderSearchBar.vue'
import SocialMediaLinksList from '@/components/home/SocialMediaLinksList.vue'
import HeaderSlider from '@/components/home/header-slider/HeaderSlider.vue'
</script>

<template>
  <header class="w-full h-full bg-header bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent">
      <div class="container h-full flex flex-col justify-around">
        <h1 class="hidden">MovieMaven</h1>
        <header-nav>
          <li class="button">
            <button id="signup-btn">SIGN UP</button>
          </li>
        </header-nav>
        <header-search-bar />
        <social-media-links-list />
        <header-slider />
      </div>
    </div>
  </header>
</template>
