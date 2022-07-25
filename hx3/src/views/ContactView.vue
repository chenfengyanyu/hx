<script lang="ts">
import { defineComponent } from 'vue'
import Infobox from '@/components/Infobox.vue'
import InfoImg from '@/assets/bg.jpeg'
import QualityVue from '@/components/menu/Quality.vue';
import BasicTable from '@/components/product/BasicTable.vue'

export default defineComponent({
  components: {
    Infobox,
    QualityVue,
    BasicTable
  },
  data() {
    return {
      InfoImg: InfoImg,
      contactInfo: {
        config: [
          { field: 'shape', title: 'Stainless Steel Bar Shape' },
          { field: 'type', title: 'Stainless Steel Bar Grade/Type' },
          { field: 'size', title: 'Stainless Steel Bar Sizes' }
        ],
        moredata: [
          { id: 10001, shape: 'Stainless Steel Flat Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A, Edge Conditioned, True Mill Edge', size: 'Thickness: 3.175mm - 50.8mm\nWidths: 12.7mm - 203.2mm' },
          { id: 10002, shape: 'Stainless Steel Half Round Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A', size: 'Diameter: 4.76mm - 19.3mm' },
          { id: 10003, shape: 'Stainless Steel Hexagon Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A', size: 'Diameter: 9.6mm - 76mm' },
          { id: 10004, shape: 'Stainless Steel Round Bar', type: 'Grades: 303, 304/304L, 316/316L, 410, 416, 440C, 13-8 , 15-5 , 17-4 (630), 17-4 H1150, 2205\nType: Accuracy, Annealed, BSQ, Coiled, Cold Finished, Cond A, Hot Rolled, Rough Turned, TGP, PSQ, Forged', size: 'Diameter: 3.175mm-304.8mm' },
          { id: 10005, shape: 'Stainless Steel Square Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A', size: 'Diameter: 3.175mm - 76.2mm' },
          { id: 10006, shape: 'Stainless Steel Angle Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A', size: 'Thickness :2mm-16mm\nWidth: 15mm-94mm' }
        ]
      }
    }
  }
})

</script>

<template>
  <main>
    <Infobox :imgsrc=InfoImg title="Contact"/>
    <QualityVue />
    <div class="mytable">
      <div class="title">Contact Us</div>
      <!-- <div class="subtitle">Long Products, Annealed</div> -->
      <BasicTable :productdatas="contactInfo" />
    </div>
  </main>
</template>

<style scoped>
.mytable {
  margin: -1.5rem 1.5rem 1.5rem;
}

.mytable .title {
  font-size: 1.5rem;
  padding: 1rem 0 0;
  /* border-bottom: 1px dashed #86909c4a; */
}

.mytable .subtitle {
  color: #4a4a4a91;
  margin: 0 0 0.4rem;
}
</style>
