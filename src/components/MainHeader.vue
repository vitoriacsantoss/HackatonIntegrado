<script setup>
import MButton from '@/components/MButton.vue'
</script>
<template>
    <div class="main-header">
        <div class="nav">
            LOGO
        </div>
           <li class="nav">
            <m-button texto="Home" @click="$router.push({ name: 'home' })" />
           </li>  
           <li class="nav">
            <m-button texto="Buscar Imoveís" @click="$router.push({ name: 'buscar' })" />
           </li>  
           <li class="nav">
            <m-button texto="A Empresa" @click="$router.push({ name: 'empresa' })" />
           </li>  
           <li class="nav">
            <m-button texto="Anuncie seu imóvel aqui" @click="$router.push({ name: 'terreno' })" />
           </li>  
           <li class="nav">
            <m-button texto="Terreno" @click="$router.push({ name: 'terreno' })" />
           </li>  


    </div>
</template>

<style scoped>
.main-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    margin: auto
    }
    .nav{
    margin-top: 20px;
    padding: 20px 35px 20px 35px
    }
</style>