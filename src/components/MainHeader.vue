<script setup>
import MButton from '@/components/MButton.vue'
</script>
<template>
    <div class="main-header">
           <li class="nav">
            <m-button texto="Home" @click="$router.push({ name: 'home' })" />
           </li>  
           <li class="nav">
            <m-button texto="Buscar Imoveís" @click="$router.push({ name: 'buscar' })" />
           </li>    
           <li class="nav">
            <m-button texto="Fale conosco" @click="$router.push({ name: 'contato' })" />
           </li>  

    </div>
</template>

<style scoped>
.logo {
    height: 100px;
    width: 120px;
}

.main-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    /* margin: auto */
    }
    .nav{
    margin-top: 20px;
    padding: 20px 35px 20px 35px
    }
</style>