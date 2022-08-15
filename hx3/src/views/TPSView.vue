<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Plate/Sheet" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tps/1.jpg" width="100%"/>
      </div>
      <div class="right">
        <div class="title">Titanium Plate/Sheet</div>
        <div class="subtitle">Titanium plate/Sheet/ Coil/large Size Plate</div>
        <div class="desc">Advanced Metals Co., Ltd is the one who could manufacture who could supply super-width and
          extra length titanium and titanium alloy plate in China. The titanium sheet are available thickness
          0.5mm-4.75mm. and we
          offer a number of value added services, like saw cutting, shearing, and water jet or plasma cutting to
          providing the specific
          sizes and shapes our customers need. We have 4.75-60MM titanium plates and titanium alloy plates in stock.
          Size:
          1000*2000mm. We also have large quantity of Titanium coil with bright surface. We could cut the coil for you.
          If you need
          small size plate, we can cut plates for you in free. The plates size more than 1000*2000mm, you need to order
          them and then we produce for you.
          <br>At our warehouse, we have established a new system that focus on high-quality materials and a fast
          turnaround and delivery. We usually keep the most of size and standard of titanium plate and sheet in stock.
          We could ship to you within 12-24 hours after received your order confirmation.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium Plate & Sheet</div>
      <div class="subtitle">Material: Gr1, Gr2, Gr3, Gr4, Gr5, Gr7, Gr12, Gr23, AMS4911 Gr5</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition(max) ASTM B-265 (For Your Reference)</div>
      <!-- <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div> -->
      <HighTable :productdatas="composition" merge="spec" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property (For Reference)</div>
      <HighTable :productdatas="composition2" merge="spec"/>
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
          { field: 'info', title: 'Info' },
          { field: 'cold', title: 'Cold Rolling' },
          { field: 'hot', title: 'Hot Rolling' }
        ],
        moredata: [
          { id: 10001, info: 'Thickness', cold: '0.5mm-4.75mm', hot: '4.75mm - 60mm' },
          { id: 10002, info: 'Width', cold: '1500mm max', hot: '3000mm max' },
          { id: 10003, info: 'Length', cold: '3000mm max', hot: '6000mm max' },
          { id: 10004, info: 'Standard', cold: 'ASTM B-265', hot: 'ASME SB 265/AMS4911' }
        ]
      },
      composition: {
        config: [
          { field: 'spec', title: 'Specification' },
          { field: 'material', title: 'Material' },
          { field: 'cmax', title: 'C(max)' },
          { field: 'omax', title: 'O(max)' },
          { field: 'nmax', title: 'N(max)' },
          { field: 'hmax', title: 'H(max)' },
          { field: 'femax', title: 'Fe(max)' },
          { field: 'al', title: 'Al' },
          { field: 'v', title: 'V' },
          { field: 'pd', title: 'Pd' },
          { field: 'ni', title: 'Ni' },
          { field: 'mo', title: 'Mo' }
        ],
        moredata: [
          {
            id: 10001, spec: 'ASTM B-265', material: 'Gr1', cmax: '0.08', omax: '0.18',
            nmax: '0.03', hmax: '0.015', femax: '0.20', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10002, spec: 'ASTM B-265', material: 'Gr2', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10003, spec: 'ASTM B-265', material: 'Gr3', cmax: '0.08', omax: '0.35',
            nmax: '0.05', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10004, spec: 'ASTM B-265', material: 'Gr4', cmax: '0.08', omax: '0.40',
            nmax: '0.05', hmax: '0.015', femax: '0.50', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10005, spec: 'ASTM B-265', material: 'Gr5', cmax: '0.08', omax: '0.20',
            nmax: '0.05', hmax: '0.015', femax: '0.40', al: '5.5-6.75', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10006, spec: 'ASTM B-265', material: 'Gr7', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '0.12-0.25', ni: '', mo: ''
          },
          {
            id: 10007, spec: 'ASTM B-265', material: 'Gr12', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '0.6-0.9', mo: '0.2-0.4'
          },
          {
            id: 10008, spec: 'ASTM B-265', material: 'Gr23', cmax: '0.08', omax: '0.13',
            nmax: '0.03', hmax: '0.0125', femax: '0.25', al: '5.5-6.5', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10009, spec: 'AMS4911', material: 'Gr5', cmax: '0.08', omax: '0.20',
            nmax: '0.05', hmax: '0.015', femax: '0.30', al: '5.5-6.75', v: '3.5-4.5', pd: '', ni: '', mo: ''
          }
        ]
      },
      composition2: {
        config: [
          { field: 'spec', title: 'Specification' },
          { field: 'material', title: 'Material' },
          { field: 'tensile', title: 'Tensile Strength (min)\nMpa' },
          { field: 'yield', title: 'Yield Strength (min)\nMpa' },
          { field: 'elongation', title: 'Elongation %\n(min)' },
          { field: 'bend', title: 'Bend Test %\n(min)' }
        ],
        moredata: [
          {
            id: 10001, spec: 'ASTM B-265', material: 'Gr1', tensile: '240', yield: '138-310',
            elongation: '24', bend: '1.5T-2.5T'
          },
          {
            id: 10002, spec: 'ASTM B-265', material: 'Gr2', tensile: '345', yield: '275-450',
            elongation: '20', bend: '2T-2.5T'
          },
          {
            id: 10003, spec: 'ASTM B-265', material: 'Gr3', tensile: '450', yield: '380-550',
            elongation: '18', bend: '2T-2.5T'
          },
          {
            id: 10004, spec: 'ASTM B-265', material: 'Gr4', tensile: '550', yield: '483-655',
            elongation: '15', bend: '2.5T-3T'
          },
           {
            id: 10005, spec: 'ASTM B-265', material: 'Gr5', tensile: '895', yield: '828',
            elongation: '10', bend: '4.5T-5T'
          },
          {
            id: 10006, spec: 'ASTM B-265', material: 'Gr7', tensile: '345', yield: '275-450',
            elongation: '20', bend: '2T-2.5T'
          },
          {
            id: 10007, spec: 'ASTM B-265', material: 'Gr12', tensile: '483', yield: '345',
            elongation: '18', bend: '2T-2.5T'
          },
          {
            id: 10008, spec: 'ASTM B-265', material: 'Gr23', tensile: '828', yield: '759',
            elongation: '10', bend: '4.5T-5T'
          },
          {
            id: 10009, spec: 'ASTM 4911', material: 'Gr5', tensile: '920', yield: '866',
            elongation: '6-10', bend: '20'
          },
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
