<script setup>
import github from '@/assets/svgs/github.svg'
import { ref, inject } from 'vue'
import { LOGIN, USER } from '@/constants/provide-keys.js'
import { useToast } from 'vue-toast-notification'
const $toast = useToast()

const user = inject(USER)

const login = inject(LOGIN)
defineProps(['isVisible'])
const emit = defineEmits(['updateVisibility'])
const username = ref('')
const password = ref('')
const retypePassword = ref('')

function validationCheck() {
  if (password.value === retypePassword.value) return true
  return false
}

async function signin() {
  if (!validationCheck()) {
    $toast.error('Please Confirm your password')
    return
  }
  await login(username.value, password.value)
  if (user.value) {
    emit('updateVisibility', false)
    $toast.success('Sign in successfully')
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
      <h2 class="text-black text-2xl font-dosis">SIGN UP</h2>
      <form @submit.prevent="signin" class="w-full p-5">
        <label class="text-black" for="username">USERNAME:</label>
        <input name="username" type="text" class="sign-up__input" required v-model="username" />
        <label class="text-black" for="email">YOUR EMAIL:</label>
        <input name="email" type="email" class="sign-up__input" />
        <label class="text-black" for="password">PASSWORD:</label>
        <input name="password" type="password" class="sign-up__input" required v-model="password" />
        <label class="text-black" for="retype-password">RE-TYPE PASSWORD:</label>
        <input
          name="retype-password"
          type="password"
          class="sign-up__input"
          required
          v-model="retypePassword"
        />
        <button class="w-full bg-red px-5 py-3 text-white mb-5" type="submit">SIGN UP</button>

        <button
          type="button"
          class="py-2 px-4 flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm"
        >
          <img class="mr-2" :src="github" alt="github" />
          Sign in with GitHub
        </button>
      </form>
    </div>
  </section>
</template>
