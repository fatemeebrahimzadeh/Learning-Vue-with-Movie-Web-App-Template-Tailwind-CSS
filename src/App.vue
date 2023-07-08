<script setup>
import FooterContent from '@/components/FooterContent.vue'
import SignupPopup from '@/components/SignupPopup.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer-content />
  <signup-popup />
  <loading-spinner :isShow="false"/>
</template>
