<script setup>
import ads1 from '@/assets/images/ads1.png'

import CategoriesSidebarCelebrity from '@/components/CategoriesSidebarCelebrity.vue'
</script>

<template>
  <aside class="flex flex-col gap-5">
    <img :src="ads1" alt="ads" />
    <h3 class="text-black dark:text-white text-lg">
      SPOTLIGHT CELEBRITIES
      <hr class="h-1" />
    </h3>
    <div class="celebrities">
      <categories-sidebar-celebrity/>
      <categories-sidebar-celebrity/>
      <categories-sidebar-celebrity/>
      <categories-sidebar-celebrity/>
    </div>
    <a class="item-hover" href="#"
      >SEE ALL CELEBRITIES <i class="fa fa-chevron-right fa-sm fa-fw"></i
    ></a>
  </aside>
</template>
