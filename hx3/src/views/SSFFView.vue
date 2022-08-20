<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Stainless Steel Flange and Fitting" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ssff/1.png" width="100%" />
      </div>
      <div class="right">
        <div class="title">Stainless Steel Flange and Fitting</div>
        <!-- <div class="subtitle">Stainless Steel Round Bar/ Flat Bar/ Hexagon Bar/Square Bar/ Angle Bar</div> -->
        <div class="desc">Stainless Steel Flanged Pipe Fittings Are Often Used In Rigid Piping Conditions Such As Waste
          Water Treatment Or Filtration And Industrial Fluid Process Applications, We supply High Quality Forged
          Flanges, Seamless Fittings, & Specialty Forged Products. Expedited Service. ISO Certified Worldwide
          Provider Custom Solutions.We accept any Thirdy Party to inspection the quality.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Stainless Forged Flanges</div>
      <MergeTable :productdatas="composition5" />
    </div>
    <!-- <div class="mytable">
      <div class="title">Chemical Composition</div>
      <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div>
      <BasicTable :productdatas="diameterProducts" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Properties (Long Products, Annealed)</div>
      <BasicTable :productdatas="composition" />
    </div> -->
    <div class="mytable">
      <div class="title">Related Products</div>
      <!-- <div class="subtitle">Long Products, Annealed</div> -->
      <ImageBox :lists="productList" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Infobox from '@/components/Infobox.vue'
import InfoImg from '@/assets/bg.jpeg'
import BasicTable from '@/components/product/BasicTable.vue'
import MergeTable from '@/components/product/MergeTable.vue'
import ImageBox from '@/components/ImageBox.vue'

import ssrb1 from '@/assets/product/stainless-steel-round-bar/1.webp'
import ssrb2 from '@/assets/product/stainless-steel-round-bar/2.webp'
import ssrb3 from '@/assets/product/stainless-steel-round-bar/3.webp'
import ssrb4 from '@/assets/product/stainless-steel-round-bar/4.webp'
import ssrb5 from '@/assets/product/stainless-steel-round-bar/5.jpeg'
import ssrb6 from '@/assets/product/stainless-steel-round-bar/6.jpeg'
import ssrb7 from '@/assets/product/stainless-steel-round-bar/7.jpeg'
import ssrb8 from '@/assets/product/stainless-steel-round-bar/8.webp'
import HighTable from '../components/product/HighTable.vue'

export default defineComponent({
  components: {
    Infobox,
    BasicTable,
    ImageBox,
    HighTable,
    MergeTable
  },
  data() {
    return {
      InfoImg: InfoImg,
      availableProducts: {
        config: [
          { field: 'shape', title: 'Stainless Steel Bar Shape' },
          { field: 'type', title: 'Stainless Steel Bar Grade/Type' },
          { field: 'size', title: 'Stainless Steel Bar Sizes' }
        ],
        moredata: [
          {
            id: 10001, shape: 'Stainless Steel Flat Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A\nEdge Conditioned, True Mill Edge',
            size: 'Thickness: 3.175mm - 50.8mm\nWidths: 12.7mm - 203.2mm'
          },
          {
            id: 10002, shape: 'Stainless Steel Half Round Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Diameter: 4.76mm - 19.3mm'
          },
          {
            id: 10003, shape: 'Stainless Steel Hexagon Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Diameter: 9.6mm - 76mm'
          },
          {
            id: 10004, shape: 'Stainless Steel Round Bar', type: 'Grades: 303, 304/304L, 316/316L, 410, 416, 440C, 13-8, 15-5 , 17-4 (630), 17-4 H1150, 2205\nType: Accuracy, Annealed, BSQ, Coiled, Cold Finished, Cond A, Hot Rolled, Rough Turned, TGP, PSQ, Forged',
            size: 'Diameter: 3.175mm-304.8mm'
          },
          {
            id: 10005, shape: 'Stainless Steel Square Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Diameter: 3.175mm - 76.2mm'
          },
          {
            id: 10006, shape: 'Stainless Steel Angle Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Thickness :2mm-16mm\nWidth: 15mm-94mm'
          }
        ]
      },
      composition5: {
        align: 'left',
        config: [
          { field: 'standard', title: 'Standards' },
          { field: 'info1', title: 'Info' },
          { field: 'info2', title: 'Info' },
         
        ],
        moredata: [
          {
            id: 10001, standard: 'Standards', info1: 'ASME B16.5, ASME B16.47, API 6A, EN 1092-1, BS 4504, BS 10, DIN, JIS, GOST.', info2:''
          },
          {
            id: 10002, standard: 'Materials', info1: 'Stainless Steel', info2:'A182 F1, F5, F9, F11, F22, F91\nA105, A350 LF1/LF2/LF3, A694 F42/46/52/56/60/65/70\nA182 F304/304L, F316/316L, F321, F321H, F317L, F310, F347'
          },
          {
            id: 10003, standard: 'Materials', info1: 'Duplex and Super Duplex', info2:'ASTM/ASME A/SA 182 F44, F45, F51, F53, F55, F60, F61\nS31803, S32205, S32550, S31254, SMO254, S32750, S32760, S32950'
          },
          {
            id: 10004, standard: 'Sizes', info1: 'NPS 1/2 ~ NPS 120 (DN 15 ~ DN 3000)', info2:''
          },
          {
            id: 10005, standard: 'Types', info1: 'weld neck, slip on, blind, socket weld, threaded, lap joint, spectacle,\npaddle, long weld neck, spacer, orifice, reduced, plate.', info2:''
          },
          {
            id: 10006, standard: 'Pressure Ratings', info1: 'Class 150, 300, 400, 600, 900, 1500, 2500', info2:''
          },
        ],
        mergeRule: [
          { row: 0, col: 2, rowspan: 0, colspan: 2 },
          { row: 1, col: 1, rowspan: 2, colspan: 0 },
          { row: 3, col: 2, rowspan: 0, colspan: 2 },
          { row: 4, col: 2, rowspan: 0, colspan: 2 },
          { row: 5, col: 2, rowspan: 0, colspan: 2 }
        ]
      },
      productList: [ssrb1, ssrb2, ssrb3, ssrb4, ssrb5, ssrb6, ssrb7, ssrb8]
    }
  }
})

</script>

<style scoped>
.show {
  margin: 3rem 1.5rem;
  display: flex;
}

.show .left {
  flex: 1.5;
  margin-right: 1.5rem;
  overflow: hidden;
  padding: 0;
  min-width: 35rem;
}

.left img {
  border-radius: 0.5rem;
}

.show .right {
  flex: 2;
  text-align: justify;
}

.right .title {
  font-size: 2rem;
  color: #1e88e5;
}

.right .subtitle {
  font-size: 1.2rem;
  color: #4a4a4a91;
}

.right .desc {
  font-size: 1.2rem;
  color: #000000c9;
  margin-top: 1rem;
}

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
