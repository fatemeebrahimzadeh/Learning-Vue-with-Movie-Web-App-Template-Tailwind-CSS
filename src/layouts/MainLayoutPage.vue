<script setup>
import FooterContent from '@/components/FooterContent.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { inject } from 'vue'

const { isShowLoading } = inject('loading-state')
</script>

<template>
  <router-view></router-view>
  <footer-content />
  <loading-spinner :isShow="isShowLoading" />
</template>
