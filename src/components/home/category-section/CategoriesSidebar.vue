<script setup>
import CelebrityCard from '@/components/home/category-section/CelebrityCard.vue'
import { POPULAR_PERSON_URL } from '@/constants/endpoints.js'
import useAxios from '@/composable/useAxios.js'
const { data: response } = useAxios(POPULAR_PERSON_URL)
</script>

<template>
  <aside class="flex flex-col gap-5">
    <img :src="ads1" alt="ads" />
    <h3 class="text-black dark:text-white text-lg">
      SPOTLIGHT CELEBRITIES
      <hr class="h-1" />
    </h3>
    <div class="celebrities" v-if="!!response">
      <celebrity-card
        v-for="celebrity in response.data.results.slice(0, 4)"
        :key="celebrity.id"
        :celebrityData="celebrity"
      />
    </div>
    <a class="item-hover hover:cursor-pointer"
      >SEE ALL CELEBRITIES <i class="fa fa-chevron-right fa-sm fa-fw"></i
    ></a>
  </aside>
</template>
