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

            <div class="link">
                <h1>LINKS</h1>
                <div class="botoes">
                    <div class="bot">
                        <button @click="$router.push({ name: 'home' })">Home</button>
                    </div>
                    <div class="bot">
                        <button @click="$router.push({ name: 'buscar' })">Buscar Imóveis</button>
                    </div>
                    <div class="bot">
                        <button @click="$router.push({ name: 'contato' })">Fale conosco</button>
                    </div>
                </div>
            </div>
        </div>

            <div class="entramos">
                <h1>ENTRAMOS EM CONTATO</h1>
                <div class="miniform">
                    <p class="texto"> Ficou com dúvida de como alugar <br> ou comprar o seu imóvel, <br> entraremos em contato,digite o <br> seu email</p>
                    <label for="">Email: </label>
                    <input type="email" class="input" v-on:keypress="ok = false" v-model="email"
                        placeholder="insira seu email" required />
                </div>
            </div>
    </div>
</template>

<style scoped>
.texto{
    font-size: medium;
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
.entramos{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 10px;
}

.link {
    padding-left: 50px ;
    margin-top: 0%;
}

.bot {
    padding-top: 10%;
    background-color: #02193c;
    color: #ffffff;
    border: 1px solid #02193c;
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
}
</style>
