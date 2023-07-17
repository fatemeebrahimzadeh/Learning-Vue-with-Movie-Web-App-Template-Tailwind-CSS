<script setup>
import { ref } from 'vue'
const isSignupPopupShow = ref(false)
import SignupPopup from '@/components/ui/SignupPopup.vue'

function updateSignupPopupVisibility(isShow = false) {
  isSignupPopupShow.value = isShow
}
</script>

<template>
  <li class="button">
    <button @click="isSignupPopupShow = !isSignupPopupShow" id="signup-btn">SIGN UP</button>
    <signup-popup :isVisible="isSignupPopupShow" @updateVisibility="updateSignupPopupVisibility" />
  </li>
</template>
