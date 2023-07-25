<script setup>
import CategoryCard from '@/components/home/category-section/CategoryCard.vue'
import TabList from '@/components/home/category-section/TabList.vue'

defineProps(['list', 'title', 'type'])
</script>

<template>
  <section class="movie">
    <header class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 sm:items-center">
      <h2 class="text-black dark:text-white text-3xl max-[450px]:text-center">{{ title }}</h2>
      <a class="text-sm item-hover max-[450px]:text-center hover:cursor-pointer"
        >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
      ></a>
    </header>
    <section class="tabs-link">
      <tab-list :type="type" />
      <div class="movie-list flex flex-wrap gap-4 max-[450px]:justify-center">
        <category-card
          v-for="item in list"
          :key="item.id"
          :movieData="item"
          :type="type"
        />
      </div>
    </section>
  </section>
</template>
