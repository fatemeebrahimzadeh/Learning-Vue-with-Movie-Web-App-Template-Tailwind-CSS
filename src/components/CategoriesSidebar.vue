<script setup>
import ads1 from '@/assets/images/ads1.png'
import ava1 from '@/assets/images/ava1.jpg'
import ava2 from '@/assets/images/ava2.jpg'
import ava3 from '@/assets/images/ava3.jpg'
import ava4 from '@/assets/images/ava4.jpg'

const celebrities = [
  {
    id: 1,
    name: 'Samuel N. Jack',
    job: 'ACTOR',
    src: ava1
  },
  {
    id: 2,
    name: 'The revenant',
    job: 'ACTOR',
    src: ava2
  },
  {
    id: 3,
    name: 'Die Hard',
    job: 'ACTOR',
    src: ava3
  },
  {
    id: 4,
    name: 'The walk',
    job: 'ACTOR',
    src: ava4
  }
]

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
      <categories-sidebar-celebrity
        v-for="celebrity in celebrities"
        :key="celebrity.id"
        :name="celebrity.name"
        :src="celebrity.src"
        :job="celebrity.job"
      />
    </div>
    <a class="item-hover" href="#"
      >SEE ALL CELEBRITIES <i class="fa fa-chevron-right fa-sm fa-fw"></i
    ></a>
  </aside>
</template>
