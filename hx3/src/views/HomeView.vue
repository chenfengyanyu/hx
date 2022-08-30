<script  lang="ts">
  import { defineComponent } from 'vue'
import TheContainer from '@/components/Container.vue'
import Banner from '@/components/Banner.vue'
import videoSrc from '@/assets/show2.mp4'
export default defineComponent({
  components: {
    TheContainer,
    Banner
  },
  data() {
    return {
      videoSrc: videoSrc,
    }
  }
})
</script>

<template>
  <main>
    <Banner />
    <TheContainer />
    <video-background :src=videoSrc class="videobox">
      <h1>Integrity · Profession · Efficiency</h1>
    </video-background>
  </main>
</template>
