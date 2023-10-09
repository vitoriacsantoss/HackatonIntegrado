<script setup>
import MButton from '@/components/MButton.vue'
</script>
<template>
    <div class="main-header">
        <img class="logo" src="@/assets/imgs/logobranca.jpeg" alt="">
        
        <div class="wrapLinks">
            <div class="displayFlex">
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

        </div>

    </div>
</template>

<style scoped>
.logo {
    margin-bottom: 1%;
    margin-top: 1%;
    margin-left: 42%;
    height: 145px;
    width: 135px;
    border-radius: 50%;
}

.main-header {
    display: grid;
    grid-template-columns: 32% auto;
    width: 100%;
    /* margin: auto */
    }
    .displayFlex{
        display: flex;

    }
    .nav{
        /* margin-left: 10%; */
    margin-top: 20px;
    padding: 15px 35px 20px 35px
    }
</style>