<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Forging" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tf/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Titanium Forging</div>
        <!-- <div class="subtitle">Titanium Ring/ Disc/Other products as your drawing</div> -->
        <div class="desc">Titanium forged products is our key products. We forged large quantity of titanium products
          for our customers all over the world.We know titanium over 20 years, we are professional in titanium forging.
          we're committed to supplying our clients with high quality titanium forged products. We are capable of
          producing custom forged titanium from individual parts to large scale production orders in various shapes and
          alloys. From rolled rings and disc, to weight-saving die forged parts, AMC (Advanced Metals Co., Ltd) is able
          to service your titanium forging needs.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium Forged Products</div>
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
import ImageBox from '@/components/ImageBox.vue'

import ssrb1 from '@/assets/product/tf/1.jpg'
import ssrb2 from '@/assets/product/tf/2.jpeg'
import ssrb3 from '@/assets/product/tf/3.jpg'
import ssrb4 from '@/assets/product/tf/4.jpeg'
import ssrb5 from '@/assets/product/tf/5.jpeg'
import ssrb6 from '@/assets/product/tf/6.jpeg'
import ssrb7 from '@/assets/product/tf/7.jpeg'
import ssrb8 from '@/assets/product/tf/8.jpeg'
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
          { field: 'type', title: 'Type' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          {
            id: 10001, type: 'Specification', info: 'ASTM B381, ASTM F67, ASTM F136, ASTM B-348, AMS491'
          },
          {
            id: 10002, type: 'Material', info: 'CP-GRADES 1,2,3,4,7,12\nAlloy-Ti6AL4V; 6AL4VELI; Ti-6242'
          },
          {
            id: 10003, type: 'Discs', info: 'Max Diameter: 3000mm\nMin Thickness: 5mm'
          },
          {
            id: 10004, type: 'Rings', info: 'OD: 100-1400mm\nID: 60-1300mm'
          },
          {
            id: 10005, type: 'Flat Bar/Blocks', info: '600mm (max)'
          },
          {
            id: 10006, type: 'Other Products', info: 'As drawing or request'
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
