<script setup>
import TrailerItem from '@/components/home/trailer-section/TrailerItem.vue'
import trailer2 from '@/assets/images/trailer2.jpg'
import trailer3 from '@/assets/images/trailer3.png'
import trailer4 from '@/assets/images/trailer4.png'
import trailer5 from '@/assets/images/trailer5.jpg'
import trailer6 from '@/assets/images/trailer6.jpg'
import trailer7 from '@/assets/images/trailer7.jpg'

const trailers = [
  {
    id: 1,
    name: 'Logan: Director James Mangold Interview',
    duration: '2:43',
    src: trailer2
  },
  {
    id: 2,
    name: 'Logan: Director James Mangold Interview',
    duration: '2:43',
    src: trailer3
  },
  {
    id: 3,
    name: 'Logan: Director James Mangold Interview',
    duration: '2:43',
    src: trailer4
  },
  {
    id: 4,
    name: 'Logan: Director James Mangold Interview',
    duration: '2:43',
    src: trailer5
  },
  {
    id: 5,
    name: 'Logan: Director James Mangold Interview',
    duration: '2:43',
    src: trailer6
  },
  {
    id: 6,
    name: 'Logan: Director James Mangold Interview',
    duration: '2:43',
    src: trailer7
  }
]
</script>

<template>
  <div
    class="slider max-h-[435px] w-full lg:w-[400px] 2xl:w-[600px] overflow-y-scroll scroll-snap-y-mandatory"
  >
    <trailer-item
      v-for="trailer in trailers"
      :key="trailer.id"
      :name="trailer.name"
      :duration="trailer.duration"
      :src="trailer.src"
    />
  </div>
</template>
