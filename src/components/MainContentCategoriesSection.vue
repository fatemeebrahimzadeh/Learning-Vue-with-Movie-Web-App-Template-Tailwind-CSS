<script setup>
import CategoriesSidebar from '@/components/CategoriesSidebar.vue'
import TheaterCategory from '@/components/TheaterCategory.vue'
import TvCategory from '@/components/TvCategory.vue'
</script>

<template>
  <section>
    <div class="container flex flex-col gap-5 md:flex-row">
      <div class="w-full flex flex-col gap-5">
        <theater-category />
        <tv-category />
      </div>
      <categories-sidebar />
    </div>
  </section>
</template>
