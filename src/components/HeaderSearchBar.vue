<script setup>
import SearchIcon from '@/assets/svgs/SearchIcon.vue'
</script>

<template>
  <form class="hidden sm:block border-dark-primary bg-[#233a50] border-4">
    <div class="flex">
      <div class="flex group relative">
        <button
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 mx-4 text-gray-200 dark:text-black group-hover:text-red group-hover:dark:text-yellow text-sm font-medium text-center rounded-l-lg focus:outline-none border-r-2 border-black"
        >
          TV SHOWS
          <i
            class="fa fa-chevron-down fa-sm fa-fw ml-1 text-gray-200 dark:text-black group-hover:text-red group-hover:dark:text-yellow"
          ></i>
        </button>
        <div
          id="dropdown-states"
          class="absolute z-10 hidden group-hover:inline-block group-hover:absolute top-[2.60rem] -left-2 rounded-lg divide-y divide-gray-100 shadow-lg w-44 bg-dark-triority"
        >
          <ul class="py-2 text-sm text-gray-200" aria-labelledby="states-button">
            <li>
              <button type="button" class="status-btn">
                <div class="status-btn-text">TV SHOWS</div>
              </button>
            </li>
            <li>
              <button type="button" class="status-btn">
                <div class="status-btn-text">OTHERS</div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          class="block p-2.5 w-full z-20 text-sm bg-transparent placeholder-text text-text"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          required
        />
        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-text">
          <SearchIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </form>
</template>
