<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'
defineProps(['backdrop_src'])
</script>

<template>
  <header
    :style="{ backgroundImage: 'url(' + backdrop_src + ')' }"
    class="w-full h-[500px] bg-cover backdrop-blur-sm"
  >
    <div class="w-full h-full bg-lighten dark:bg-transparent backdrop-blur-sm">
      <div class="container">
        <header-nav>
          <li class="button">
            <button id="signup-btn">SIGN UP</button>
          </li>
        </header-nav>
        <header-search-bar />
      </div>
    </div>
  </header>
</template>
