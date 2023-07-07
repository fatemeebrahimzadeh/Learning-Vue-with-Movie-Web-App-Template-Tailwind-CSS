<script setup>
import HeaderNav from '@/components/HeaderNav.vue'

import author from '@/assets/images/author.png'
</script>

<template>
  <header class="w-full h-[50%] bg-header bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent">
      <div class="container flex flex-col h-full">
        <header-nav>
          <a href="./profile.html">
            <img class="m-2" :src="author" alt="user" />
          </a>
        </header-nav>
      </div>
    </div>
  </header>
</template>
