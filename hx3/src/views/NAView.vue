<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Nickel Based Alloy" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/na/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Nickel Based Alloy</div>
        <div class="subtitle">Nickel Based Alloy Plate/Sheet/Bar/Forgings/Tube</div>
        <div class="desc">Nickel will alloy readily with many other metals, including chromium, iron, molybdenum
          ,Titanium and copper. This allows for a wide variety of alloys that demonstrate outstanding resistance to
          corrosion and high-temperature scaling, exceptional high-temperature strength and other unique properties,
          such as shape memory and low coefficient of expansion.
          In addition to a majority nickel content, these materials and may contain significant amounts of chromium and
          molybdenum. Nickel-based metals were developed to provide greater strength at high temperatures, and greater
          corrosion resistance than could be obtained from iron and steel. They are significantly more expensive than
          ferrous metals; but because of their long life, nickel alloys may be the most cost-effective long term
          material selection.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Products and Standard</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Stainless Steel Forged Fittings</div>
      <MergeTable :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Tensile Date</div>
      <div class="subtitle">Mechanical Property Requirements</div>
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
          { field: 'common', title: 'Common Name' },
          { field: 'uns', title: 'UNS #' },
          { field: 'plate', title: 'Plate/Sheet' },
          { field: 'forgings', title: 'Forgings' },
          { field: 'bar', title: 'Bar' }
        ],
        moredata: [
          {
            id: 10001, common: 'Monel 400', uns: 'N04400',
            plate: 'ASTM B127, VQQ-N-281', forgings: 'ASTM B564', bar: 'ASTM B164, QQ-N-281, DIN17550'
          },
          {
            id: 10002, common: 'Inconel 600', uns: 'N06600',
            plate: 'ASTM B168, VAMS5540, DIN17770', forgings: 'ASTM B564, DIN17754', bar: 'ASTM B166, AMS5665, DIN17552'
          },
          {
            id: 10003, common: 'Inconel 625', uns: 'N06625',
            plate: 'AMS5599, AMS5879\nASTM B/ASME SB/443 Gr.1', forgings: 'AMS5666, ASMESB/ASTM B/446 Gr.1', bar: 'ASME SB/ASTM B/446 Gr.1'
          },
          {
            id: 10004, common: 'Inconel 718', uns: 'N07718',
            plate: 'AMS 5596, AMS5597,\nGEB50TF14, ASTM B670, \nASTM B637', forgings: 'AMS5662, AMS5663, AMS566,4\nGE B50TF15, ASTM B-637',
            bar: 'ASTM B637 AMS 5662 AMS 566\nAMS 5664 PWA 1009 PWA 1010 GE\nB50TF15'
          },
          {
            id: 10005, common: 'Hastelloy 276', uns: 'N10276',
            plate: 'ASTM B575, DIN17550', forgings: 'ASTM B564', bar: 'ASTM B574, DIN17752'
          },
          {
            id: 10006, common: 'Inconel X-750', uns: 'N07750',
            plate: 'AMS5542,\nASM5598', forgings: 'AMS 5667, AMS 5668, AMS 5669, \nAMS 5670, AMS5747, AMS B-637',
            bar: 'AMS 5667, ASTM-B-637, \nASME-SB-637, UNS N07750'
          },
          {
            id: 10007, common: 'Monel K-500', uns: 'N05500',
            plate: 'ASTM B865, QQ-N-286', forgings: 'QQ-N-286, DIN17754', bar: 'ASTM B865, QQ-N-286'
          }
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
            id: 10001, standard: 'Material', info1: 'Chemical Requirements', info2: '', info3: '', info4: '', info5: '', info6: '',
            info7: '', info8: '', info9: '', info10: '', info11: '', info12: ''
          },
          {
            id: 10002, standard: '', info1: 'Ni', info2: 'Nb', info3: 'Fe', info4: 'Mo', info5: 'Mn', info6: 'Ti',
            info7: 'Si', info8: 'Al', info9: 'Cr', info10: 'C', info11: 'S', info12: 'Cu'
          },
          {
            id: 10003, standard: 'Monel 400', info1: '63.0', info2: '', info3: '2.50', info4: '', info5: '2.00', info6: '',
            info7: '0.5', info8: '', info9: '17-21.0', info10: '0.08', info11: '0.5', info12: '34.0'
          },
          {
            id: 10004, standard: 'Inconel 600', info1: '72.0', info2: '', info3: '6.0-10', info4: '', info5: '1.0', info6: '',
            info7: '0.50', info8: '', info9: '14-17.0', info10: '0.15', info11: '0.015', info12: ''
          },
          {
            id: 10005, standard: 'Inconel 625', info1: '58.0', info2: '', info3: '5.0', info4: '8.0-10', info5: '0.50', info6: '',
            info7: '0.50', info8: '', info9: '20-23.0', info10: '0.10', info11: '', info12: ''
          },
          {
            id: 10006, standard: 'Inconel 718', info1: '50-55.0', info2: '', info3: 'bal', info4: '2.8-3.3', info5: '0.35', info6: '',
            info7: '0.35', info8: '', info9: '7-21.0', info10: '0.08', info11: '', info12: ''
          },
          {
            id: 10007, standard: 'Hastelloy 276', info1: 'Bal', info2: '', info3: '4.0-7.0', info4: '15-17', info5: '1.0', info6: '',
            info7: '0.08', info8: '', info9: '14-16.5', info10: '0.010', info11: '', info12: ''
          },
          {
            id: 10008, standard: 'InconelX750', info1: '70 min', info2: '0.7-1.2', info3: '5.0-9.0', info4: '2.8-3.3', info5: '1.0mx', info6: '2.25-2.75',
            info7: '0.50max', info8: '0.4-1.0', info9: '14-17.0', info10: '0.08', info11: '0.01max', info12: '0.05max'
          },
          {
            id: 10009, standard: 'Monel K500', info1: '63.00min', info2: '', info3: '2.0Max', info4: '', info5: '1.5mx', info6: '',
            info7: '0.5(max)', info8: '2.3-3.15', info9: '', info10: '', info11: '0.01max', info12: '0.18max'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 2, colspan: 0 },
          { row: 0, col: 2, rowspan: 0, colspan: 12 }
        ]
      },
      composition3: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Material' },
          { field: 'col2', title: 'Material' },
          { field: 'info1', title: 'Requirements' },
          { field: 'info2', title: 'Requirements' },
          { field: 'info3', title: 'Requirements' },
          { field: 'info4', title: 'Requirements' },
          { field: 'info5', title: 'Requirements' },
        ],
        moredata: [
          {
            id: 10001, col1: 'Material', col2: '', info1: 'Utimate Tensile\nMpa (min)', info2: 'Yield Strength(0.2% OS)\nMpa (min)',
            info3: 'Elong.in 2 in(50mm) or 4D\nmin,% (min)', info4: 'R/A', info5: 'Hardness Brinell'
          },
          {
            id: 10002, col1: 'Monel 400', col2: 'Cold', info1: '600', info2: '415',
            info3: '20B', info4: '', info5: ''
          },
          {
            id: 10003, col1: 'Monel 400', col2: 'Hot', info1: '552', info2: '276',
            info3: '30D', info4: '', info5: ''
          },
          {
            id: 10004, col1: 'Inconel 600', col2: 'Cold', info1: '760', info2: '585',
            info3: '10', info4: '', info5: ''
          },
          {
            id: 10005, col1: 'Monel 400', col2: 'Hot', info1: '620', info2: '275',
            info3: '25', info4: '', info5: ''
          },
          {
            id: 10006, col1: 'Inconel 625', col2: 'Inconel 625', info1: '827', info2: '413',
            info3: '30', info4: '', info5: ''
          },
          {
            id: 10007, col1: 'Inconel 718', col2: '', info1: '1275', info2: '1034',
            info3: '12', info4: '15', info5: '331'
          },
          {
            id: 10008, col1: 'Hastelloy 276', col2: '', info1: '600', info2: '283',
            info3: '40', info4: '', info5: ''
          },
          {
            id: 10009, col1: 'Inconel X-750', col2: '', info1: '1103-1275', info2: '690-897',
            info3: '20', info4: '', info5: ''
          },
          {
            id: 10010, col1: 'Monel K-500', col2: 'Cold', info1: '965', info2: '690',
            info3: '17', info4: '', info5: '280'
          },
          {
            id: 10011, col1: 'Monel K-500', col2: 'Hot', info1: '965', info2: '690',
            info3: '19', info4: '', info5: '265'
          },
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 0, colspan: 2 },
          { row: 1, col: 1, rowspan: 2, colspan: 0 },
          { row: 3, col: 1, rowspan: 2, colspan: 0 },
          { row: 5, col: 1, rowspan: 0, colspan: 2 },
          { row: 6, col: 1, rowspan: 0, colspan: 2 },
          { row: 7, col: 1, rowspan: 0, colspan: 2 },
          { row: 8, col: 1, rowspan: 0, colspan: 2 },
          { row: 9, col: 1, rowspan: 2, colspan: 0 },
          { row: 9, col: 3, rowspan: 2, colspan: 0 },
          { row: 9, col: 4, rowspan: 2, colspan: 0 }
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
