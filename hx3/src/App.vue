<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>

<style>
@import '@/assets/base.css';

#app {
  min-width: 1024px;
  max-width: 1800px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
}

.videobox {
  /* max-height: 400px; */
  height: 40rem;
}

.videobox h1 {
  color: white;
  font-size: 5rem;
  text-align: center;
  height: 40rem;
  line-height: 40rem;
  background: linear-gradient(rgb(0 0 0 / 24%), #1e88e5);
}
</style>
