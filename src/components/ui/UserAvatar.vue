<script setup>
import { inject, computed } from 'vue'
import { USER } from '@/constants/provide-keys.js'
import { useImage } from '@/composable/useImage.js'
const { getMovieImageUrl } = useImage()
import { RouterLink } from 'vue-router'

const user = inject(USER)

const avatar = computed(
  () => user.value.avatar.tmdb && getMovieImageUrl('w92', user.value.avatar.tmdb.avatar_path)
)
</script>

<template>
  <router-link
    to="/profile"
    class="w-14 h-14 bg-white dark:bg-dark-triority flex justify-center items-center rounded-full"
  >
    <img v-if="!!avatar" :src="avatar" alt="avatar" class="w-full h-full" />
    <i v-if="!avatar" class="fa fa-fw fa-md fa-camera"></i>
  </router-link>
</template>
