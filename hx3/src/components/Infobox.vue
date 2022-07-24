<template>
    <div class="about">
    <img :src=imgsrc width="100%">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import imgsrc from '../assets/bg.jpeg'

export default defineComponent ({
    name: 'InfoboxComponent',
    data() {
        console.log(this.$props.imgsrc);
        return {
           defaultImg: imgsrc
        }
    },
    props:['imgsrc']
})

</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
  .about img{
    width: 100%;
  }
}
</style>
