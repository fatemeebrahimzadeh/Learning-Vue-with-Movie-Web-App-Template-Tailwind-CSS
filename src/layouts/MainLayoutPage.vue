<script setup>
import FooterContent from '@/components/ui/FooterContent.vue'
import LoadingSpinner from '@/components/ui/spinner/LoadingSpinner.vue'
import { inject } from 'vue'

const { isShowLoading } = inject('loading-state')
</script>

<template>
  <router-view></router-view>
  <footer-content />
  <loading-spinner :isShow="isShowLoading" />
</template>
