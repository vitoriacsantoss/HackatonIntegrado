<script setup>
import HomeView from '@/views/HomeView.vue'
import BuscarView from '@/views/BuscarView.vue'
import ContatoView from '@/views/ContatoView.vue'

import { ref, computed } from 'vue'

const email = ref('')

</script>
<template>
    <div class="main-footer">
        <div class="contato">
            <h1>CONTATO</h1>
            <div>

                CRECI 12345
            </div>
            <div>
                <img class="img1" src="telefone.png" alt="">
                (47) 1234-1234
            </div>
            <div>
                <img class="img" src="https://cdn.icon-icons.com/icons2/792/PNG/512/whatsapp_icon-icons.com_65542.png"
                    alt="">
                (47) 91234-1234
            </div>
            <div>
                <img class="img1" src="email.png" alt="">
                contato@contato.com.br
            </div>
        </div>
        <div class="links">
            <h1>LINKS</h1>
           <div>
            <router-link to="/" class="routerHome">Home</router-link>
            </div>
            <div>
            <router-link to="/buscar" class="routerBusca">Buscar imóveis</router-link>
            </div>
            <div>
            <router-link to="/contato" class="routerFale">Fale conosco</router-link>
        </div>

        </div>
        <div class="entramos">
            <h1>ENTRAMOS EM CONTATO</h1>
            <div class="miniform">
                <p>Ficou com dúvida de como alugar</p>
                <p>ou comprar o seu imóvel,</p>
                <p>entraremos em contato, digite o seu email</p>
                <input type="email" class="input" v-on:keypress="ok = false" v-model="email" placeholder="Email..."
                    required />
                <p class="pzin">Ao informar meus dados, eu</p>
                <p>concordo com a Política de Privacidade.</p>
                <button class="comp">Enviar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.routerBusca{
text-decoration: none;
color: #AAAAAA;
}
.routerHome{
text-decoration: none;
color: #AAAAAA;
}
.routerFale{
text-decoration: none;
color: #AAAAAA;
}

.comp {
    color: white;
    height: 40px;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 47%;
    border: 1px solid#ccc;
    background-color: #f28a31;
    margin-top: 20%;
    letter-spacing: 1px;
    justify-content: center;
    margin-left: 0%;
}
.pzin{
    margin-top: 20px;
}
.input {
    height: 40px;
    padding: 15px;
}

.main-footer {
    padding: 10px 10px 500px 100px;
    background-color: #02193c;
    display: flex;
    flex-direction: row;
}

.contato {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 300px;
}

.entramos {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 250px;
}

.miniform {
    background-color: #021830;
    width: 300px;
    height: 350px;
    padding: 15px;
}

.links {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px, 10px, 20px, 60px;
    padding-left: 15%;
}

.bot {
    background-color: #02193c;
}

.img1 {
    margin-top: 10px;
}

.main-footer div {
    color: #AAAAAA;
    margin: 0 15px 0 0;
    font-size: 12px;
}

img {
    height: 12px;
    width: 12px;
}

.img1 {
    height: 20px;
    width: 20px;
}

h1 {
    font-size: medium;
    color: white;
    margin-top: 80px;
    margin-bottom: 30px;
}</style>
