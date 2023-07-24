<script setup>
defineProps(['name', 'job', 'src'])
</script>

<template>
  <article class="celebrity-item">
    <img class="rounded-lg" :src="src" alt="celebrity1" />
    <div class="celebrity-detail">
      <h6 class="celebrity-name">
        <a class="item-hover hover:cursor-pointer">{{ name }}</a>
      </h6>
      <span class="celebrity-job">{{ job }}</span>
    </div>
  </article>
</template>
