<script setup>
import { RouterView } from 'vue-router'
import TopHeader from '@/components/TopHeader.vue'
import MainHeader from '@/components/MainHeader.vue'
import CimaFooter from '@/components/CimaFooter.vue'
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <header>
    <top-header />
    <main-header />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <cima-footer/>
   <main-footer />
  </footer>
</template>

<style scoped>

</style>
