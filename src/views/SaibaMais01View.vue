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
  <hr>
  <div class="tudo">
    <div class="titulo">
      <h3>Cód.: 610 - Apartamento à venda, no Floresta | Joinville</h3>
    </div>
      <br>
      <div class="simbolo">
      <img src="@/assets/imgs/simb.png" alt="">
    </div>
      <p>Rua: Ibirapuera 353</p>
    </div>
      <Carousel>
        <Slide key="1">
          <div class="carousel__item">
            <img class="img1" src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/a4k1z-3cbc20d9-c893-48c9-9fca-ba2131b5e1bb-1695236336.jpeg" alt="">
          </div>
        </Slide>
        <Slide key="2">
          <div class="carousel__item">
            <img class="img1" src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/us4p9-74ad4799-aaae-4700-8699-d176bcd53393-1695236336.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="3">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/hvl0g-d6b1fcba-fd99-4105-9244-ac81e9aabe3f-1695236336.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="4">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/xff89g-b35e9a94-eace-4b1b-95d4-41eb305a9113-1695236336.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="5">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/1adfa-942371d6-92b7-4c88-96c1-febf46ca659d-1695236336.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="6">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/r9r75-d0d68789-e173-4d9b-bbc2-c1b7da576203-1695236337.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="7">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/gmy6p-9e7f1dae-eccf-4a66-83a2-c3d49eb0e538-1695236337.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="7">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/mlami-c6bdee22-22bf-4839-9df1-e22a35daa75c-1695236337.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="8">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/vk8zw-2ccff974-c72d-4d83-9f32-cefcdc73ddb6-1695236337.jpeg"
              alt="">
          </div>
        </Slide>
        <Slide key="8">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/610/ofi9v-dee29d2c-7079-45d9-822d-1f76d3cda3f4-1695236337.jpeg"
              alt="">
          </div>
        </Slide>

        <template #addons>
          <!-- <Navigation /> -->
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="mapa">
      <h1 class="tituloLoc">Localização:</h1>
      <iframe width="1170" height="500" id="gmap_canvas"
        src="https://maps.google.com/maps?q=rua+ibirapuera+floresta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
        scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
      <div class="ligue">
        <h1 class="ligueAgora">LIGUE AGORA!</h1>
        <div class="contato">
          <img class="logoLoc" src="@/assets/imgs/loc.png" alt="">
          <div class="endereco">
            <h4>Endereço</h4>
            <p>Av Do Príncipe, 1186, Itapema do Norte - Itapoá/SC</p>
          </div>
          <img class="logoZap" src="@/assets/imgs/wpp.png" alt="">
          <div class="zap">
            <h4>WhatsApp</h4>
            <p>(47) 996843087</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <button class="botao" @click="$router.push({ name: 'buscar' })">Voltar</button>
  </div>
</template>

<style scoped>
.simbolo{
  height: 200px;
  width: 200px;
}
.botao {
  background-color: #f28a31;
  color: black;
  padding: 20px;
  border: 2px solid #ffffff;
  transition: background-color 1s ease, color 1s ease;
  border-radius: 4%;
  width: 20%;
  margin-top: -80%;
  margin-left: 2%;
}

.botao:hover {
  font-family: "Open Sans" sans-serif;
  background-color: #f28a3180;
  color: black;
}

.contato {
  margin-top: 30px;
}

.tituloLoc {
  margin-bottom: 1%;
  font-family: "Open Sans" sans-serif;
}

.mapa {
  margin-left: 21%;
  margin-top: 5%;
}

.h4 {
  font-size: 4px;
}

.endereco {
  margin-left: 20%;
  margin-top: -19%;
  font-size: 12px;
}

.zap {
  margin-left: 20%;
  margin-top: -19%;
  font-size: 12px;
}

.ligueAgora {
  font-size: 25px;
}

.ligue {
  font-size: 13px;
  margin-top: 18%;
}

.titulo {
  font-family: "Open Sans" sans-serif;
  font-size: 20px, bold;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-left: 21%;
}

.tudo {
  margin-bottom: 30%;
  margin-top: 03%;
}

.carrosel {
  margin-top: 2%;
  margin-left: -25%;

}

.img1 {
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
  font-family: "Open Sans" sans-serif;
  margin-top: -62%;
  margin-bottom: 80%;
  background-color: #f28a31;
  width: 20black%;
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
}


</style>