<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Stainless Steel Bar" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ssr/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Stainless Steel Bar</div>
        <div class="subtitle">Stainless Steel Round Bar/ Flat Bar/ Hexagon Bar/Square Bar/ Angle Bar</div>
        <div class="desc">High quality stainless steel bar supplier, Competitive price, ISO system certification, Can
          accept any Third Party Testing inspection quality. Have 25000 tons inventory of stainless steel products every
          month, Can delivery within 5 days, 3 times quality detection before shipping
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Available Products</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition</div>
      <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div>
      <BasicTable :productdatas="diameterProducts" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Properties (Long Products, Annealed)</div>
      <BasicTable :productdatas="composition" />
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

import ssrb1 from '@/assets/product/ssr/2.webp'
import ssrb2 from '@/assets/product/ssr/3.webp'
import ssrb3 from '@/assets/product/ssr/4.webp'
import ssrb4 from '@/assets/product/ssr/5.webp'
import ssrb5 from '@/assets/product/ssr/6.webp'
import ssrb6 from '@/assets/product/ssr/7.jpeg'
import ssrb7 from '@/assets/product/ssr/8.jpeg'
import ssrb8 from '@/assets/product/ssr/9.jpeg'
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
          { field: 'shape', title: 'Stainless Steel Bar Shape' },
          { field: 'type', title: 'Stainless Steel Bar Grade/Type' },
          { field: 'size', title: 'Stainless Steel Bar Sizes' }
        ],
        moredata: [
          {
            id: 10001, shape: 'Stainless Steel Flat Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A\nEdge Conditioned, True Mill Edge',
            size: 'Thickness: 3.175mm - 50.8mm\nWidths: 12.7mm - 203.2mm'
          },
          {
            id: 10002, shape: 'Stainless Steel Half Round Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Diameter: 4.76mm - 19.3mm'
          },
          {
            id: 10003, shape: 'Stainless Steel Hexagon Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Diameter: 9.6mm - 76mm'
          },
          {
            id: 10004, shape: 'Stainless Steel Round Bar', type: 'Grades: 303, 304/304L, 316/316L, 410, 416, 440C, 13-8, 15-5 , 17-4 (630), 17-4 H1150, 2205\nType: Accuracy, Annealed, BSQ, Coiled, Cold Finished, Cond A, Hot Rolled, Rough Turned, TGP, PSQ, Forged',
            size: 'Diameter: 3.175mm-304.8mm'
          },
          {
            id: 10005, shape: 'Stainless Steel Square Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Diameter: 3.175mm - 76.2mm'
          },
          {
            id: 10006, shape: 'Stainless Steel Angle Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A',
            size: 'Thickness :2mm-16mm\nWidth: 15mm-94mm'
          }
        ]
      },
      diameterProducts: {
        config: [
          { field: 'uns', title: 'UNS' },
          { field: 'astm', title: 'ASTM' },
          { field: 'en', title: 'EN' },
          { field: 'jis', title: 'JIS' },
          { field: 'c', title: 'C%' },
          { field: 'mn', title: 'Mn%' },
          { field: 'p', title: 'P%' },
          { field: 's', title: 'S%' },
          { field: 'si', title: 'Si%' },
          { field: 'cr', title: 'Cr%' },
          { field: 'ni', title: 'Ni%' },
          { field: 'mo', title: 'Mo%' }
        ],
        moredata: [
          {
            id: 10001, uns: 'S30100', astm: '301', en: '1.4319', jis: 'SUS301', c: '≤0.15', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤1.00', cr: '16.0-18.0', ni: '6.0-8.0', mo: '-'
          },
          {
            id: 10002, uns: 'S30400', astm: '304', en: '1.4301', jis: 'SUS304', c: '≤0.08', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '18.0-20.0', ni: '8.0-10.5', mo: '-'
          },
          {
            id: 10003, uns: 'S30403', astm: '304L', en: '1.4306', jis: 'SUS304L', c: '≤0.03', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '18.0-20.0', ni: '8.0-12.0', mo: '-'
          },
          {
            id: 10004, uns: 'S30908', astm: '309S', en: '1.4833', jis: 'SUS309S', c: '≤0.08', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '22.0-24.0', ni: '12.0-15.0', mo: '-'
          },
          {
            id: 10005, uns: 'S31008', astm: '310S', en: '1.4845', jis: 'SUS310S', c: '≤0.08', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤1.50', cr: '24.0-26.0', ni: '19.0-22.0', mo: '-'
          },
          {
            id: 10006, uns: 'S31600', astm: '316', en: '1.4401', jis: 'SUS316', c: '≤0.08', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '16.0-18.0', ni: '10.0-14.0', mo: '2.0-3.0'
          },
          {
            id: 10007, uns: 'S31603', astm: '316L', en: '1.4404', jis: 'SUS316L', c: '≤0.03', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '16.0-18.0', ni: '10.0-14.0', mo: '2.0-3.0'
          },
          {
            id: 10008, uns: 'S31703', astm: '317L', en: '1.4438', jis: 'SUS317L', c: '≤0.03', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '18.0-20.0', ni: '11.0-15.0', mo: '3.0-4.0'
          },
          {
            id: 10009, uns: 'S32100', astm: '321', en: '1.4541', jis: 'SUS321', c: '≤0.08', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '17.0-19.0', ni: '9.0-12.0', mo: '-'
          },
          {
            id: 10010, uns: 'S34700', astm: '321', en: '1.4541', jis: 'SUS321', c: '≤0.08', mn: '≤2.00',
            p: '≤0.045', s: '≤0.03', si: '≤0.75', cr: '17.0-19.0', ni: '9.0-13.0', mo: '-'
          },
          {
            id: 10011, uns: 'S32750', astm: 'SAD2507', en: '1.4410', jis: '', c: '≤0.03', mn: '≤1.2',
            p: '≤0.035', s: '≤0.02', si: '≤0.80', cr: '24.0-26.0', ni: '6.0-8.0', mo: '3.0-5.0'
          },
          {
            id: 10012, uns: 'S31803', astm: 'SAF2205', en: '1.4462', jis: '', c: '≤0.03', mn: '≤2.0',
            p: '≤0.03', s: '≤0.02', si: '≤1.00', cr: '21.0-23.0', ni: '4.0-6.5', mo: '2.5-3.5'
          },
          {
            id: 10013, uns: 'N08904', astm: '904L', en: '1.4539', jis: '', c: '≤0.03', mn: '≤2.0',
            p: '≤0.035', s: '≤0.03', si: '≤1.00', cr: '18.0-20.0', ni: '23.0-25.0', mo: '3.0-4.0'
          }
        ]
      },
      composition: {
        config: [
          { field: 'type', title: 'Type No.' },
          { field: 'tensile', title: 'Tensile Strength, Ksi' },
          { field: 'yield', title: 'Yield Strength, Ksi' },
          { field: 'elongation', title: 'Elongation in 1 inch,%' },
          { field: 'reduction', title: 'Reduction of Area, %' },
          { field: 'brinell', title: 'Brinell Hardness' }
        ],
        moredata: [
          {
            id: 10001, type: '301', tensile: '110', yield: '40', elongation: '60',
            reduction: '70', brinell: '165'
          },
          {
            id: 10002, type: '302', tensile: '90', yield: '40', elongation: '55',
            reduction: '70', brinell: '150'
          },
          {
            id: 10003, type: '303', tensile: '90', yield: '35', elongation: '50',
            reduction: '55', brinell: '160'
          },
          {
            id: 10004, type: '304', tensile: '85', yield: '35', elongation: '55',
            reduction: '70', brinell: '150'
          },
          {
            id: 10005, type: '304L', tensile: '80', yield: '30', elongation: '55',
            reduction: '70', brinell: '140'
          },
          {
            id: 10006, type: '316', tensile: '85', yield: '35', elongation: '60',
            reduction: '70', brinell: '150'
          },
          {
            id: 10007, type: '316L', tensile: '78', yield: '30', elongation: '55',
            reduction: '65', brinell: '145'
          },
          {
            id: 10008, type: '321', tensile: '85', yield: '35', elongation: '55',
            reduction: '65', brinell: '150'
          },
          {
            id: 10009, type: '410', tensile: '75', yield: '40', elongation: '35',
            reduction: '70', brinell: '155'
          },
          {
            id: 10010, type: '416', tensile: '75', yield: '40', elongation: '30',
            reduction: '65', brinell: '155'
          },
          {
            id: 10011, type: '420', tensile: '95', yield: '50', elongation: '25',
            reduction: '', brinell: '241'
          },
          {
            id: 10012, type: '2205', tensile: '90', yield: '65', elongation: '25',
            reduction: '', brinell: '217'
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
