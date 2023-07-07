<script setup>
import CategoriesSidebar from '@/components/CategoriesSidebar.vue'
import MainContentCategory from '@/components/MainContentCategory.vue'
</script>

<template>
  <section>
    <div class="container flex flex-col gap-5 md:flex-row">
      <div class="w-full flex flex-col gap-5">
        <MainContentCategory />
        <MainContentCategory />
      </div>
      <categories-sidebar />
    </div>
  </section>
</template>
