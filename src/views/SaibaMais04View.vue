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
    <div class="inicio">
    <div class="titulo">
      <h3>Cód.: 610 - Apartamento à venda, no Glória | Joinville</h3>
    </div>
      <br>
    <div class="simbolo">
      <img src="@/assets/imgs/simb.png" alt="">
      <p class="p" >Rua: Agrolândia 444</p>
    </div>
  </div>
    
    <div class="preco">R$296.000,000
    </div>

    <div class="carousel">
      <Carousel>
        <Slide key="1">
          <div class="carousel__item">
            <img class="img1" src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/pp-03.jpg" alt="">
          </div>
        </Slide>
        <Slide key="2">
          <div class="carousel__item">
            <img class="img1" src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/ca893663-3ab4-4866-badb-fa14ef922b4b.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="3">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/db5fdb7d-3d5f-4592-8012-250663e8cdfa.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="4">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/45478a69-d718-42fe-9967-eae2bc4a5b14.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="5">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/de2c3a83-b4cd-40b9-8dee-3c0f18fc9bc7.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="6">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/cf137f07-42d0-4028-8f4d-07def8e92c1a.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="7">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/f5d7625e-b7b8-4b20-a1e0-ffb6f8be96db.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="7">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/0c598ea1-a1ce-43d0-84e3-981839a9aee9.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="8">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/4f9c4f1a-d1dc-4000-a683-35b174aa5913.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="9">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/cf063079-1a5d-4211-be70-9d918617f41c.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="10">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/f9007339-6d2e-462c-ad18-c8abd9e291e4.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="11">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/e2cdfa60-78be-4010-9e7a-24dd8ccbbfe3.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="12">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/1fed225b-6b8e-46cd-99ff-90f17d193340.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="13">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/4a6a3025-5a61-4b73-9448-3f1d625792f5.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="14">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/3e70f6b4-2725-4758-8ad5-547930f7b250.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="15">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/717d5016-f441-441c-9401-67fce615d9d2.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="16">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/cc7dd520-b465-4781-92f6-95abfde58144.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="17">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/86ef4e96-41b4-49f1-b125-499827f15098.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="18">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/4198df5e-668a-4755-911f-e410db12846e.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="19">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/153564d7-e70e-4b1f-a7c5-474d8613bca6.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="20">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/9ff304f4-748e-44f3-8abd-e57d367f52f5.jpg"
              alt="">
          </div>
        </Slide>
        <Slide key="21">
          <div class="carousel__item">
            <img class="img1"
              src="https://s3.imoview.com.br/rafaelfonseca/Imoveis/454/4eb4c3a6-0417-484f-a447-c69769ac5e0f.jpg"
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
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=444+agrol%C3%A2ndia%2C+gloria%2C+joinville&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
      <button class="enviar">ENVIAR</button>
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

    <div>
      <button class="botao" @click="$router.push({ name: 'buscar' })">Voltar</button>
    </div>
  </div>
</template>

<style scoped>
.inicio{
  margin-right: 20%;
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
  margin-top: 10%;
}

.preco{
  font-size: 25px;
  color: #f28a31;
  font-weight: bold;
  margin-top: -13%;
  margin-left: 45%;
  margin-bottom: -1%;
}
.p{
  margin-left: 13%;
  margin-top: -13%;
}
.form {
  font-family: "Open Sans" sans-serif;
  margin-top: -75%;
  margin-bottom: 80%;
  background-color: #f28a31;
  width: 20black%;
  border-radius: 02%;
  margin-left: 5%;
  width: 350px;
  height: 397px;
  padding: 20px 10px 10px 10px;
  margin-left: 63%;
}

.enviar{
  background-color: white;
  color: black;
  border: #f28a31;
  border-radius: 2px;
  width: 90%;
  height: 15%;
  margin-left: 5%;
  margin-top: 8%;
}
.carousel{
  margin-right: 210px;
  margin-top: -7%;
}

.simbolo{
    height: 200px;
    width: 200px;
    margin-left: 21%;
    margin-top: -1%;
  }
.botao {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f28a31;
  color: black;
  padding: 20px;
  border: 2px solid #ffffff;
  transition: background-color 1s ease, color 1s ease;
  border-radius: 4%;
  width: 20%;
  height: 20%;
  margin-top: -58%;
  margin-left: 63%;
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
  margin-bottom: 2%;
  font-family: "Open Sans" sans-serif;
}

.mapa {
  margin-left: 17%;
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
  margin-top: 30%;
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


.img1 {
  width: 600px;
  height: 450px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

h2 {
  font-size: 120%;
  margin-left: 5%;
  color: white;
}

.textarea {
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