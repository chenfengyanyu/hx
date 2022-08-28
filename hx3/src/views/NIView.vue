<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Niobium" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ni/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Niobium</div>
        <div class="subtitle">Niobium Wire/Bar/Sheet/Plate/Tube</div>
        <div class="desc">Niobium is suitable as the structural material for reactor and coating material for nuclear
          fuel as well as the thermal protection and structural material adapted in aerospace industry. In the
          Metallurgical industry, Niobium is mainly used as additive to produce high strength alloy steel, to improve
          properties of various alloys and to make super hard tools. Niobium also plays an important role in surgical
          field, which can not only be used to manufacture medical devices, but also be a good "Biocompatible Material".
          Niobium can constitute alloys with various elements, which have important applications in various industries.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Products and Standard</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition (For Reference)</div>
      <MergeTable :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property (For Reference)</div>
      <MergeTable1 :productdatas="composition3" />
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

import ssrb2 from '@/assets/product/ni/2.jpeg'
import ssrb3 from '@/assets/product/ni/3.jpeg'
import ssrb4 from '@/assets/product/ni/4.jpeg'
import ssrb5 from '@/assets/product/ni/5.jpeg'
import ssrb6 from '@/assets/product/ni/6.jpeg'
import ssrb7 from '@/assets/product/ni/7.jpeg'
import ssrb8 from '@/assets/product/ni/8.jpg'
import ssrb1 from '@/assets/product/ni/9.jpeg'
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
            id: 10001, products: 'Niobium Wire', standard: 'ASTM B392-98',
            material: 'RO4200-1\nRO4210-2', size: 'Φ03mm-Φ100mm X L'
          },
          {
            id: 10002, products: 'Niobium Bar', standard: 'ASTM B392-98',
            material: 'RO4200-1\nRO4210-2', size: 'Φ3mm -Φ100mm'
          },
          {
            id: 10003, products: 'Niobium Sheet\nNiobium Plate\nNiobium Foil', standard: 'ASTM B393-98',
            material: 'RO4200-1\nRO4210-2', size: 'THK:0.1-0.5mm x W 300-600mm x L 30-2000mm\nTHK:0.5-10mm x W 50-1000mm x L 50-2000mm\nTHK:0.03-0.09mm x W 30-150mm x L <2000'
          },
          {
            id: 10004, products: 'Niobium Tube', standard: 'ASTM B394-98',
            material: 'RO4200-1\nRO4210-2', size: 'Φ2.0-100mm\nThk: 0.2mm-5.0mm\nL : 200mm-8000mm'
          },
        ]
      },
      composition2: {
        align: 'center',
        config: [
          { field: 'standard', title: 'Material' },
          { field: 'info1', title: 'Chemical Requirements' },
          { field: 'info2', title: 'Chemical Requirements' },
          { field: 'info3', title: 'Chemical Requirements' },
          { field: 'info4', title: 'Chemical Requirements' },
          { field: 'info5', title: 'Chemical Requirements' },
          { field: 'info6', title: 'Chemical Requirements' },
          { field: 'info7', title: 'Chemical Requirements' },
          { field: 'info8', title: 'Chemical Requirements' },
          { field: 'info9', title: 'Chemical Requirements' },
          { field: 'info10', title: 'Chemical Requirements' },
          { field: 'info11', title: 'Chemical Requirements' },
          { field: 'info12', title: 'Chemical Requirements' }
        ],
        moredata: [
          {
            id: 10001, standard: 'Material', info1: 'Main', info2: 'Main', info3: 'Other Impurities (max)', info4: '', info5: '', info6: '',
            info7: '', info8: '', info9: '', info10: '', info11: '', info12: ''
          },
          {
            id: 10002, standard: 'Material', info1: 'Nb', info2: 'Fe', info3: 'Si', info4: 'Ni', info5: 'W', info6: 'Mo',
            info7: 'Ti', info8: 'Ta', info9: 'O', info10: 'C', info11: 'H', info12: 'N'
          },
          {
            id: 10003, standard: 'Nb1', info1: 'bal', info2: '0.004', info3: '0.004', info4: '0.002', info5: '0.005', info6: '0.005',
            info7: '0.002', info8: '0.05', info9: '0.012', info10: '0.0035', info11: '0.0012', info12: '0.003'
          },
          {
            id: 10004, standard: 'Nb2', info1: 'bal', info2: '0.01', info3: '0.01', info4: '0.005', info5: '0.02', info6: '0.01',
            info7: '0.015', info8: '0.07', info9: '0.012', info10: '0.0035', info11: '0.0012', info12: '0.003'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 2, colspan: 0 },
          { row: 0, col: 2, rowspan: 0, colspan: 2 },
          { row: 0, col: 4, rowspan: 0, colspan: 10 }
        ]
      },
      composition3: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Material' },
          { field: 'info1', title: 'Tensile Strength, min\npound/inch2(Mpa)' },
          { field: 'info2', title: 'Yield Strength min\npound/inch2(Mpa)' },
          { field: 'info3', title: 'Elongation min, %\n(1 inch gauge)' }
        ],
        moredata: [
          {
            id: 10000, col1: 'Material', info1: 'Tensile Strength, min\npound/inch2(Mpa)',
            info2: 'Yield Strength min\npound/inch2(Mpa)', info3: 'Elongation min, %\n(1 inch gauge)'
          },
          {
            id: 10001, col1: 'Bar with diameter 0.125”(3.18mm) to 2.5”(63.5mm)', info1: '', info2: '', info3: ''
          },
          {
            id: 10002, col1: 'RO4200-1', info1: '18000(125)', info2: '12000(85)', info3: '25'
          },
          {
            id: 10003, col1: 'RO4200-2', info1: '18000 (125)', info2: '12000(85)', info3: '25'
          },
          {
            id: 10004, col1: 'Wire with diameter is 0.012”(0.3048mm) to 0.124”(3.15mm)', info1: '', info2: '', info3: ''
          },
          {
            id: 10005, col1: 'Type1 & Type2', info1: '18000(125)', info2: '', info3: '20'
          },
          {
            id: 10006, col1: 'Type3 & Type4', info1: '18000(125)', info2: '', info3: '15'
          },
          {
            id: 10007, col1: ' Tube', info1: '', info2: '', info3: ''
          },
          {
            id: 10008, col1: 'RO4200-1\nRO4200-2', info1: '18000(125)', info2: '8500 (59)', info3: '25'
          }
        ],
        mergeRule: [
          { row: 1, col: 1, rowspan: 0, colspan: 4 },
          { row: 4, col: 1, rowspan: 0, colspan: 4 },
          { row: 7, col: 1, rowspan: 0, colspan: 4 },
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
