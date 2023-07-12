<script setup>
import mv4 from '@/assets/images/mv4.jpg'
</script>

<template>
  <article
    class="bg-light-backgroundColor dark:bg-dark-secondary sm:col-span-2 rounded-md shadow-lg text-center"
  >
    <div class="flex flex-col items-center md:items-start md:flex-row px-4 max-w-4xl">
      <a class="flex-none">
        <img
          :src="mv4"
          alt="mv4"
          class="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
        />
      </a>

      <div class="flex-col">
        <p class="pt-4 text-2xl font-bold">MULHOLLAND PRIDE (2015)</p>
        <hr class="hr-text" data-content="" />
        <div class="text-md flex justify-between px-4 my-2">
          <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
          <span class="font-bold"></span>
        </div>
        <p class="block px-4 my-4 text-sm text-left">
          In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by
          society. He then embarks on a downward spiral of revolution and bloody crime. This path
          brings him face-to-face with his alter-ego: the Joker.
        </p>

        <p class="flex text-md px-4 my-2">
          Rating: 9.0/10
          <span class="font-bold px-2">|</span>
          Mood: Dark
        </p>

        <div class="text-xs">
          <button
            type="button"
            class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
          >
            TRAILER
          </button>

          <button
            type="button"
            class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
          >
            IMDB
          </button>

          <button
            type="button"
            class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
          >
            TICKET
          </button>
        </div>
        <!--             <p>ICON BTNS</p> -->
      </div>
    </div>
  </article>
</template>
