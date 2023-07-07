<script setup>
import TrailerSidebar from '@/components/TrailerSidebar.vue'
</script>

<template>
  <section class="my-10 bg-light-backgroundColor dark:bg-transparent">
    <div class="container py-10">
      <header
        class="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between mb-5 py-10 sm:items-center"
      >
        <h2 class="text-black dark:text-white text-3xl">ON TV</h2>
        <a class="text-sm item-hover" href="#"
          >VIEW ALL <i class="fa fa-chevron-right fa-sm fa-fw"></i
        ></a>
      </header>
      <div class="flex h-full flex-col lg:flex-row">
        <div class="movie w-full h-full">
          <iframe
            class="item-video w-full h-[435px]"
            src="https://www.youtube.com/embed/gbug3zTm3Ws"
            data-src="https://www.youtube.com/embed/gbug3zTm3Ws"
          ></iframe>
        </div>
        <trailer-sidebar />
      </div>
    </div>
  </section>
</template>
