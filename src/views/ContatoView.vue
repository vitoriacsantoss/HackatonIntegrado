<script setup>

</script>
<template>
    <div class="banner">
        <div class="inner-text"> 
            <h1 class="titu">CONTATO</h1>
        </div>
    </div>
    <div class="titu2">
        <h1 class="CO">
            CONTATO
        </h1>
        <h3>Escolha um dos canais para que possamos responder o mais rápido possível.</h3>
    </div>
    <div class="info">
        <h3 class="titu3">Informações de contato </h3>
    <div>
     <img class="img1" src="loc.png" alt="">
      Av Do Principe, 1186, Itapema do Norte - Itapoá /SC
    </div>
    <div>
    <img class= "img1" src="caixa.png" alt="">
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
</template>

<style scoped>


.titu3{
    padding:  0 0 0 80px;
    
}

.info{
    margin-top: 50px;
    display: flex;
    flex-direction:column;
    font-size: 20px;
    padding: 0 0 0 70px;
    list-style: none;
    padding-left: 40px;
    position: relative;
    margin-bottom: 20px;
    line-height: 22px;
    color: #535353;
}
.img1{
    height: 38px;
    width: 45px;
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

.titu{
    color: white;
}
.titu2{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.CO{
    font-size: 25px;
    margin-top: 30px;
    color: #37404D;
}
</style>