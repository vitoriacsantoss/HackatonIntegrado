<script setup>
import MButton from '@/components/MButton.vue'

</script>
<template>
    <div class="titu">
        <h1>DESTAQUES:</h1>
   </div>
   <div class="destaques-links">
       <div class="item-destaque-link">
        <m-button texto="Terreno" @click="$router.push({ name: 'terreno' })" />
       </div>
       <div class="item-destaque-link">
        <m-button texto="Apartamento" @click="$router.push({ name: 'apartamento' })" />
        
       </div>
       <div class="item-destaque-link">
        <m-button texto="Casa" @click="$router.push({ name: 'casa' })" />
        
       </div>
   </div>
</template>

<style scoped>

 .titu{
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