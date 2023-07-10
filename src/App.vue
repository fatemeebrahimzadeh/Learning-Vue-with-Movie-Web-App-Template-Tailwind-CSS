<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

import { RouterView } from 'vue-router'
import { provide, ref } from 'vue'

const isShowLoading = ref(true)

function updateLoadingState(loadingState = false) {
  isShowLoading.value = loadingState
}

provide('loading-state', { isShowLoading, updateLoadingState })
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
