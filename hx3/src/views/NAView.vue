<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Nickel Based Alloy" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/na/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Nickel Based Alloy</div>
        <div class="subtitle">Nickel Based Alloy Plate/Sheet/Bar/Forgings/Tube</div>
        <div class="desc">Nickel will alloy readily with many other metals, including chromium, iron, molybdenum
          ,Titanium and copper. This allows for a wide variety of alloys that demonstrate outstanding resistance to
          corrosion and high-temperature scaling, exceptional high-temperature strength and other unique properties,
          such as shape memory and low coefficient of expansion.
          In addition to a majority nickel content, these materials and may contain significant amounts of chromium and
          molybdenum. Nickel-based metals were developed to provide greater strength at high temperatures, and greater
          corrosion resistance than could be obtained from iron and steel. They are significantly more expensive than
          ferrous metals; but because of their long life, nickel alloys may be the most cost-effective long term
          material selection.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Products and Standard</div>
      <BasicTable :productdatas="availableProducts" />
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
          { field: 'type', title: 'Type' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          {
            id: 10001, type: 'Standard', info: 'AWS A5.9 A5.9M-2017, ASME SFA 5.9'
          },
          {
            id: 10002, type: 'Grade', info: 'SS ER308H, SS ER308L, SS ER308LSi, SS ER308LMo,SS ER309L SS ER310,  SS ER312,SS ER316L,  SS ER316LSi, SS ER347, SS ER2209, SS ER2594'
          },
          {
            id: 10003, type: 'Soft Wire Diameter Range', info: '0.6mm-2.3mm'
          },
          {
            id: 10004, type: 'Hard Wire Diameter Range', info: '0.3mm-3.0mm'
          },
          {
            id: 10005, type: 'Diameter', info: '.035”, .045”, 1/16”, 3/32”, 1/8”, 5/32”'
          },
          {
            id: 10006, type: 'Length', info: '36" (914mm) Customized'
          },
          {
            id: 10007, type: 'Form', info: 'TIG Wire, MIG Wire'
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
