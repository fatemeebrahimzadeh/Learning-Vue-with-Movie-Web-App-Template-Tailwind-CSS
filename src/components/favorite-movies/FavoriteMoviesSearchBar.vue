<template>
  <div
    class="search-form bg-light-backgroundColor dark:bg-dark-secondary dark:border-2 border-dark-800 flex flex-col items-center p-5"
  >
    <form class="w-full p-1">
      <label class="text-sm" for="movie-name">Movie name:</label>
      <input
        name="movie-name"
        type="text"
        class="block w-full bg-white border-[1px] border-black dark:border-0 dark:bg-dark-triority placeholder-text text-text rounded-sm px-5 py-3 placeholder:font-light mb-5 text-xs"
        required
        placeholder="Enter keywords"
      />
      <label class="text-sm" for="skills">Genres & Subgenres:</label>
      <select
        name="skills"
        class="flex-shrink-0 inline-flex font-medium text-center w-full bg-white border-[1px] border-black dark:border-0 dark:bg-dark-triority dark:placeholder-text dark:text-text rounded-sm px-5 py-3 placeholder:font-light mb-5 text-xs"
      >
        <option class="form-option" selected value="">Enter to filter genres</option>
        <option v-for="index in 5" :key="index" class="form-option" :value="`Action${index}`">
          {{ `Action ${index}` }}
        </option>
      </select>
      <label class="text-xs" for="range">Rating Range</label>
      <select
        name="skills"
        class="flex-shrink-0 inline-flex font-medium text-center w-full bg-white border-[1px] border-black dark:border-0 dark:bg-dark-triority dark:placeholder-text dark:text-text rounded-sm px-5 py-3 placeholder:font-light mb-5 text-xs"
      >
        <option v-for="index in 4" :key="index" class="form-option" :value="`${index}`">
          -- Select the rating range below --
        </option>
      </select>
      <label class="text-xs" for="year">Release Year:</label>
      <div class="flex flex-col sm:flex-row justify-between gap-5">
        <select
          name="skills"
          class="flex-shrink-0 inline-flex font-medium text-center basis-[45%] bg-white border-[1px] border-black dark:border-0 dark:bg-dark-triority dark:placeholder-text dark:text-text rounded-sm px-5 py-3 placeholder:font-light mb-5 text-xs"
        >
          <option
            class="bg-light-secondary dark:bg-dark-secondary text-black dark:text-text"
            value="range"
          >
            From
          </option>
          <option
            v-for="index in 3"
            :key="index"
            class="bg-light-secondary dark:bg-dark-secondary text-black dark:text-text"
            :value="`number${index}`"
          >
            {{ index * 10 }}
          </option>
        </select>
        <select
          name="skills"
          class="flex-shrink-0 inline-flex font-medium text-center basis-[45%] bg-white border-[1px] border-black dark:border-0 dark:bg-dark-triority dark:placeholder-text dark:text-text rounded-sm px-5 py-3 placeholder:font-light mb-5 text-xs"
        >
          <option
            class="bg-light-secondary dark:bg-dark-secondary text-black dark:text-text"
            value="range"
          >
            To
          </option>
          <option
            v-for="index in 3"
            :key="index"
            class="bg-light-secondary dark:bg-dark-secondary text-black dark:text-text"
            :value="`number${index}`"
          >
            {{ index * 10 }}
          </option>
        </select>
      </div>
      <button class="w-full bg-red px-5 py-3 text-white" type="submit">SUBMIT</button>
    </form>
  </div>
</template>
