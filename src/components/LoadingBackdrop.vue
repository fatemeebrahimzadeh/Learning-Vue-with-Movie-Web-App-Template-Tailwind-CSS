<script setup>
defineEmits(['backdropHandler'])
</script>

<template>
  <div class="backdrop" @click="$emit(backdropHandler)"><slot /></div>
</template>

<style scoped>
.backdrop {
  @apply w-full h-full fixed z-10 left-0 top-0 backdrop-blur-sm flex justify-center items-center;
}
</style>
