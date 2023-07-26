<script setup>
defineProps(['modelValue'])
</script>

<template>
  <div
    class="pagination sm:bg-light-backgroundColor dark:bg-transparent sm:border-y-[1px] sm:border-light-secondary sm:dark:border-dark-100 flex flex-col items-center gap-3 sm:gap-0 sm:flex-row text-xs sm:h-8"
  >
    <span
      class="text-center sm:flex sm:items-center sm:p-1 font-light sm:border-r-[1px] sm:border-light-secondary sm:dark:border-dark-100 sm:basis-1/4 w-full h-full"
    >
      Movies per page:
    </span>
    <select
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      class="max-w-[150px] border-[1px] sm:basis-1/4 font-light flex-shrink-0 inline-flex flex-col sm:flex-row sm:items-center sm:h-full text-center sm:border-0 sm:border-r-[1px] sm:border-light-secondary sm:dark:border-dark-100 dark:text-text bg-transparent text-black"
    >
      <option class="bg-light-secondary dark:bg-dark-secondary" value="5">5 Movies</option>
      <option class="bg-light-secondary dark:bg-dark-secondary" value="10">10 Movies</option>
    </select>
    <div class="sm:basis-1/2 flex items-center justify-center sm:justify-end gap-3 w-full h-full">
      Page 1 of 2:
      <span class="text-red dark:text-yellow dark:hover:text-yellow">1</span>
      <span class="text-blue dark:hover:text-yellow">2</span>
      <i class="fa fa-fw fa-sm fa-chevron-right text-blue dark:hover:text-yellow"></i>
    </div>
  </div>
</template>
