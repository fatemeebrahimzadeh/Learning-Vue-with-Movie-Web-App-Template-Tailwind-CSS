<script setup>
import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'
import CategoriesSidebarCelebrity from '@/components/home/category-section/CategoriesSidebarCelebrity.vue'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'
import { POPULAR_PERSON_URL } from '@/constants/endpoints.js'
import { Axios } from '@/utils/axios.js'
import { inject, onMounted, ref } from 'vue'
let celebrities = ref([])

const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)
updateLoadingVisibility(true)

onMounted(async () => {
  try {
    const response = await Axios.get(POPULAR_PERSON_URL)
    celebrities.value = response.data.results.slice(0, 4)
  } catch (error) {
    console.error(error)
  } finally {
    updateLoadingVisibility(false)
  }
})
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
        :src="`${API_IMAGE_BASE_URL}w45${celebrity.profile_path}`"
        :job="celebrity.known_for_department"
      />
    </div>
    <a class="item-hover hover:cursor-pointer"
      >SEE ALL CELEBRITIES <i class="fa fa-chevron-right fa-sm fa-fw"></i
    ></a>
  </aside>
</template>
