<template>
  <div>
    <Infobox :imgsrc="InfoImg" title="Stainless Steel 316L Square Pipe Inpeection Report" />
    <Quality/>
    <vue-pdf-embed :source="source1" />
  </div>
</template>

<script lang="ts">
import Infobox from '@/components/Infobox.vue'
import VuePdfEmbed from 'vue-pdf-embed'
import InfoImg from '@/assets/bg.jpeg'
import Quality from '../components/menu/Quality.vue'
import reportSrc from '@/assets/pdf/report.pdf'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    Infobox,
    VuePdfEmbed,
    Quality
},
  data() {
    return {
      InfoImg: InfoImg,
      source1: reportSrc
    }
  }
}
</script>