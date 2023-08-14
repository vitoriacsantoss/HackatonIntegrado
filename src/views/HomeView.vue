<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import DestaqueView from '@/components/DestaqueView.vue'
</script>

<template>
  <carousel ref="carousel" v-model="currentSlide">
    <slide v-for="slide in 1" :key="slide">
      <div class="carousel__item"></div>
    </slide>

    <template #addons>
     
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
  height: 760px;
  width: 750%;
  color: var(--vc-clr-white);
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
     padding-top: 200px;
     padding-bottom: 200px;
     background-size: cover;
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