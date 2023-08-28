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
        <option value="Apartamento">Apê</option>
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
      <div class="lado">
      <p>Quartos</p>
        <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>
      <p>Suítes</p>
      <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>
      <p>Banheiros</p>
      <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>
      <p>Garagem</p>
      <select class="caixinha" v-on:keypress="ok = false" v-model="estado">
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>
    </div>
    </div>


    <div class="containerimg">
    <div class="oi">
        <img class="img1" src="APT.jpg" alt="">
    </div>
    <div>
        <img class="img2" src="1.png" alt="">
    </div>
    <div>
        <img class="img3" src="APT2.jpg" alt="">
    </div>
    </div>




    <div class="containerinfo">
        <div class="info">
            <div class="bairro">Floresta | Joinville</div>
            <div class="rs">R$390.000,00</div>
            <div class="m2">50,90m²</div>
        </div>
        <div class="info1">
            <div class="bairro">Bucarein | Joinville</div>
            <div class="rs">R$340.000,00</div>
            <div class="m2">68,88m²</div>
        </div>
        <div class="info2">
            <div class="bairro">Profipo | Joinville</div>
            <div class="rs">R$320.000,00</div>
            <div class="m2">76,00m²</div>
        </div>
    </div>
</div>


    <div class="containerimg2">
    <div class="oii">
        <img class="img4" src="APT.jpg" alt="">
    </div>
    <div>
        <img class="img5" src="1.png" alt="">
    </div>
    <div>
        <img class="img6" src="APT2.jpg" alt="">
    </div>
    </div>


    <div class="containerinfo2">
        <div class="info3">
            <div class="bairro">Floresta | Joinville</div>
            <div class="rs">R$390.000,00</div>
            <div class="m2">50,90m²</div>
        </div>
        <div class="info4">
            <div class="bairro">Bucarein | Joinville</div>
            <div class="rs">R$340.000,00</div>
            <div class="m2">68,88m²</div>
        </div>
        <div class="info5">
            <div class="bairro">Profipo | Joinville</div>
            <div class="rs">R$320.000,00</div>
            <div class="m2">76,00m²</div>
        </div>
    </div>




</template>


<style scoped>
.info3{
    margin-top: 60%;
    margin-left: 10%;
    font-size: large;
}
.info4{
    margin-top: 45%;
    margin-left: 10%;
    font-size: large;
    margin-bottom: 20% ;
}
.info5{
    margin-top: 15%;
    margin-left: 10%;
    font-size: large;
    margin-bottom: 30%;
}
.img4{
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: 05px;
}
.img5{
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: -110px;
}
.img6{
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: -150px;
}


.containerinfo2{
    display: flex;
    flex-direction: column;
    margin-left: 61%;
    margin-top: -100%;
}
.containerimg2{
    margin-left: 38%;
    display: flex;
    flex-direction: column;
}
.rs{
    margin-top: 2px;
    margin-bottom: 8px;
}
.bairro{
    font-size: 40px;
    font-weight: bold;
    color:#f28a31;
}
.info{
    margin-top: 20%;
    margin-left: 10%;
    font-size: large;
}
.info1{
    margin-top: 60%;
    margin-left: 10%;
    font-size: large;
}
.info2{
    margin-top: 60%;
    margin-left: 10%;
    font-size: large;
}
.containerinfo{
    display: flex;
    flex-direction: column;
}
.containerimg{
    display: flex;
    flex-direction: column;
}
.img1{
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
    margin-top: 50px;
}
.img2{
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
}
.img3{
    height: 300px;
    width: 300px;
    margin-bottom: 20%;
    margin-left: 70px;
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
    padding: 5px 130px;
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
    margin-left: 200px;
    margin-top: 50px;
    padding: 20px;
    height: 20%;
    width: 25%;
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
