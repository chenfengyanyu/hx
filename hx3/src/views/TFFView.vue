<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Fitting & Flange" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tff/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Titanium Fitting & Flange</div>
        <!-- <div class="subtitle">Titanium Ring/ Disc/Other products as your drawing</div> -->
        <div class="desc">AMC ( Advanced Metals Co., Ltd) Manufactured in titanium Gr1, Gr2, Gr4, Gr5, Gr7, Gr12 fitting
          and Flange. Our flanges and include: threaded, slip-on, reducing, blind, weld neck, socket weld and lap joint.
          Our Fitting include: Titanium Elbow, Reducer, Tee, stub ends, Caps, Couplings and Plugs. We have nearly 20
          years experiences in manufactured all kinds of titanium fitting and Flange. We have large quantity of products
          in stocked. If we do not have the stocked the products you need. We could produce for you very quickly. We
          accept all the Third Party inspection our quality.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium Pipe Fitting</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Standard Specification For Titanium ASTM B381 Industrial Flanges</div>
      <BasicTable :productdatas="availableProducts2" />
    </div>
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
    HighTable
  },
  data() {
    return {
      InfoImg: InfoImg,
      availableProducts: {
        config: [
          { field: 'standard', title: 'Standard' },
          { field: 'grade', title: 'Grade' },
          { field: 'products', title: 'Products' }
        ],
        moredata: [
          {
            id: 10001, standard: 'ASME B16.9\nASME B16.11', grade: 'Gr1\nGr2\nGr7\nGr12',
            products: 'Titanium Elbow ( 45°,90°,180°)\nTitanium Reducer ( Concentric, Eccentric)\nTitanium Tee (Straight, Reducing)\nTitanium Stub ends, Caps, Couplings, Plugs\nTitanium Weld Neck (WN), Long Weld Neck (LWN)\nOther Flange'
          }
        ]
      },
      availableProducts2: {
        config: [
          { field: 'type', title: 'Type' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          {
            id: 10001, type: 'Specifications', info: 'ASTM B381 / ASME SB381'
          },
          {
            id: 10002, type: 'Grades', info: 'Gr1, Gr2, Gr4, Gr5, Gr7, Gr12'
          },
          {
            id: 10003, type: 'Dimensions', info: 'ANSI/ASME B16.5, B 16.47 Series A & B, B16.48, BS4504, BS 10, EN-1092, DIN'
          },
          {
            id: 10004, type: 'Standard ', info: 'ANSI Flanges, ASME Flanges, BS Flanges, DIN Flanges, EN Flanges'
          },
          {
            id: 10005, type: 'Size', info: '1 / 2” to 18"'
          },
          {
            id: 10006, type: 'Class / Pressure', info: '150#, 300#, 600#, 900#, 1500#, 2500#, PN6, PN10, PN16, PN25, PN40, PN64'
          },
          {
            id: 10007, type: 'Flange Face Type', info: 'Flat Face (FF), Raised Face (RF), Ring Type Joint (RTJ)'
          }
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
