<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Container from '@/components/Container.vue'
import Banner from '@/components/Banner.vue'

</script>

<template>
  <Header />
  <Banner />
  <Container>
    <RouterView />
  </Container>
  <Footer />
</template>

<style>
@import '@/assets/base.css';

#app {
  min-width: 1024px;
  max-width: 1700px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
}
</style>
