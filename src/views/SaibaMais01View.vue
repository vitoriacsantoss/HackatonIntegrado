<script setup>
import { ref, defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


const nome = ref('')
const email = ref('')
const celular = ref('')
const mensagem = ref('')
let enviar = ref(false)

function confirmacao() {
  console.log(enviar)
  nome.value = "";
  email.value = "";
  celular.value = "";
  telefone.value = "";
  mensagem.value = ""
  return true;
}
</script>

<template>
   <Carousel>
    <Slide key="1">
      <div class="carousel__item">
        <img class="m2" src="https://static-cse.canva.com/blob/759728/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.58b76396.avif" alt=""> 
      </div>
    </Slide>
    <Slide key="2">
      <div class="carousel__item">
        <img class="m2" src="https://static-cse.canva.com/blob/759728/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.58b76396.avif" alt=""> 
      </div>
    </Slide>
    <Slide key="3">
      <div class="carousel__item">
        <img class="m2" src="https://static-cse.canva.com/blob/759728/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.58b76396.avif" alt=""> 
      </div>
    </Slide>
    
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>


  <div class="botao">
    <button @click="$router.push({ name: 'buscar' })">Voltar</button>
  </div>

  <div class="form">
    <h2>ENTRAMOS EM CONTATO</h2>
    <div class="nome">
      <input type="text" v-model="nome" v-on:keypress="enviar = false" required placeholder="Nome..." />
    </div>
    <br>
    <div class="email">
      <input type="email" v-model="email" v-on:keypress="enviar = false" required placeholder="Email..." />
    </div>
    <br>
    <div class="telefoneCL">
      <input type="telefoneCL" v-model="celular" v-on:keypress="enviar = false" minlength="" required
        placeholder="(00) 00000-0000" />
    </div>
    <br>
    <div class="mensagem">
      <textarea class="textarea-balao-up" v-model="mensagem" v-on:keypress="enviar = false" required
        placeholder="Olá, tenho interesse neste imóvel, Apartameto à venda, 2 quartos, Jardim da Barra - Itapoá/SC, código 610. Aguardo breve o contato. Obrigado!">
      </textarea>
    </div>
  </div>
</template>

<style scoped>


.carousel__item {
  width: 600px;
  height: 300px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  /* border-radius: 8px; */
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
h2 {
  font-size: 120%;
  margin-left: 5%;
  color: white;
}

.form {
  background-color: #f28a31;
  width: 20%;
  border-radius: 02%;
  margin-left: 5%;
  width: 350px;
  height: 350px;
  padding: 20px 10px 10px 10px;
  margin-left: 65%;
}

textarea {
  font-size: 90%;
  resize: none;
  width: 280px;
  height: 100px;
}

.nome {
  margin-left: 5%;
}

.email {
  margin-left: 5%;
}

.telefoneCL {
  margin-left: 5%;
}

.mensagem {
  margin-left: 5%;
}</style>