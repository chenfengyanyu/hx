<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Tungsten" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tu/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Tungsten Wire/Bar/Rod/Sheet/Tube/Target</div>
        <!-- <div class="subtitle">Nickel Based Alloy Plate/Sheet/Bar/Forgings/Tube</div> -->
        <div class="desc">Tungsten is one of the most dense metals, with a density of 19.3g/cc, Tungsten have the
          highest melting point of all metals at 3410°C ,Lowest vapor pressure of all metals with 4.27Pa at 3410°C
          .Tungsten has the highest melting point and lowest vapor pressure of all metals, and at temperatures over
          1650°C has the highest tensile strength. It has excellent corrosion resistance and is attacked only slightly
          by most mineral acids.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Tungsten Products</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Tungsten Chemical Composition</div>
      <MergeTable1 :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Tungsten Properties</div>
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
import MergeTable from '@/components/product/MergeTable.vue'
import ImageBox from '@/components/ImageBox.vue'

import ssrb2 from '@/assets/product/tu/2.jpg'
import ssrb3 from '@/assets/product/tu/3.jpg'
import ssrb4 from '@/assets/product/tu/4.jpg'
import ssrb5 from '@/assets/product/tu/5.jpeg'
import ssrb6 from '@/assets/product/tu/6.jpeg'
import ssrb7 from '@/assets/product/tu/7.jpeg'
import ssrb8 from '@/assets/product/tu/8.jpg'
import ssrb1 from '@/assets/product/tu/9.jpg'
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
            id: 10001, products: 'Tantalum Wire', standard: 'ASTM F288-96\nGB_T4187-2017',
            material: 'W1≥99.999%\nW2≥99.99%\nW3≥99.95%', size: 'Φ0.4mm-Φ1.8mm\nΦ0.012mm-Φ1.8mm\nΦ0.012mm-Φ1.8mm'
          },
          {
            id: 10002, products: 'Tungsten Bar\nTungsten Rod', standard: 'ASTM F288-90\nGB_T4187-2017',
            material: 'W1≥99.999%\nW2≥99.99%\nW3≥99.95%', size: 'Φ200- 400mm x L10-400mm Sintered\nΦ100- 200mm x L10-900mm. Forged\nΦ20- 100mm x L10-1200mm Forged'
          },
          {
            id: 10003, products: 'Tungsten Sheet\nTungsten Plate\nTungsten Foil', standard: 'ASTM B 760\nGB 3875-2017\nASTM B708',
            material: 'W1≥99.999%\nW2≥99.99%\nW3≥99.95%', size: 'THK:0.2-8.0mm\nW: 10-600mm\nL:10-1500mm'
          },
          {
            id: 10004, products: 'Tungsten Tube', standard: 'ASTM F288-90\nGB/T34503-2017',
            material: 'W1≥99.999%\nW2≥99.99%\nW3≥99.95%', size: 'OD: 30-550mm\nTHK: 8mm-30mm\nL:  <1300'
          }
        ]
      },
      availableProducts2: {
        config: [
          { field: 'products', title: 'Name' },
          { field: 'phase', title: 'Phase at STP' },
          { field: 'density', title: 'Density' },
          { field: 'ultimate', title: 'Ultimate Tensile Strength' },
          { field: 'yield', title: 'Yield Strength' },
          { field: 'elasticity', title: 'Young\'s Modulus of Elasticity' },
          { field: 'brinell', title: 'Brinell Hardness' },
          { field: 'melting', title: 'Melting Point' },
          { field: 'thermal', title: 'Thermal Conductivity' },
          { field: 'heat', title: 'Heat Capacity' },
        ],
        moredata: [
          {
            id: 10001, products: 'Pure Tungsten', phase: 'solid', density: '19.3 kg/cc', ultimate: '980 MPa',
            yield: '750 MPa', elasticity: '750 GPa', brinell: '3695 BHN', melting: '3410 °C', thermal: '170 W/mK', heat: '130 J/g K'
          }
        ]
      },
      composition2: {
        align: 'center',
        config: [
          { field: 'col1', title: 'W (>%)' },
          { field: 'col2', title: 'Chemical Content (< %)' },
          { field: 'col3', title: 'Chemical Content (< %)' },
          { field: 'col4', title: 'Chemical Content (< %)' },
          { field: 'col5', title: 'Chemical Content (< %)' },
          { field: 'col6', title: 'Chemical Content (< %)' },
          { field: 'col7', title: 'Chemical Content (< %)' },
          { field: 'col8', title: 'Chemical Content (< %)' },
          { field: 'col9', title: 'Chemical Content (< %)' },
          { field: 'col10', title: 'Chemical Content (< %)' },
          { field: 'col11', title: 'Chemical Content (< %)' },
          { field: 'col12', title: 'Chemical Content (< %)' },
          { field: 'col13', title: 'Chemical Content (< %)' },
        ],
        moredata: [
          {
            id: 10001, col1: 'W (>%)', col2: 'Chemical Content (< %)', col3: '', col4: '', col5: '', col6: '', col7: '',
            col8: '', col9: '', col10: '', col11: '', col12: '', col13: ''
          },
          {
            id: 10002, col1: '99.999\nPT74-TBSW1', col2: 'Fe', col3: 'Ca', col4: 'Be', col5: 'Sn', col6: 'Al', col7: 'Ni',
            col8: 'Zn', col9: 'Sb', col10: 'Pt', col11: 'K', col12: 'Ta', col13: 'Na'
          },
          {
            id: 10003, col1: '99.999\nPT74-TBSW1', col2: '0.0001', col3: '0.00005', col4: '0.000005', col5: '0.000005', col6: '0.00005', col7: '0.00001',
            col8: '0.00005', col9: '0.00005', col10: '0.00003', col11: '0.000005', col12: '0.0001', col13: '0.00005'
          },
          {
            id: 10004, col1: '99.999\nPT74-TBSW1', col2: 'Cr', col3: 'Pb', col4: 'As', col5: 'Mg', col6: 'Ti', col7: 'Bi',
            col8: 'Mo', col9: 'Cd', col10: 'Cu', col11: 'Ba', col12: 'Co', col13: 'Mn'
          },
          {
            id: 10005, col1: '99.999\nPT74-TBSW1', col2: '0.000005', col3: '0.00001', col4: '0.00005', col5: '0.00005', col6: '0.000005', col7: '0.00001',
            col8: '0.00001', col9: '0.000005', col10: '0.000007', col11: '0.00001', col12: '0.000005', col13: '0.000005'
          },
          {
            id: 10006, col1: '99.99\nPT74-TBSW2', col2: 'Fe', col3: 'Ca', col4: 'Be', col5: 'Sn', col6: 'Al', col7: 'Ni',
            col8: 'Zn', col9: 'Sb', col10: 'Pt', col11: 'K', col12: 'O', col13: 'Na'
          },
          {
            id: 10007, col1: '99.99\nPT74-TBSW2', col2: '0.0001', col3: '0.00045', col4: '0.0001', col5: '0.0001', col6: '0.0001', col7: '0.0001',
            col8: '0.0001', col9: '0.0001', col10: '0.0001', col11: '0.0005', col12: '0.0040', col13: '0.0009'
          },
          {
            id: 10008, col1: '99.99\nPT74-TBSW2', col2: 'Cr', col3: 'Pb', col4: 'As', col5: 'Mg', col6: 'Ti', col7: 'Bi',
            col8: 'Mo', col9: 'Cd', col10: 'Cu', col11: 'Ba', col12: 'Co', col13: 'Mn'
          },
          {
            id: 10009, col1: '99.99\nPT74-TBSW2', col2: '0.0001', col3: '0.0001', col4: '0.0001', col5: '0.0001', col6: '0.0001', col7: '0.0001',
            col8: '0.0002', col9: '0.0001', col10: '0.0001', col11: '0.0001', col12: '0.0001', col13: '0.0001'
          },
          {
            id: 10010, col1: '99.95\nPT74-TBW3', col2: 'Fe', col3: 'Ca', col4: 'P', col5: 'Sn', col6: 'Al', col7: 'Ni',
            col8: 'Zn', col9: 'Sb', col10: 'Si', col11: 'O', col12: 'Pb', col13: 'As'
          },
          {
            id: 10011, col1: '99.95\nPT74-TBW3', col2: '0.005', col3: '0.003', col4: '0.001', col5: '0.0001', col6: '0.002', col7: '0.003',
            col8: '0.003', col9: '0.001', col10: '0.003', col11: '0.003', col12: '0.0001', col13: '0.002'
          },
          {
            id: 10012, col1: '99.95\nPT74-TBW3', col2: 'Mg', col3: 'C', col4: 'Bi', col5: 'Mo', col6: '', col7: '',
            col8: '', col9: '', col10: '', col11: '', col12: '', col13: ''
          },
          {
            id: 10013, col1: '99.95\nPT74-TBW3', col2: '0.002', col3: '0.005', col4: '0.0001', col5: '0.001', col6: '', col7: '',
            col8: '', col9: '', col10: '', col11: '', col12: '', col13: ''
          }
        ],
        mergeRule: [
          { row: 0, col: 2, rowspan: 0, colspan: 12 },
          { row: 1, col: 1, rowspan: 4, colspan: 0 },
          { row: 5, col: 1, rowspan: 4, colspan: 0 },
          { row: 9, col: 1, rowspan: 4, colspan: 0 }
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
