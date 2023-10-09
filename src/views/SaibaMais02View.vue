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
  <div class="tudo">
  <div class="titulo">
    <h3>Cód.: 610 - Apartamento à venda, no Floresta | Joinville</h3>
    <br>
    <p>(Simbolo) Rua: Ibirapuera 353</p>
  </div>
  <div class="carrosel">
   <Carousel>
    <Slide key="1">
      <div class="carousel__item">
        <img class="img1" src="https://arkpad.com.br/wp-content/uploads/2020/04/decoracao-de-quarto-93.jpg" alt=""> 
      </div>
    </Slide>
    <Slide key="2">
      <div class="carousel__item">
        <img class="img1" src="https://cdn.awsli.com.br/2500x2500/1597/1597961/produto/125798320/63bba276c4.jpg" alt=""> 
      </div>
    </Slide>
    <Slide key="3">
      <div class="carousel__item">
        <img class="img1" src="https://portal.loft.com.br/wp-content/uploads/2022/10/decoracao-lavabo-branco-espelho-pia-vaso-planta-seca-Quattrino.jpg" alt=""> 
      </div>
    </Slide>
    
    <template #addons>
      <!-- <Navigation /> -->
      <Pagination />
    </template>
  </Carousel>
  </div>


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
</div>
</template>

<style scoped>
.titulo{
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px, bold;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-left: 21%;
}
.tudo{
  margin-bottom: 30%;
}
.carrosel{
  margin-top: 2%;
  margin-left: -25%;

}
.img1{
  width: 600px;
  height: 450px;
}
.carousel__item {
  width: 600px;
  height: 450px;
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
  margin-top: -38%;
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