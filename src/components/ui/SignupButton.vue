<script setup>
import { ref } from 'vue'
const isLoginPopupShow = ref(false)
import LoginPopup from '@/components/ui/LoginPopup.vue'

function updateLoginPopupVisibility(isShow = false) {
  isLoginPopupShow.value = isShow
}
</script>

<template>
  <li class="button">
    <button @click="isLoginPopupShow = !isLoginPopupShow" id="login-btn">SIGN UP</button>
    <login-popup :isVisible="isLoginPopupShow" @updateVisibility="updateLoginPopupVisibility" />
  </li>
</template>
