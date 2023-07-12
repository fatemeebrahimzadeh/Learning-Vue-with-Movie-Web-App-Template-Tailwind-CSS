<template>
  <div
    class="filter gap-2 sm:gap-0 sm:bg-light-backgroundColor dark:bg-transparent sm:border-y-[1px] sm:border-light-secondary sm:dark:border-dark-100 flex flex-col items-center sm:flex-row text-xs sm:h-8"
  >
    <div
      class="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center sm:p-1 font-light sm:border-r-[1px] sm:border-light-secondary sm:dark:border-dark-100 sm:basis-8/12 w-full h-full"
    >
      <span class="text-center">Found <span class="text-blue">1,608 movies</span> in total</span>
      <span class="text-center">Sort by:</span>
    </div>
    <select
      class="max-w-[150px] border-[1px] sm:basis-2/12 font-light flex-shrink-0 inline-flex flex-col sm:flex-row sm:items-center sm:h-full text-center sm:border-0 sm:border-r-[1px] border-light-secondary dark:border-dark-100 text-black dark:text-text bg-transparent"
    >
      <option class="bg-light-secondary dark:bg-dark-secondary" value="popularity">
        Popularity Descending
      </option>
      <option class="bg-light-secondary dark:bg-dark-secondary" value="popularity">
        Popularity Ascending
      </option>
      <option class="bg-light-secondary dark:bg-dark-secondary" value="rating">
        Rating Descending
      </option>
      <option class="bg-light-secondary dark:bg-dark-secondary" value="rating">
        Rating Ascending
      </option>
      <option class="bg-light-secondary dark:bg-dark-secondary" value="date">
        Release date Descending
      </option>
      <option class="bg-light-secondary dark:bg-dark-secondary" value="date">
        Release date Ascending
      </option>
    </select>
    <button
      id="movie-list-btn"
      class="block text-center sm:basis-1/12 hover:text-red hover:dark:text-yellow sm:flex sm:items-center sm:justify-center sm:border-r-[1px] sm:border-light-secondary sm:dark:border-dark-100 w-full h-full"
    >
      <i class="fa fa-fw fa-sm fa-list"></i>
    </button>
    <button
      id="movie-grid-btn"
      class="block text-center sm:basis-1/12 hover:text-red dark:hover:text-yellow sm:flex sm:items-center sm:justify-center w-full h-full"
    >
      <i class="fa fa-fw fa-sm fa-th"></i>
    </button>
  </div>
</template>
