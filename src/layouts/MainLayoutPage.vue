<script setup>
import FooterContent from '@/components/ui/FooterContent.vue'
import LoadingSpinner from '@/components/ui/spinner/LoadingSpinner.vue'
import { provide, ref } from 'vue'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'

const isShowLoading = ref(true)

function updateLoadingVisibility(loadingState = false) {
  isShowLoading.value = loadingState
}

provide(LOADING_VISIBILITY, { isShowLoading, updateLoadingVisibility })

</script>


<template>
  <router-view />
  <footer-content />
  <loading-spinner :isShow="isShowLoading" />
</template>
