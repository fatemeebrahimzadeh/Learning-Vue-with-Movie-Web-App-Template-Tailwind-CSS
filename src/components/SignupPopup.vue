<template>
  <!-- make display flex and remove hidden -->
  <section
    id="signup-popup"
    class="hidden z-50 overlay fixed w-screen h-screen top-0 left-0 items-center justify-center bg-dark-backdrop font-dosis"
  >
    <div class="signup-content bg-white w-96 flex flex-col items-center p-5">
      <h2 class="text-black text-2xl font-dosis">SIGN UP</h2>
      <form action="#" class="w-full p-5">
        <label class="text-black" for="username">USERNAME:</label>
        <input name="username" type="text" class="sign-up__input" required />
        <label class="text-black" for="email">YOUR EMAIL:</label>
        <input name="email" type="email" class="sign-up__input" required />
        <label class="text-black" for="password">PASSWORD:</label>
        <input name="password" type="password" class="sign-up__input" required />
        <label class="text-black" for="retype-password">RE-TYPE PASSWORD:</label>
        <input name="retype-password" type="password" class="sign-up__input" required />
        <button class="w-full bg-red px-5 py-3 text-white mb-5" type="submit">SIGN UP</button>

        <button
          type="button"
          class="py-2 px-4 flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm"
        >
          <img class="mr-2" src="./assets/svgs/github.svg" alt="github" />
          Sign in with GitHub
        </button>
      </form>
    </div>
  </section>
</template>
