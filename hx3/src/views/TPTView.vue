<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Pipe & Tube" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tpt/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Titanium Pipe & Tube ( Seamless & Welded )</div>
        <!-- <div class="subtitle">Titanium plate/Sheet/ Coil/large Size Plate</div> -->
        <div class="desc">We produce and supply both titanium seamless and welded tube/pipe according to the standard of
          ASTM B-338/SB338, ASTM B-862/861. All of our tube and pipe must pass the Flattening test, Tension testing, and
          flaring testing, surface testing, Chemical testing, mechanical properties. We control every step to make sure
          the quality is good. We try our best to avoid all the problem risks for our customers. We welcome all the
          third party inspection our products.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium Seamless/Welded Tube/Pipe</div>
      <HighTable :productdatas="availableProducts" merge="standard" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition (max) (For Your Reference)</div>
      <!-- <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div> -->
      <HighTable :productdatas="composition" merge="spec" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property (For Reference)</div>
      <HighTable :productdatas="composition2" merge="spec" />
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

import ssrb1 from '@/assets/product/tpt/1.jpg'
import ssrb2 from '@/assets/product/tpt/2.jpeg'
import ssrb3 from '@/assets/product/tpt/3.jpg'
import ssrb4 from '@/assets/product/tpt/4.jpg'
import ssrb5 from '@/assets/product/tpt/5.jpg'
import ssrb6 from '@/assets/product/tpt/6.jpeg'
import ssrb7 from '@/assets/product/tpt/7.jpeg'
import ssrb8 from '@/assets/product/tpt/8.jpeg'
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
          { field: 'products', title: 'Products' },
          { field: 'od', title: 'OD (mm)' },
          { field: 'wall', title: 'Wall (mm)' },
          { field: 'length', title: 'Length (mm)' },
          { field: 'grade', title: 'Grade' },
          { field: 'standard', title: 'Standard' }
        ],
        moredata: [
          {
            id: 10001, products: 'Heat Exchanger & Condenser Tube', od: '5-114', wall: '0.3-10',
            length: '≤ 18000', grade: 'Gr1\nGr2\nGr3', standard: 'ASTM B338\nASME SB338\nASTM B861\nASTM B862\nAMS4942\nAMS4945\nAMS4943'
          },
          {
            id: 10002, products: 'Pressure & Corrosion Resistant Tubes', od: '6-114', wall: '0.5-10',
            length: '≤ 18000', grade: 'Gr9\nGr5', standard: 'ASTM B338\nASME SB338\nASTM B861\nASTM B862\nAMS4942\nAMS4945\nAMS4943'
          },
          {
            id: 10003, products: 'Corrosion Resistant Tube', od: '5-114', wall: '0.5-4.5',
            length: '≤ 18000', grade: 'Gr7\nGr12\nGr16\nGr23', standard: 'ASTM B338\nASME SB338\nASTM B861\nASTM B862\nAMS4942\nAMS4945\nAMS4943'
          },
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
            id: 10001, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr1', cmax: '0.08', omax: '0.18',
            nmax: '0.03', hmax: '0.015', femax: '0.20', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10002, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr2', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10003, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr3', cmax: '0.08', omax: '0.35',
            nmax: '0.05', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10005, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr5', cmax: '0.08', omax: '0.20',
            nmax: '0.05', hmax: '0.015', femax: '0.40', al: '5.5-6.75', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10007, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr7', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '0.12-0.25', ni: '', mo: ''
          },
          {
            id: 10012, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr12', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '0.6-0.9', mo: '0.2-0.4'
          }
        ]
      },
      composition2: {
        config: [
          { field: 'spec', title: 'Specification' },
          { field: 'material', title: 'Material' },
          { field: 'tensile', title: 'Tensile Strength (min)\nMpa' },
          { field: 'yield', title: 'Yield Strength (min)\nMpa' },
          { field: 'elongation', title: 'Elongation %\n(min)' }
        ],
        moredata: [
          {
            id: 10001, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr1', tensile: '240', yield: '138-310',
            elongation: '24'
          },
          {
            id: 10002, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr2', tensile: '345', yield: '275-450',
            elongation: '20'
          },
          {
            id: 10003, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr3', tensile: '450', yield: '380-550',
            elongation: '18'
          },
          {
            id: 10005, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr5', tensile: '895', yield: '828',
            elongation: '10'
          },
          {
            id: 10007, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr7', tensile: '345', yield: '275-450',
            elongation: '20'
          },
          {
            id: 10012, spec: 'ASTM B338\nASTM SB338\nASTM B861\nASTM B862', material: 'Gr12', tensile: '483', yield: '345',
            elongation: '18'
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
