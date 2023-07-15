<script setup>
import ads2 from '@/assets/images/ads2.png'
import BlogItem1 from '@/assets/images/blog-it1.jpg'

import MoreNewsSection from '@/components/home/news-section/MoreNewsSection.vue'
import NewsSidebar from '@/components/home/news-section/NewsSidebar.vue'
</script>

<template>
  <section>
    <div class="container py-10 flex flex-col gap-10 lg:flex-row">
      <div class="basis-[70%] flex flex-col gap-5">
        <img :src="ads2" alt="ads" />
        <section>
          <header class="flex justify-between mb-5">
            <h2 class="text-black dark:text-white text-3xl">IN THEATER</h2>
          </header>
          <div class="flex flex-col gap-3 md:flex-row">
            <img class="rounded-lg" :src="BlogItem1" alt="news-person" />
            <div class="flex flex-col gap-3">
              <h3>
                <a class="text-blue item-hover"
                  >Brie Larson to play first female white house candidate Victoria Woodull in Amazon
                  film</a
                >
              </h3>
              <span class="time text-sm font-light">13 hours ago</span>
              <p class="font-light">
                Exclusive:
                <span class="text-blue hover:text-red">Amazon Studios</span>
                has acquired Victoria Woodhull, with Oscar winning Room star
                <span class="text-blue hover:text-red">Brie Larson</span>
                polsed to produce, and play the first female candidate for the presidency of the
                United States. Amazon bought it in a pitch package deal.
                <span class="text-blue hover:text-red">Ben Kopit </span>, who wrote the Warner Bros
                film <span class="text-blue hover:text-red">Libertine</span> that has...
              </p>
            </div>
          </div>
        </section>
        <more-news-section/>
      </div>
      <news-sidebar />
    </div>
  </section>
</template>
