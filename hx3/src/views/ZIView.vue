<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Grade 702 Zirconium, Commercially Pure" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/zi/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Grade 702 Zirconium, Commercially Pure</div>
        <div class="subtitle">Zr702 Bar/Plate/Tube/Wire/Foil</div>
        <div class="desc">Zr702 zirconium is used in chemical plants in valves, pipes, heat exchangers and pumps. These
          systems are, for example, apparatus for the production of acetic acid, hydrochloric acid or urea. Even in the
          medical field Zr702 is used because it is biocompatible and shows no toxic effects. Another application of
          zirconium 702 is the nuclear technology.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Characteristics of Zr 720</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Zr 702 Products Detail</div>
      <BasicTable :productdatas="availableProducts2" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition ( For your reference) %</div>
      <div class="subtitle">Non-nuclear Industrial Zirconium Chemical Composition</div>
      <MergeTable1 :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Zr Mechanical Properties ( For your reference)</div>
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
          { field: 'uns', title: 'UNS' },
          { field: 'melting', title: 'Melting Range' },
          { field: 'density', title: 'Density' }
        ],
        moredata: [
          {
            id: 10001, uns: 'R 60702', melting: '1852°C',
            density: '6,51 g/cm³ (0.235 lb/in3)'
          }
        ]
      },
      availableProducts2: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'standard', title: 'Standard' },
          { field: 'size', title: 'Size' }
        ],
        moredata: [
          {
            id: 10001, products: 'Zr702Bar', standard: 'ASTM B/ASME /550/ASTM B551\nASTM/ASME B/SB493', size: 'Dia.6-280mm * L ≤ 6000mm'
          },
          {
            id: 10002, products: 'Zr702 Wire', standard: 'ASTMB550/551\nASTM B351/ASTM B352\nAWSA5.24/A5.24M\nASME SFA5.24', size: 'Dia. 0.5-6mm * TIG/ Spool/Coil'
          },
          {
            id: 10003, products: 'Zr702 Plate', standard: 'ASTMB/ASME/551\nASTM B351, ASTM B352', size: 'Thk. 0.5-50mm * W 100-2500mm * L 100-6000mm'
          },
          {
            id: 10004, products: 'Zr702 Tube\nZr702 Pipe', standard: 'ASTMB/ASME/523\nASTM B653\nASTM/ASME B/SB658', size: 'OD.8-152mm *Thk.0.5-15mm * L ≤ 6000mm'
          },
          {
            id: 10005, products: 'Zr702 Foil', standard: 'ASTMB628/ ASTM B551', size: 'Thickness 0 .05-6mm*W20-150mm*L'
          },
          {
            id: 10006, products: 'Zr702 Fitting', standard: 'ASTM/ASME B/SB653', size: 'According to your request'
          }
        ]
      },
      availableProducts3: {
        config: [
          { field: 'grade', title: 'Grade' },
          { field: 'tensile', title: 'Tensile Strength min Ksi (Mpa)' },
          { field: 'yield', title: 'Yield Strength, min, ksi( Mpa)' },
          { field: 'elong', title: 'Elongation in 2 in. min %' }
        ],
        moredata: [
          {
            id: 10001, grade: 'Zr702', tensile: '55 ( 380)',
            yield: '30 (205)',elong:'16'
          },
          {
            id: 10002, grade: 'Zr704', tensile: '60 ( 415)',
            yield: '35 (240)',elong:'14'
          },
          {
            id: 10003, grade: 'Zr705', tensile: '80(550)',
            yield: '55(380)',elong:'16'
          }
        ]
      },
      composition2: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Chemical Composition (wt%) ≤' },
          { field: 'col2', title: 'Standard' },
          { field: 'col3', title: 'Standard' },
          { field: 'col4', title: 'Standard' },
          { field: 'col5', title: 'Standard' },
          { field: 'col6', title: 'Standard' },
          { field: 'col7', title: 'Standard' },
          { field: 'col8', title: 'Standard' },
          { field: 'col9', title: 'Standard' },
          { field: 'col10', title: 'Standard' },
          { field: 'col11', title: 'Standard' },
        ],
        moredata: [
          {
            id: 10001, col1: 'Chemical Composition (wt%) ≤', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '',
            col8: '', col9: '', col10: '', col11: 'Standard'
          },
          {
            id: 10002, col1: 'Grade', col2: 'Zr (min)', col3: 'Hf (max)', col4: 'Fe+Cr (max)', col5: 'Nb', col6: 'Sn', col7: 'H(max)',
            col8: 'N(max)', col9: 'C(max)', col10: 'O (max)', col11: 'ASTM B 551\nASTM B 551M'
          },
          {
            id: 10003, col1: 'Zr702', col2: '99.2', col3: '4.5', col4: '0.2', col5: '', col6: '', col7: '0.005',
            col8: '0.025', col9: '0.05', col10: '0.16', col11: 'ASTM B 551\nASTM B 551M'
          },
          {
            id: 10004, col1: 'Zr704', col2: '97.5', col3: '4.5', col4: '0.20-0.40', col5: '', col6: '1.0-1.2', col7: '0.005',
            col8: '0.025', col9: '0.05', col10: '0.18', col11: 'ASTM B 551\nASTM B 551M'
          },
          {
            id: 10005, col1: 'Zr705', col2: '95.5', col3: '4.5', col4: '0.2', col5: '2.0-3.0', col6: '', col7: '0.005',
            col8: '0.025', col9: '0.5', col10: '0.18', col11: 'ASTM B 551\nASTM B 551M'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 0, colspan: 10 },
          { row: 1, col: 11, rowspan: 4, colspan: 0 },
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
