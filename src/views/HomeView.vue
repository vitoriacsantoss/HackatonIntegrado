<script setup>
import DestaqueView from '@/components/DestaqueView.vue'
import { ref } from 'vue'
const estado = ref('')

</script>

<template>
  <div class="banner">
    <div class="carousel__item">

    </div>
    <div class="form">
      <!-- <div class="form2"> -->
      <!-- <div class="caixinha"> -->

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Comprar</option>
        <option value="Alugar">Alugar</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Todos</option>
        <option value="Casa">Casa</option>
        <option value="Apartamento">Apê</option>
        <option value="Terreno">Terreno</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Cidades</option>
        <option value="Joinville">Joinville</option>
        <option value="Araquari">Araquari</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Bairros</option>
        <option value="Joinville">Boehmerwald</option>
        <option value="Araquari">Fátima</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Quartos</option>
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>
      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Banheiros</option>
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Garagem</option>
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>

      <button class="botao" @click="$router.push({ name: 'buscar' })">BUSCAR</button>
     
    </div>
  </div>
  <div class="destaques">
    <destaque-view />
  </div>
</template>

<style scoped>
.botao {
  display: flex;
  align-items: center;
  background-color: #f28a31;
  color: #ffffff;
  width: 20%;
  margin-left: 16px;
  padding: 10px 140px;
  border: 2px solid #f28a31;
  transition: background-color 1s ease, color 1s ease;
  justify-content: center;
}

.principal {
  display: flex;
  flex-direction: row;
}

.form2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  /* border-radius: 2%; */
  /* margin-left: 200px;
  margin-top: 50px; */
  /* padding: 20px; */
  /* height: 20%; */
  /* background-color: #f28a31; */
}

/* .caixinha {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
} */



.caixinha1 {
  padding: 0 70px;
  width: 40%;
  margin-left: 16px;
  background-color: #f2f2f2;
  height: 38px;
  line-height: 38px;
  font-family: sans-serif;
  color: #999999;
  font-size: 15px;
  background: #01081d80;
  /* margin-top: 10%; */
}

.titu {
  color: aliceblue;
  font-size: 80px;
}

.form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  padding: 30px;

  border-top: 7px solid #f28a31;
  background-color: #0f0f4180;
  height: 400px;
  width: 700px;
  position: absolute;
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