<script setup>
import { ref, computed } from 'vue'


const nome = ref('')
const email = ref('')
const celular = ref('')
const obs = ref('')
const telefone = ref('')
const ok = ref(false)


</script>
<template>
    <div class="row">
        <div class="banner">
            <div class="inner-text">
                <h1 class="titu">CONTATO</h1>
            </div>
        </div>
        <div class="titu2">
            <h1 class="CO">
                CONTATO
            </h1>
            <h4>Escolha um dos canais para que possamos responder o mais rápido possível.</h4>
        </div>


        <div class="contact-form">
            <form id="contact-form" action="index.html" method="get" enctype="multipart/form-data">

                <div class="info">
                    <h3 class="titu3">Informações de contato </h3>
                    <div>
                        <img class="img1" src="loc.png" alt="">
                        Av Do Principe, 1186, Itapema do Norte - Itapoá /SC
                    </div>
                    <div>
                        <img class="img1" src="caixa.png" alt="">
                        rfconsultoriaimobiliaria@outlook.com.br
                    </div>
                    <div>
                        <img class="img1" src="telefone2.png" alt="">
                        (47) 3443-3178
                    </div>
                    <div>
                        <img class="img1" src="wpp.png" alt="">
                        (47) 99684-3087
                    </div>
                </div>

                <!-- contato-formulario -->
                <div class="container-form">
                    <form class="form" @submit.prevent="ok = validar()">
                        <div class="centro">
                            <div class="dados">
                                <br>
                                <div class="nome">
                                    <input type="text" v-on:keypress="ok = false" v-model="nome" required
                                        placeholder="Digite seu nome" />
                                </div>

                                <div class="email">
                                    <input type="email" v-on:keypress="ok = false" v-model="email"
                                        placeholder="Digite seu email" />
                                </div>
                                <br>

                                <!-- <br>  -->

                                <div class="telefoneCL">
                                    <input type="telefoneCL" v-on:keypress="ok = false" v-model="celular" minlength=""
                                        placeholder="Digite seu telefone" />
                                </div>

                                <!-- <br> -->
                                <div class="telefoneFX">
                                    <input type="telefoneFX" v-on:keypress="ok = false" v-model="telefone" minlength=""
                                        placeholder="Digite seu telefone" />
                                    <p class="paga">{{ mensagemErro }}</p>
                                </div>

                                <div class="mensagem">
                                    <textarea v-model="texto" placeholder="mensagem"> </textarea>
                                </div>
                                <br>
                                <br>
                                <br>

                                <button class="comp" type="submit" @click="ok = !ok">Enviar</button>

                            </div>
                        </div>
                    </form>
                </div>
            </form>
            <div v-if="ok" class="baixo">Sua mensagem foi enviada,espere seu retorno! </div>
        </div>
    </div>
</template>

<style scoped>
textarea {
    resize: none;
    width: 1000px;
    height: 400px;

}

.baixo {
    padding-left: 10%;
    flex-direction: row;
    font-size: medium;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    justify-content: center;
    border: 5px;
    display: flex;

}

.comp {
    color: white;
    height: 50px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 47%;
    border: 1px solid#ccc;
    font-size: 1.5rem;
    background-color: #f28a31;
    margin-top: 20%;
}

.nome {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    /* margin-bottom: 10%; */
}

.email {
    margin-top: -6%;
    display: flex;
    flex-direction: column;
    align-items: end;
}

.telefoneCL {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    /* margin-bottom: 20%; */
}

.telefoneFX {
    margin-top: -6%;
    display: flex;
    flex-direction: column;
    align-items: end;
}

.mensagem {
    width: 650px;
    height: 200px;
    display: flex;
    /* align-items: end; */
}

h2 {
    font-size: 25px;
}

.container-form {
    margin-left: 35%;
    margin-top: -15%;
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}

.titu {
    color: white;
}

.titu2 {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.titu3 {
    padding: 0 0 0 20px;
}

.info {
    margin-left: 8%;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 0 0 0 70px;
    list-style: none;
    padding-left: 40px;
    position: relative;
    margin-bottom: 20px;
    line-height: 22px;
    color: #535353;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    color: white;
    border: 1px solid #ccc;
    transform: scale(0.7);
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

}

.form {
    max-width: 700px;
    padding: 25px;
    /* border: 1px solid #ccc; */
    /* background-color: #848486; */
    width: 85vh;
    font-family: 'Times New Roman', Times, serif;
    transform: scale(0.8);
    font-size: 22px;
    margin-top: 1%;
}



.dados {
    font-family: Arial, Helvetica, sans-serif;
    /* color: black; */
}

.img1 {
    height: 38px;
    width: 45px;
}

.banner {
    border-radius: 0%;
    background: url(https://www.rafaelfonsecaimoveis.com.br/assets/img/anuncie/banner-anuncie.png) top left repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: cover;
    height: 280px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgba(36, 42, 53, 0.7);
    /* color: aliceblue; */
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 100px 0 0 0 ; */
}

.inner-text {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    opacity: 70%;
}

.CO {
    font-size: 25px;
    margin-top: 30px;
    color: #37404D;
}
</style>