<script setup>
import DestaqueView from '@/components/DestaqueView.vue'
import { ref } from 'vue'

</script>

<template>
  <div class="banner">
    <div class="carousel__item">

    </div>
    <div class="form">
      <h1 class="titu"></h1>
    </div>

  </div>
  <div class="destaques">
    <destaque-view />
  </div>
</template>

<style scoped>
.titu{
  color: aliceblue;
  font-size: 80px;
}
.form {
  display: flex;
  align-items: center;
  background-color: #03033d80;
}


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
  height: 760px;
  width: 1850px;
  background-color: #03033d80;
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

</style>