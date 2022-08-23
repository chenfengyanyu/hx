<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Tantalum" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ta/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Tantalum</div>
        <div class="subtitle">Tantalum Wire/Bar/Sheet/Plate/Tube/Target</div>
        <div class="desc">Tantalum is a gray and heavy metal.UNS R05200 is unalloyed tantalum and proudced by vacuum
          electron beam melting technology. UNS R05400 is unalloyed tantalum and produced by powder-metallurgy
          technology.Pure tantalum is ductile and can be drawn in to fine wire.The purity can reach to 99.95% for pure
          tantalum.Pure tatanlum rod has excellent corrosion and heat resistance,so It is often used to
          instrument,temperature controller etc.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Tantalum Products (Pure 99.95%-99.99%)</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition (For Reference)</div>
      <BasicTable :productdatas="availableProducts2" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property (For Reference)</div>
      <div class="subtitle">Bar ,Wire ,Tube the Diameter 0.125” (3.18mm)~2.5" (63.5mm)</div>
      <BasicTable :productdatas="availableProducts3" />
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
import MergeTable1 from '../components/product/MergeTable1.vue'

export default defineComponent({
  components: {
    Infobox,
    BasicTable,
    ImageBox,
    HighTable,
    MergeTable,
    MergeTable1
  },
  data() {
    return {
      InfoImg: InfoImg,
      availableProducts: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'standard', title: 'Standard' },
          { field: 'material', title: 'Material' },
          { field: 'size', title: 'Size' }
        ],
        moredata: [
          {
            id: 10001, products: 'Tantalum Wire', standard: 'ASTM B365-98',
            material: 'RO5200\nRO5252(Ta-2.5W)\nRO5255 (Ta-10W)', size: 'Φ0.3mm-Φ100mm X L'
          },
          {
            id: 10002, products: 'Tantalum Bar', standard: 'ASTM B365-98',
            material: 'RO5200\nRO5252(Ta-2.5W)\nRO5255 (Ta-10W)', size: 'Φ3mm -Φ100mm'
          },
          {
            id: 10003, products: 'Tantalum Sheet\nTantalum Plate\nTantalum Foil', standard: 'ASTM B 708',
            material: 'RO5200, RO5400\nRO5252(Ta-2.5W)\nRO5255 (Ta-10W)', size: 'THK:0.1-0.5mm x W 30-60mm x L:30-2000mm\nTHK:0.5-0.10mm x W 50-1000mm x L:50-2000mm\nTHK:0.03-0.09mm x W 30-150mm x L: <2000'
          },
          {
            id: 10004, products: 'Tantalum Tube', standard: 'ASTM B 521',
            material: 'RO5200, RO5400\nRO5252(Ta-2.5W)\nRO5255 (Ta-10W)', size: 'OD: 2.0-100mm\nThk: 0.2mm-5.0mm\nL: 200mm-8000mm'
          },
        ]
      },
      availableProducts2: {
        config: [
          { field: 'material', title: 'Material' },
          { field: 'ta', title: 'Ta' },
          { field: 'nb1', title: 'Nb' },
          { field: 'fe', title: 'Fe' },
          { field: 'si', title: 'Si' },
          { field: 'ni', title: 'Ni' },
          { field: 'w', title: 'W' },
          { field: 'mo', title: 'Mo' },
          { field: 'ti', title: 'Ti' },
          { field: 'nb2', title: 'Nb' },
          { field: 'o', title: 'O' },
          { field: 'c', title: 'C' },
          { field: 'h', title: 'H' },
          { field: 'n', title: 'N' },
        ],
        moredata: [
          {
            id: 10001, material: 'Ta1', ta: 'Bal', nb1: '', fe: '0.005', si: '0.05', ni: '0.002',
            w: '0.01', mo: '0.01', ti: '0.002', nb2: '0.03', o: '0.015', c: '0.01', h: '0.0015', n: '0.01'
          },
          {
            id: 10002, material: 'Ta2', ta: 'Bal', nb1: '', fe: '0.03', si: '0.02', ni: '0.005',
            w: '0.04', mo: '0.03', ti: '0.005', nb2: '0.1', o: '0.02', c: '0.01', h: '0.0015', n: '0.01'
          },
          {
            id: 10003, material: 'TaNb3', ta: 'Bal', nb1: '<3.5', fe: '0.03', si: '0.03', ni: '0.005',
            w: '0.04', mo: '0.03', ti: '0.005', nb2: '', o: '0.02', c: '0.01', h: '0.0015', n: '0.01'
          },
          {
            id: 10004, material: 'TaNb20', ta: 'Bal', nb1: '17.0-23.0', fe: '0.03', si: '0.03', ni: '0.005',
            w: '0.04', mo: '0.03', ti: '0.005', nb2: '', o: '0.02', c: '0.01', h: '0.0015', n: '0.01'
          },
          {
            id: 10005, material: 'Ta2.5W', ta: 'Bal', nb1: '', fe: '0.05', si: '0.05', ni: '0.002',
            w: '3.0', mo: '0.01', ti: '0.002', nb2: '0.04', o: '0.015', c: '0.01', h: '0.0015', n: '0.01'
          },
          {
            id: 10006, material: 'Ta10W', ta: 'Bal', nb1: '', fe: '0.005', si: '0.005', ni: '0.002',
            w: '11', mo: '0.01', ti: '0.002', nb2: '0.04', o: '0.015', c: '0.01', h: '0.0015', n: '0.01'
          }
        ]
      },
      availableProducts3: {
        config: [
          { field: 'material', title: 'Material' },
          { field: 'tensile', title: 'Tensile Strength, min\npound/inch2(Mpa)' },
          { field: 'yield', title: 'Yield Strength min\npound/inch2(Mpa)' },
          { field: 'elongation', title: 'Elongation min, %\n(1 inch)' }
        ],
        moredata: [
          {
            id: 10001, material: 'RO5200/RO5400', tensile: '25000 (172)', yield: '15000 (103)', elongation: '25'
          },
          {
            id: 10002, material: 'RO5252', tensile: '40000 (276)', yield: '28000 (193)', elongation: '20'
          },
          {
            id: 10003, material: 'RO5255', tensile: '70000 (482)', yield: '55000 (379)', elongation: '20'
          },
          {
            id: 10004, material: 'RO5240', tensile: '35000 (244)', yield: '15000 (103)', elongation: '25'
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
