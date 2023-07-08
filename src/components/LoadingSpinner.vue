<script setup>
import LoadingBackdrop from '@/components/LoadingBackdrop.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
defineProps(['isShow'])
</script>
<template>
  <loading-backdrop v-if="isShow">
    <sync-loader color="#dd003f"/>
  </loading-backdrop>
</template>
