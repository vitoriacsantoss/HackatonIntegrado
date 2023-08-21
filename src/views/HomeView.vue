<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import DestaqueView from '@/components/DestaqueView.vue'
</script>

<template>
  <div class="banner">
    <div class="carousel__item"></div>
    <div  class="form"> FORM</div>
  </div>
  <div class="destaques">
    <destaque-view />
  </div>
</template>
<style scoped>

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.destaques {
  margin-top: 100px;
}

.form {
  height: 380px;
  width: 650px;
  background-color:  #03033d80;
  position: absolute;
  border-top: 7px solid #f28a31;
}

.carousel__item {
  height: 760px;
  width: 100%;
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