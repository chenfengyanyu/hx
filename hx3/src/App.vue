<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Container from '@/components/Container.vue'
</script>

<template>
  <Header />
  <Container>
    <RouterView />
  </Container>
  <Footer />
</template>

<style>
@import '@/assets/base.css';

#app {
  height: 100vh;
  position: relative;
}
</style>
