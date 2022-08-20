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
    <!-- <div class="mytable">
      <div class="title">Chemical Composition AWS A5.16-2013 (For Your Reference)</div>
      <BasicTable :productdatas="composition" />
    </div> -->
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
            id: 10005, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10006, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10007, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10008, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10009, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10010, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10011, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10012, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10013, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          },
          {
            id: 10014, uns: '', astm: '', en: '', jis: '', c: '', mn: '',
            p: '', s: '', si: '', cr: '', ni: '', mo: ''
          }
        ]
      },
      composition: {
        config: [
          { field: 'material', title: 'Material' },
          { field: 'chemical', title: 'Chemical' },
          { field: 'cmax', title: 'C' },
          { field: 'omax', title: 'O' },
          { field: 'nmax', title: 'N' },
          { field: 'hmax', title: 'H' },
          { field: 'femax', title: 'Fe' },
          { field: 'al', title: 'Al' },
          { field: 'v', title: 'V' },
          { field: 'pd', title: 'Pd' },
          { field: 'ni', title: 'Ni' },
          { field: 'mo', title: 'Mo' }
        ],
        moredata: [
          {
            id: 10001, material: 'ERTi-1', chemical: 'Ti99.8', cmax: '0.03', omax: '0.03-0.10',
            nmax: '0.012', hmax: '0.005', femax: '0.08', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10002, material: 'ERTi-2', chemical: 'Ti99.6', cmax: '0.03', omax: '0.08-0.16',
            nmax: '0.015', hmax: '0.008', femax: '0.12', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10003, material: 'ERTi-3', chemical: 'Ti99.5', cmax: '0.03', omax: '0.13-0.20',
            nmax: '0.02', hmax: '0.008', femax: '0.16', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10004, material: 'ERTi-4', chemical: 'Ti99.3', cmax: '0.03', omax: '0.18-0.32',
            nmax: '0.025', hmax: '0.008', femax: '0.25', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10005, material: 'ERTi-5', chemical: 'TiAl6V4B', cmax: '0.05', omax: '0.12-0.20',
            nmax: '0.030', hmax: '0.015', femax: '0.22', al: '5.5-6.75', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10007, material: 'ERTi-7', chemical: 'TiPd0.2A', cmax: '0.03', omax: '0.08-0.16',
            nmax: '0.015', hmax: '0.008', femax: '0.12', al: '', v: '', pd: '0.12-0.25', ni: '', mo: ''
          },
          {
            id: 10009, material: 'ERTi-9', chemical: 'TiAl3V2.5A', cmax: '0.03', omax: '0.06-0.12',
            nmax: '0.012', hmax: '0.005', femax: '0.20', al: '2.5-3.5', v: '2.0-3.0', pd: '', ni: '', mo: ''
          },
          {
            id: 10012, material: 'ERTi-12', chemical: 'TiNi0.7Mo0.3', cmax: '0.03', omax: '0.08-0.16',
            nmax: '0.015', hmax: '0.008', femax: '0.15', al: '', v: '', pd: '', ni: '0.6-0.9', mo: '0.2-0.4'
          },
          {
            id: 10023, material: 'TiAl6V4A', chemical: 'TiAl3V2.5A', cmax: '0.03', omax: '0.03-0.11',
            nmax: '0.012', hmax: '0.005', femax: '0.20', al: '5.5-6.5', v: '3.5-4.5', pd: '', ni: '', mo: ''
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
