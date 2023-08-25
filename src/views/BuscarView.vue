<script setup>
    import {  ref } from 'vue'

    const estado = ref('')

</script>

<template>

    <div class="banner">
        <div class="inner-text"> 
            <h1>BUSCAR ÍMOVEIS</h1>
        </div>
    </div>
    <div class="principal">
    <div class="form">
        <h2>BUSCA AVANÇADA</h2>
    <label for="estado"></label>
      <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="Alugar">Alugar</option>
        <option value="Comprar">Comprar</option>
      </select>
        <p>Tipo de imóvel</p>
         <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="Casa">Casa</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Terreno">Terreno</option>
        </select>
        <p>Cidades</p>
        <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="Joinville">Joinville</option>
        <option value="Araquari">Araquari</option>
      </select>
        <p>Bairros</p>
        <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="Joinville">Itinga</option>
        <option value="Araquari">Araquari</option>
      </select>
    </div>

    <div class="containerimg">
    <div class="oi">
        <img class="img1" src="AP.jpg" alt="">
    </div>
    <div>
        <img class="img2" src="AP2.jpg" alt="">
    </div>
    <div>
        <img class="img3" src="AP3.jpg" alt="">

    </div>
    </div>


    <div class="informacoes">show</div>
    </div>

</template>

<style scoped>
.containerimg{
    display: flex;
    flex-direction: column;
}
.img1{
    height: 100px;
    width: 50px;
    margin-bottom: 50%;
}
.img2{
    height: 30px;
}
.img3{
    height: 10px;
}
.principal{
    display: flex;
    flex-direction: row;
}
.informacoes{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 250px;
    color: black;
}
.img{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 250px;
    color: black;
}
p{
    margin-top: 05%;
    color: #ffffff;
    font-weight: bold;
}
.caixinha{
    border-radius: 5px;
    padding: 5px 0px;
    background-color: #ffffff;
    border-color: #ffffff;
}
input{
    border-radius: 5px;
    padding: 5px 0px;
    background-color: #ffffff;
    border-color: #ffffff;
}
.inputUm{
    margin-top: 10px;
}
.form{
    border-radius: 2%;
    margin-left: 100px;
    margin-top: 50px;
    padding: 20px;
    height: 20%;
    width: 20%;
    background-color: #f28a31;
}
h2{
    color: white;
    font-size:large ;
}
.banner{
    background: url(https://www.rafaelfonsecaimoveis.com.br/assets/img/anuncie/banner-anuncie.png) top left repeat; background-repeat: no-repeat; background-size: cover;background-size: cover;
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

h1 {
    color: white;
}
</style>