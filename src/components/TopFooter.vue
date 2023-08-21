<script setup>
</script>

<template>
    <div class="footer-cima">
        <div>
            <img class="logo" src="logo2.png" alt="">
        </div>
        <div>
            <p class="item">QUERENDO REALIZAR SEU SONHO?</p>
        </div>
        <div class="botao">
            <button @click="$router.push({ name: 'contato' })">ENTRAR EM CONTATO</button>
        </div>
    </div>
</template>

<style scoped>
button {
    background-color: #f28a31;
    color: #ffffff;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
}

button:hover {
    background-color: #ffffff;
    color: black;
}

.item {
    font-size: 30px;
    color: #ffffff;
    font-family: "Open Sans" sans-serif;
    font-weight: 200;

}

.logo {
    margin-top: 15%;
    height: 100px;
    width: 120px;
}

.footer-cima {
    margin-top: 50px;
    padding: 10px 10px 50px 100px;
    background-color: #f28a31;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>