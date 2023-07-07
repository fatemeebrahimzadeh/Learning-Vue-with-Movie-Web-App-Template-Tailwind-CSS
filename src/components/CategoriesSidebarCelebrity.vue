<script setup>
import ava1 from '@/assets/images/ava1.jpg'
</script>

<template>
  <article class="celebrity-item">
    <img class="rounded-lg" :src="ava1" alt="celebrity1" />
    <div class="celebrity-detail">
      <h6 class="celebrity-name">
        <a class="item-hover" href="#">Samuel N. Jack</a>
      </h6>
      <span class="celebrity-job">ACTOR</span>
    </div>
  </article>
</template>
