<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import DestaqueView from '@/components/DestaqueView.vue'
</script>

<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in 3" :key="slide">
      <div class="carousel__item"></div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  <div class="destaques">
    <destaque-view />
  </div>
</template>
<style scoped>
.destaques {
  margin-top: 100px;
}
.carousel__item {
  height: 750px;
  width: 750%;
  background-image: url('https://static1.purebreak.com.br/articles/5/85/10/5/@/317506--bob-esponja-calca-quadrada-e-as-maiore-opengraph_1200-2.jpg');
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>