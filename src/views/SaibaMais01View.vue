<script>
import { ref, computed } from 'vue'


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
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<template>
<b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Fourth Slide"
      img-src="https://picsum.photos/1024/480/?image=23"
    ></b-carousel-slide>
  </b-carousel>
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
h2{
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
.nome{
    margin-left: 5%;
}
.email{
    margin-left: 5%;
}
.telefoneCL{
    margin-left: 5%;
}
.mensagem{
    margin-left: 5%;
}
</style>