<script setup>
import NewsItem from '@/components/home/news-section/NewsItem.vue'
</script>

<template>
  <section>
    <header class="flex justify-between mb-5">
      <h3 class="dark:text-white text-base">More news on Blockbuster</h3>
      <a class="text-xs item-hover"
        >SEE ALL MOVIES NEWS <i class="fa fa-chevron-right fa-sm fa-fw"></i
      ></a>
    </header>
    <div class="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:flex-wrap">
      <news-item v-for="index in 4" :key="index" />
    </div>
  </section>
</template>
