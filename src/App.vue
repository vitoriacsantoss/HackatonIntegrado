<script setup>
import { RouterView } from 'vue-router'
import TopHeader from '@/components/TopHeader.vue'
import MainHeader from '@/components/MainHeader.vue'
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
    <top-header />
  <main-header />
  </footer>
</template>

<style scoped>

</style>
