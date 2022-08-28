<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Product" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ssp/1.png" />
      </div>
      <div class="right">
        <div class="title">Stainless Steel Pipe & Tube</div>
        <div class="subtitle">Stainless Steel Welded Pipes & Tubes / Stainless Steel Seamless Pipes & Tubes/Stainless
          Square Pipe</div>
        <div class="desc">We mainly supply the Seamless and Welded stainless steel Pipes & Tubes according to the
          Standard ASTM A312, ASTM A213, ASTM A269, ASTM AB676, ASTM B677, the main grades are TP304, TP304L, TP310S,
          TP316, TP316L, 316Ti, TP317, TP317L, TP321, TP347, TP347H, S31254, N08367, N08926, N08904. Each alloy has a
          specific structure and chemical composition and mechanical properties.
          ASTM A312 pipe is the general use stainless steel pipe applied in different industries. It covers diameters
          from 1/8” to 30” and thickness from SCH 10S to SCH 80S. Common use material grades are TP304/304L, TP316/316L.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Available Products</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition (max)%</div>
      <!-- <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div> -->
      <BasicTable :productdatas="chemicalComposition" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property</div>
      <BasicTable :productdatas="mechanicalProperties" />
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

import ssrb1 from '@/assets/product/ssp/1.png'
import ssrb2 from '@/assets/product/ssp/2.jpeg'
import ssrb3 from '@/assets/product/ssp/3.jpeg'
import ssrb4 from '@/assets/product/ssp/4.jpeg'
import ssrb5 from '@/assets/product/ssp/5.jpeg'
import ssrb6 from '@/assets/product/ssp/6.jpeg'
import ssrb7 from '@/assets/product/ssp/7.jpeg'
import ssrb8 from '@/assets/product/ssp/8.jpeg'

export default defineComponent({
  components: {
    Infobox,
    BasicTable,
    ImageBox
  },
  data() {
    return {
      InfoImg: InfoImg,
      availableProducts: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'standard', title: 'Standard' },
          { field: 'size', title: 'Size' },
          { field: 'grade', title: 'Grade' }
        ],
        moredata: [
          {
            id: 10001, products: 'Seamless Austenitic Pipe/Tube', standard: 'ASTM A312/A312M\nASMESA312/SA312M\nASTM A269/ASME SA269\nASTM A240 A268 ASME\nSA240 SA268 410',
            size: 'OD: 6.0~914.0mm\nWT: 0.5~88mm', grade: 'TP304, TP304L, TP304H, TP310, TP310S\nTP316, TP316L, TP316Ti, TP317, TP317L\nTP321, TP321H, TP347, TP347H\nTP410,TP420'
          },
          {
            id: 10002, products: 'Welded Austenitic Pipe', standard: 'ASTM A312 ASTM A312M\nASTM A358, A778, JIS G3459\nASTM A240 A268 ASME\nSA240 SA268 410',
            size: 'OD: 13.7~1016mm\nWT: 1.65-12.7mm', grade: 'TP304, TP304L, TP316, SUS304TB\nTP410,TP420'
          },
          {
            id: 10003, products: 'Seamless Austenitic Pipe for heat Exchanger', standard: 'ASTM A213/A213M\nASME SA213/SA213M',
            size: 'OD: 6.0~50.8mm\nWT: 0.8~10.0mm', grade: 'TP304, TP304L, TP304H, TP310, TP310S\nTP316, TP316L, TP316Ti, TP317, TP317L\nTP321, TP321H, TP347, TP347H'
          },

          {
            id: 10004, products: 'Welded Austenitic for heat Exchanger Tube', standard: 'ASTM A246, A269\nJISG3463',
            size: 'OD: 15.9~139.8mm\nWT: 1.6~5.0mm', grade: 'TP304, TP304L, TP316L, SUS304TB'
          },

          {
            id: 10005, products: 'Seamless Mechanical Tube/Pipe', standard: 'ASTM A511',
            size: 'OD: 6.0~50.8mm\nWT: 1.8~10.0mm', grade: 'MT304, MT304L, MT304H, MT310, MT310S, MT316, MT316L, MT317, MT317L, MT321, MT321H, MT347'
          },

          {
            id: 10006, products: 'Welded Mechanical Tube/Pipe', standard: 'ASTM A554, JIS G3446',
            size: 'OD: 7.9~152.4mm\nWT: 0.5~6.5mm', grade: 'MT304, MT304L, MT316L, MT430 Grade 201, 202 as per mill\'s STD SUS304'
          },
          {
            id: 10007, products: 'Seamless/ Welded Duplex Tube & Pipe', standard: 'ASTM A789 / A789M',
            size: 'OD: 6.0~50.8mm\nWT: 0.8~10.0mm', grade: 'S31803, S32205, S32750'
          },
          {
            id: 10008, products: 'Seamless/ Welded Duplex Tube & Pipe', standard: 'STM A790/A790M',
            size: 'OD: 21.3~273.1mm\nWT: 1.65~15.09mm', grade: 'S31803, S32205, S32750'
          },
          {
            id: 10009, products: 'Seamless Tubes for Pressure Purposes', standard: 'EN 10216, DIN 17456, 17458',
            size: 'OD: 6.0~914.0mm\nWT: 0.5~88mm', grade: '1.4301, 1.4307, 1.4541, 1.4401, 1.4404, 1.4571, 1.4878, 1.4432, 1.4462'
          },
          {
            id: 10010, products: 'Square Tube& Pipe(Weled/Seamless)', standard: 'ASTM A554, ASTM A312M',
            size: 'OD:12.7x12.7~300x300mm\nWT: 0.7~20mm', grade: 'MT304, MT304L, MT316L, MT430 Grade 201, 202 as per mill\'s STD'
          },
          {
            id: 10011, products: 'Rectangular Tubes(Weled/Seamless)', standard: 'ASTM A554, ASTM A312',
            size: 'OD: 10x20~100x200mm\nWT: 0.7~20mm', grade: 'MT304, MT304L, MT316L, MT430 Grade 201, 202 as per mill\'s STD'
          },
          {
            id: 10012, products: 'Large OD Pipes', standard: 'JIS G3448, JIS G3468',
            size: 'OD10 -1016mm\nWT:0.8-9.53mm', grade: '304. 316'
          }
        ]
      },
      chemicalComposition: {
        config: [
          { field: 'col1', title: 'Grade' },
          { field: 'col2', title: 'UNS' },
          { field: 'col3', title: 'C≤' },
          { field: 'col4', title: 'Mn' },
          { field: 'col5', title: 'P≤' },
          { field: 'col6', title: 'S≤' },
          { field: 'col7', title: 'Si≤' },
          { field: 'col8', title: 'Cr' },
          { field: 'col9', title: 'Mo' },
          { field: 'col10', title: 'Ni' },
        ],
        moredata: [
          {
            id: 10001, col1: 'TP304', col2: 'S30400', col3: '0.08', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '18.0-20.0', col9: '-', col10: '8.0-11.0'
          },
          {
            id: 10002, col1: 'TP304L', col2: 'S30403', col3: '0.035', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '18.0-20.0', col9: '-', col10: '8.0-12.0'
          },
          {
            id: 10003, col1: 'TP316', col2: 'S31600', col3: '0.08', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '16.0-18.0', col9: '2.00-3.00', col10: '10.0-14.0'
          },
          {
            id: 10004, col1: 'TP316L', col2: 'S31603', col3: '0.035', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '16.0-18.0', col9: '2.00-3.00', col10: '10.0-14.0'
          },
          {
            id: 10005, col1: '316Ti', col2: 'S31668', col3: '0.08', col4: '2', col5: '0.035', col6: '0.03',
            col7: '1', col8: '16.0-19.0', col9: '1.80-2.50', col10: '10.0-14.0'
          },
          {
            id: 10006, col1: 'TP317', col2: 'S31700', col3: '0.08', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '18.0-20.0', col9: '3.0-4.0', col10: '11.0-15.0'
          },
          {
            id: 10007, col1: 'TP317L', col2: 'S31703', col3: '0.035', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '18.0-20.0', col9: '3.0-4.0', col10: '11.0-15.0'
          },
          {
            id: 10008, col1: 'TP321', col2: 'S32100', col3: '0.08', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '17.0-19.0', col9: '-', col10: '9.0-12.0'
          },
          {
            id: 10009, col1: 'TP310S', col2: 'S31008', col3: '0.08', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '24.0-26.0', col9: '0.75', col10: '19.0-22.0'
          },
          {
            id: 10010, col1: 'TP347', col2: 'S34700', col3: '0.08', col4: '2', col5: '0.045', col6: '0.03',
            col7: '1', col8: '17.0-19.0', col9: '-', col10: '9.0-13.0'
          },
          {
            id: 10011, col1: '', col2: 'S31254', col3: '0.02', col4: '1', col5: '0.03', col6: '0.01',
            col7: '1', col8: '24.0-26.0', col9: '0.75', col10: '19.0-22.0'
          },
          {
            id: 10012, col1: '', col2: 'N08367', col3: '0.03', col4: '2', col5: '0.04', col6: '0.03',
            col7: '1', col8: '20.0-22.0', col9: '6.0-7.0', col10: '23.5-25.5'
          },
          {
            id: 10014, col1: '', col2: 'N08926', col3: '0.02', col4: '2', col5: '0.03', col6: '0.01',
            col7: '0.5', col8: '24.0-26.00', col9: '6.0-7.0', col10: '19.0-21.0'
          },
          {
            id: 10015, col1: '', col2: 'N08904', col3: '0.02', col4: '2', col5: '0.04', col6: '0.03',
            col7: '1', col8: '19.0-23.0', col9: '4.0-5.0', col10: '23.0-28.0'
          },
          {
            id: 10016, col1: '', col2: 'N08925', col3: '0.02', col4: '1', col5: '0.045', col6: '0.03',
            col7: '0.5', col8: '19.0-21.0', col9: '6.0-7.0', col10: '24.0-26.0'
          }
        ]
      },
      mechanicalProperties: {
        config: [
          { field: 'col1', title: 'Mechanical properties' },
          { field: 'col2', title: 'Tensile,min,ksi[MPa]' },
          { field: 'col3', title: 'Yield,min,ksi[MPa]' },
          { field: 'col4', title: 'Elongation,%(min)' },
          { field: 'col5', title: 'Hardness,HB(max)' },
        ],
        moredata: [
          { id: 10001, col1: 'TP304', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 10002, col1: 'TP304L', col2: '70【485】', col3: '25【170】', col4: '35', col5: '192' },
          { id: 10003, col1: 'TP316', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 10004, col1: 'TP316L', col2: '70【485】', col3: '25【170】', col4: '35', col5: '192' },
          { id: 10005, col1: '316Ti', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 10006, col1: 'TP317', col2: '75【515】', col3: '30【205】', col4: '34', col5: '192' },
          { id: 10007, col1: 'TP317L', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 10008, col1: 'TP321', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 10009, col1: 'TP310S', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 100010, col1: 'TP347', col2: '75【515】', col3: '30【205】', col4: '35', col5: '192' },
          { id: 100011, col1: 'S31254', col2: '98【675】', col3: '43【310】', col4: '35', col5: '220' },
          { id: 100012, col1: 'N08367', col2: '100【690】', col3: '45【310】', col4: '30', col5: '241' },
          { id: 100013, col1: 'N08926', col2: '94【650】', col3: '43【295】', col4: '35', col5: '256' },
          { id: 100014, col1: 'N08904', col2: '71【490】', col3: '31【215】', col4: '35', col5: '192' },
          { id: 100015, col1: 'N08925', col2: '87【600】', col3: '43【295】', col4: '40', col5: '217' },
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
  min-width: 44rem;
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
