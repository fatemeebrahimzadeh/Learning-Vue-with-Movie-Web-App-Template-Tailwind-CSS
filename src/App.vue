<script setup>
import FooterContent from '@/components/FooterContent.vue'
import SignupPopup from '@/components/SignupPopup.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer-content />
  <signup-popup />
</template>
