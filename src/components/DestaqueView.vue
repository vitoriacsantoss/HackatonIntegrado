<script setup>
import MButton from '@/components/MButton.vue'


</script>
<template>
    <div class="titu">
        <h1>DESTAQUES</h1>
    </div>
    <div class="cointainerdstq">
        <img class="img1" src="@/assets/imgs/casona.jpg" alt="">
        <img class="img2" src="@/assets/imgs/1.jpg" alt="">
        <img class="img3" src="@/assets/imgs/casinha.jpg" alt="">
    </div>

    <div class="containerinfo">
        <div class="info">
            <div class="bairro">Glória | Joinville</div>
            <div class="rs">R$390.000,00</div>
            <div class="m2">50,90m²</div>
        </div>
        <div class="info2">
            <div class="bairro">Fátima | Joinville</div>
            <div class="rs">R$340.000,00</div>
            <div class="m2">68,88m²</div>
        </div>
        <div class="info3">
            <div class="bairro">América | Joinville</div>
            <div class="rs">R$320.000,00</div>
            <div class="m2">76,00m²</div>
        </div>        
    </div>
    <button class="botao" @click="$router.push({ name: 'buscar' })">VER MAIS ÍMOVEIS</button>
</template>

<style scoped>
.botao{
    margin-left: 44%;
    background-color: #02193c;
    color: #ffffff;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
}
.bairro {
    font-size: 30px;
    font-weight: bold;
    color: #f28a31;
}

.info {
    margin-left: -101%;
    margin-top: 215%;
    font-size: large;
    display: flex;
    flex-direction: column;
}

.info2 {
    font-size: large;
    display: flex;
    flex-direction: column;
    margin-top: 215%;
    margin-left: 20%;
}

.info3 {
    font-size: large;
    display: flex;
    flex-direction: column;
    margin-top: 215%;
    margin-left: 19%;
}

.containerinfo {
    display: flex;
    flex-direction: row;
    margin-left: 61%;
    margin-top: -100%;
    margin-bottom: 100px;
}

h1 {
    margin-bottom: 50px;
}

.cointainerdstq {
    display: flex;
    flex-direction: row;
    margin-left: 195px;
}

.img1 {
    margin-left: 200px;
    height: 300px;
    width: 300px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.img2 {
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.img3 {
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.titu {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
}

.destaques-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
    margin: auto
}

.item-destaque-link {
    margin-top: 25px;
    padding: 0 20px
}
</style>

