<script setup>
import logo from '@/assets/images/logo.png'
import MobileNavbarIcon from '@/assets/svgs/MobileNavbarIcon.vue'
import UnitedStates from '@/assets/svgs/flags/UnitedStates.vue'
import Iran from '@/assets/svgs/flags/Iran.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8">
      <a href="#">
        <img class="!max-w-[100px] sm:!max-w-[119px]" :src="logo" alt="logo" />
      </a>
      <button id="navbar-toggler" class="inline-flex items-center p-2 ml-3 text-sm lg:hidden">
        <span class="sr-only">Open main menu</span>
        <mobile-navbar-icon className="w-6 h-6" />
      </button>
      <div
        class="hidden rounded-lg w-full z-20 bg-light-secondary dark:bg-dark-secondary absolute top-[112px] sm:top-[122px] left-0 lg:static lg:block lg:w-auto lg:bg-transparent lg:dark:bg-transparent"
        id="navbar-dropdown"
      >
        <ul class="flex flex-col items-center p-4 lg:p-0 lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 item-hover lg:p-0" aria-current="page"
              >HOME</router-link
            >
          </li>
          <li class="group relative">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="drop-down-nav-btn"
            >
              MOVIES
              <i class="fa fa-chevron-down fa-sm fa-fw drop-down-nav-icon"></i>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden group-hover:inline-block group-hover:absolute top-[1.75rem] lg:top-[1.1rem] -left-10 font-normal divide-y rounded-lg shadow w-44 bg-dark-triority divide-gray-600"
            >
              <ul class="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 item-hover">Action</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 item-hover">Comedy</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 item-hover">Drama</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="group relative">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="drop-down-nav-btn"
            >
              CELEBRITIES
              <i class="fa fa-chevron-down fa-sm fa-fw drop-down-nav-icon"></i>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden group-hover:inline-block group-hover:absolute top-[1.5rem] lg:top-[1.1rem] -left-10 font-normal divide-y rounded-lg shadow w-44 bg-dark-triority divide-gray-600"
            >
              <ul class="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 item-hover">Actors</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 item-hover">Actresses</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 item-hover">Directors</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 item-hover lg:p-0">NEWS</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 item-hover lg:p-0">COMMUNITY</a>
          </li>
          <li class="group relative">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="drop-down-nav-btn"
            >
              LANGUAGE
              <i class="fa fa-chevron-down fa-sm fa-fw drop-down-nav-icon"></i>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden group-hover:inline-block group-hover:absolute top-[1.5rem] lg:top-[1.1rem] -left-10 font-normal divide-y rounded-lg shadow w-44 bg-dark-triority divide-gray-600"
            >
              <ul class="py-2 text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 text-sm item-hover">
                    <div class="inline-flex items-center">
                      <united-states className="h-3.5 w-3.5 rounded-full mr-2" />
                      United States
                    </div>
                  </button>
                </li>
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 text-sm item-hover">
                    <div class="inline-flex items-center">
                      <iran className="h-3.5 w-3.5 rounded-full mr-2" />
                      Persian
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button id="theme-toggle" class="drop-down-nav-btn min-h-[36px] lg:min-h-full">
              <i
                id="theme-toggle-dark-icon"
                class="hidden fa fa-moon fa-sm fa-fw theme-toggler-icon"
              ></i>
              <i
                id="theme-toggle-light-icon"
                class="hidden fa fa-sun fa-sm fa-fw theme-toggler-icon"
              ></i>
            </button>
          </li>
          <slot/>
        </ul>
      </div>
    </div>
  </nav>
</template>
