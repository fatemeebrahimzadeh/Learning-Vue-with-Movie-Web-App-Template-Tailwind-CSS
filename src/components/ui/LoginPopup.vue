<script setup>
import { ref, inject } from 'vue'
import { LOGIN } from '@/constants/provide-keys.js'
import { useToast } from 'vue-toast-notification'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'

const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)
const $toast = useToast()
const login = inject(LOGIN)
defineProps(['isVisible'])
const emit = defineEmits(['updateVisibility'])
const username = ref('')
const password = ref('')

async function loginRequest() {
  updateLoadingVisibility(true)
  try {
    await login(username.value, password.value)
    emit('updateVisibility', false)
    $toast.success('Sign in successfully')
  } catch (error) {
    $toast.error('Invalid username or password')
  } finally {
    updateLoadingVisibility(false)
  }
}
</script>

<template>
  <section
    id="signup-popup"
    :class="{ flex: isVisible, hidden: !isVisible }"
    @click="$emit('updateVisibility', false)"
    class="z-50 overlay fixed w-screen h-screen top-0 left-0 items-center justify-center bg-dark-backdrop font-dosis"
  >
    <div
      @click="
        (e) => {
          e.stopPropagation()
        }
      "
      class="signup-content bg-white w-96 flex flex-col items-center p-5"
    >
      <h2 class="text-black text-2xl font-dosis">LOG IN</h2>
      <form @submit.prevent="loginRequest" class="w-full p-5">
        <label class="text-black" for="username">USERNAME:</label>
        <input name="username" type="text" class="sign-up__input" required v-model="username" />
        <label class="text-black" for="password">PASSWORD:</label>
        <input name="password" type="password" class="sign-up__input" required v-model="password" />
        <button class="w-full bg-red px-5 py-3 text-white mb-5" type="submit">LOG IN</button>
      </form>
    </div>
  </section>
</template>
