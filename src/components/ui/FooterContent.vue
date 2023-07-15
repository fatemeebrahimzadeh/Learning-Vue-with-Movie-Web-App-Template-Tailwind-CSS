<script setup>
import Logo from '@/assets/images/logo.png'
import { RouterLink } from 'vue-router'

const resourceOptions = [
  { id: 1, title: 'About' },
  { id: 2, title: 'Blockbuster' },
  { id: 3, title: 'Contact Us' },
  { id: 4, title: 'Forums' },
  { id: 5, title: 'Blog' },
  { id: 6, title: 'Help Center' }
]

const legalOptions = [
  { id: 1, title: 'Term Of Use' },
  { id: 2, title: 'Privacy Policy' },
  { id: 3, title: 'Security' }
]

const accountOptions = [
  { id: 1, title: 'My Account', path: '/profile' },
  { id: 2, title: 'Watchlist', path: '/favorite-movies' },
  { id: 3, title: 'Collections', path: '' },
  { id: 4, title: 'User Guide', path: '' }
]
</script>

<template>
  <footer class="bg-footer bg-cover">
    <div class="w-full h-full bg-lighten dark:bg-transparent py-10">
      <div class="container flex flex-col gap-5 lg:gap-0 md:flex-row md:flex-wrap justify-between">
        <section
          class="footer-section justify-between md:basis-full md:items-center lg:items-start lg:basis-1/5"
        >
          <img class="!max-w-[119px]" :src="Logo" alt="logo" />
          <div class="info basis-1/5 grid gap-5">
            <p class="font-light">
              5th Avenue st, manhattan
              <br />
              New York, NY 10001
            </p>
            <p class="font-light">
              Call us:
              <a class="text-white item-hover">(+01) 202 342 6789</a>
            </p>
          </div>
        </section>
        <section class="footer-section">
          <h4 class="footer-section__header">Resources</h4>
          <ul class="footer-section__ul">
            <li v-for="option in resourceOptions" :key="option.id">
              <a class="item-hover">{{ option.title }}</a>
            </li>
          </ul>
        </section>
        <section class="footer-section">
          <h4 class="footer-section__header">Legal</h4>
          <ul class="footer-section__ul">
            <li v-for="option in legalOptions" :key="option.id">
              <a class="item-hover">{{ option.title }}</a>
            </li>
          </ul>
        </section>
        <section class="footer-section">
          <h4 class="footer-section__header">Account</h4>
          <ul class="footer-section__ul">
            <li v-for="option in accountOptions" :key="option.id">
              <router-link :to="option.path" class="item-hover">{{ option.title }}</router-link>
            </li>
          </ul>
        </section>
        <section class="grid gap-5 basis-1/5">
          <h4 class="footer-section__header">Newsletter</h4>
          <p class="font-light">
            Subscribe to our newsletter system now
            <br />
            to get latest news from us.
          </p>
          <div class="relative w-full">
            <input
              type="email"
              class="block placeholder:text-black dark:placeholder:text-text w-full text-sm bg-transparent placeholder-text border-[1px] border-dark-100 rounded-sm px-5 py-1 placeholder:font-light"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-1 text-base font-light text-black dark:text-text"
            >
              <i class="fa fa-envelope fa-sm fa-fw"></i>
            </button>
          </div>
          <a class="text-xs text-red"
            >SUBSCRIBE NOW <i class="fa fa-chevron-right fa-sm fa-fw"></i
          ></a>
        </section>
      </div>
    </div>
  </footer>
</template>
