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
    <div class="form">
        <h2>BUSCA AVANÇADA</h2>
        <label for=""></label>
        <input class="inputUm" type="text" v-on:keypress="ok = false" v-model="endereco" placeholder="Digite seu endereço" />
    <hr>
    <label for="estado">Estado:</label>
      <select v-on:keypress="ok = false" v-model="estado">
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
      </select>
    </div>

</template>

<style scoped>
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
    margin-left: 420px;
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