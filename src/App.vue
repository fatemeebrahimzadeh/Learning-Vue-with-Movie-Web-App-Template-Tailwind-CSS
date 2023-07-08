<script setup>
import FooterContent from '@/components/FooterContent.vue'
import SignupPopup from '@/components/SignupPopup.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

import { RouterView } from 'vue-router'
import { provide, ref } from 'vue'

const isShowLoading = ref(false)

function updateLoadingState(loadingState = false) {
  isShowLoading.value = loadingState
}

provide('loading-state', { isShowLoading, updateLoadingState })
</script>

<template>
  <RouterView />
  <footer-content />
  <signup-popup />
  <loading-spinner :isShow="isShowLoading" />
</template>
