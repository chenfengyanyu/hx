<template>
  <div>
    <Infobox :imgsrc="InfoImg" title="Stainless Steel 316L Square Pipe Inpeection Report" />
    <vue-pdf-embed :source="source1" />
  </div>
</template>

<script lang="ts">
import Infobox from '@/components/Infobox.vue'
import VuePdfEmbed from 'vue-pdf-embed'
import InfoImg from '@/assets/bg.jpeg'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    Infobox,
    VuePdfEmbed
  },
  data() {
    return {
      InfoImg: InfoImg,
      source1: '../src/assets/pdf/report.pdf'
    }
  }
}
</script>