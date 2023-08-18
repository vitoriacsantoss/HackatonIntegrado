<script setup>
import { RouterView } from 'vue-router'
import TopHeader from '@/components/TopHeader.vue'
import MainHeader from '@/components/MainHeader.vue'
import TopFooter from '@/components/TopFooter.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div class="tudo">
  <header>
    <top-header />
    <main-header />
  </header>
  <main>
    <router-view />    
  </main>
  <footer>
    <top-footer />
    <main-footer />
  </footer>
</div>
</template>

<style scoped>
  .tudo{
    font-family: "Open Sans" sans-serif;
   
  }
</style>

