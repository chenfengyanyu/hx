<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Stainless Steel Coil/Pate/Sheet" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ssp2/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Stainless Steel Coil/Pate/Sheet</div>
        <div class="subtitle">Stainless Steel Hot Cold Rolled Coil/ Stainless Steel Hot Hot Rolled Coil</div>
        <div class="desc">This specification covers chromium, chromium-nickel, and chromium-manganese-nickel stainless
          steel plate, sheet, and strip for pressure vessels and for general applications including architectural,
          building, construction, and aesthetic applications.
          ASTM A240 steel plate covers Austenitic Steels, Ferritic steels and Martensitic Steels. 304/340L, 316/316L is
          common stainless steel grades for many industries, Advanced Metal can provide you best ASTM A240 steel plate
          for your project, for we can supply product covers wide dimension range, any steel grade under this
          specification, series of surface finishes, and most importantly you will get high quality assurance and timely
          delivery.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Standard</div>
      <HighTable :productdatas="availableProducts" merge="grade" />
      <!-- <div class="subtitle">Surface: Polished (ground)surface</div> -->
    </div>
    <div class="mytable">
      <div class="title">Available Products</div>
      <HighTable :productdatas="composition" merge="standard" />
    </div>
    <div class="mytable">
      <div class="title">Thickness Tolerance</div>
      <div class="subtitle">ASTM A240 A480 steel sheet's thickness tolerance</div>
      <MergeTable :productdatas="composition2" merge="application" />
    </div>
    <!-- <div class="mytable">
      <div class="title">Clad Bar</div>
      <HighTable :productdatas="composition3" merge="" />
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
import MergeTable from '../components/product/MergeTable.vue'

export default defineComponent({
  components: {
    Infobox,
    BasicTable,
    ImageBox,
    HighTable,
    MergeTable
  },
  data() {
    return {
      InfoImg: InfoImg,
      availableProducts: {
        config: [
          { field: 'grade', title: ' ' },
          { field: 'astm', title: 'ASTM A240/A240M' },
          { field: 'jis', title: 'JIS G4305' },
          { field: 'aisi', title: 'AISI' },
          { field: 'en', title: 'EN' },
        ],
        moredata: [
          {
            id: 10001, grade: 'Grade', astm: 'S30100',
            jis: 'SUS301', aisi: '301', en: '1.4310'
          },
          {
            id: 10002, grade: 'Grade', astm: 'S30400',
            jis: 'SUS304', aisi: '304', en: '1.4301'
          },
          {
            id: 10003, grade: 'Grade', astm: 'S30403',
            jis: '', aisi: '304L', en: '1.4307'
          },
          {
            id: 10004, grade: 'Grade', astm: 'S31008',
            jis: 'SUS310S', aisi: '310S', en: '1.4845'
          },
          {
            id: 10005, grade: 'Grade', astm: 'S31603',
            jis: '', aisi: '316L', en: '1.4404'
          },
          {
            id: 10006, grade: 'Grade', astm: 'S32100',
            jis: 'SUS321', aisi: '321', en: '1.4541'
          },
          {
            id: 10007, grade: 'Grade', astm: 'S41008',
            jis: 'SUS410S', aisi: '410S', en: ''
          },
          {
            id: 10008, grade: 'Grade', astm: 'S43000',
            jis: 'SUS430', aisi: '430', en: '1.4016'
          },
          {
            id: 10009, grade: 'Grade', astm: 'S43932',
            jis: '', aisi: '', en: '1.4510'
          },
          {
            id: 10010, grade: 'Grade', astm: 'S444000',
            jis: 'SUS444', aisi: '444', en: '1.4521'
          },
          {
            id: 10011, grade: 'Grade', astm: 'S31266',
            jis: 'SUS316', aisi: '316', en: ''
          },
        ]
      },
      composition: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'standard', title: 'Standard' },
          { field: 'size', title: 'Size' },
          { field: 'grade', title: 'Grade' }
        ],
        moredata: [
          {
            id: 10001, products: 'Stainless Steel Cold Rolled Coil', standard: 'ASTM A240/ASTM A240M\nASTM A480/ ASTM A480M\nJISG4304/G4305/4312, AISI',
            size: 'Thick: 0.3-3mm\nWidth: 610-1500mm\nInner Dia: 610 or 508mm', grade: '304,304L,316,316L, 410,420,430, 2205'
          },
          {
            id: 10002, products: 'Stainless Steel Hot Rolled Coil', standard: 'ASTM A240/ASTM A240M\nASTM A480/ ASTM A480M\nJISG4304/G4305/4312, AISI',
            size: 'Thick: 2.5-10.0mm\nWidth: 610-2000mm\nInner Dia: 610mm', grade: '201,202,304,304L,316, 316L,2205'
          },
          {
            id: 10003, products: 'Stainless Steel Plate', standard: 'ASTM A240/ASTM A240M\nASTM A480/ ASTM A480M\nJISG4304/G4305/4312, AISI',
            size: 'Thickness: 15-85mm/3-8mm/8-60mm\nWidth: 914-1500mm/20-1500mm/30-1500mm\nLength: 3048,6000,10M/10M Max/6000mm Max', grade: '304,340L,316\n316L, 410,2205'
          },
          {
            id: 10004, products: 'Stainless Steel Sheet', standard: 'ASTM A240/ASTM A240M\nASTM A480/ ASTM A480M\nJISG4304/G4305/4312, AISI',
            size: 'Thick: 0.1-3.0 mm\nWidth: 914-1500mm\nLength: 300-6000 mm', grade: '310, 304, 304L, 316, 316L, 2205'
          },
        ]
      },
      composition2: {
        align: 'center',
        config: [
          { field: 'thick', title: 'Thickness' },
          { field: 'col1', title: 'Deviation' },
          { field: 'col2', title: 'Deviation' }
        ],
        moredata: [
          {
            id: 10001, thick: 'Thickness,in.[mm]', col1: 'Deviation, allowed for the specified width\n(w),±,in.[mm]', col2: 'Deviation, allowed for the specified width\n(w),±,in.[mm]'
          },
          {
            id: 10002, thick: 'Thickness,in.[mm]', col1: 'w≤60[1525]', col2: 'w>60[1525]'
          },
          {
            id: 10003, thick: '0.072[1.83]', col1: '0.006[0.15]', col2: '0.009[0.22]'
          },
          {
            id: 10004, thick: '0.072[1.83]-0.083[2.11]', col1: '0.007[0.18]', col2: '0.010[0.25]'
          },
          {
            id: 10005, thick: '0.083[2.11]-0.098[2.49]', col1: '0.008[0.20]', col2: '0.011[0.27]'
          },
          {
            id: 10006, thick: '0.098[2.49]-0.114[2.90]', col1: '0.009[0.23]', col2: '0.012[0.30]'
          },
          {
            id: 10007, thick: '0.114[2.90]-0.130[3.30]', col1: '0.011[0.27]', col2: '0.013[0.33]'
          },
          {
            id: 10008, thick: '0.130[3.30]-0.145[3.68]', col1: '0.012[0.30]', col2: '0.013[0.33]'
          },
          {
            id: 10009, thick: '0.145[3.68]-0.1875[4.76]', col1: '0.013[0.33]', col2: '0.014[0.35]'
          },
          {
            id: 10010, thick: '0.1875[4.76]-0.250[6.35]', col1: '-0.010[0.25],+0.020[0.50]', col2: '-0.010[0.25],+0.020[0.50]'
          },
          {
            id: 10011, thick: '0.250[6.35]-0.3125[7.94]', col1: '-0.010[0.25],+0.022[0.55]', col2: '-0.010[0.25],+0.022[0.55]'
          },
          {
            id: 10012, thick: '0.3125[7.94]', col1: '-0.010[0.25],+0.030[0.75]', col2: '-0.010[0.25],+0.030[0.75]'
          },
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 2, colspan: 0 },
          { row: 0, col: 2, rowspan: 0, colspan: 2 }
        ]
      },
      composition3: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'material', title: 'Material' },
          { field: 'specification', title: 'Specification' },
          { field: 'application', title: 'Application' }
        ],
        moredata: [
          {
            id: 10001, products: 'SS/Steel', material: 'Stainless Steel/Carbon steel',
            specification: 'NB/T47002.1, GB/T8165\nASME SA263, ASME SA264',
            application: 'Petro-Chemistry, Hydrometallurgy\nElectricity Station\nVacuum Purification of salt'
          },
          {
            id: 10002, products: 'Al/Steel', material: 'Al & Al alloy/Carbon Steel',
            specification: 'Q/XB1906', application: 'Chemical fertilizer, Ship, Aerospace'
          },
          {
            id: 10003, products: 'Al/SS', material: 'AI&AI/Stainless Steel',
            specification: 'Q/XB1906', application: 'Auto industry, Electricity\nVacuum purification of salt'
          },
          {
            id: 10004, products: 'Al/Cu', material: 'Al & Al alloy/Cu & Cu alloy',
            specification: 'Negotiation', application: 'Electricity industry'
          },
          {
            id: 10005, products: 'Cu/SS', material: 'Cu & Cu alloy/Carbon steel',
            specification: 'NB/T47002.4, GB13238\nASME B432', application: 'Chemical industry\nAuto industry, Metallurgy'
          },
          {
            id: 10006, products: 'Cu/SS', material: 'Cu & Cu alloy/Stainless Steel',
            specification: 'NB/T47002.4, GB13238', application: 'Electricity, Cooker'
          },
          {
            id: 10007, products: 'Ni/Steel', material: 'Ni & Ni alloy/Carbon steel',
            specification: 'NB/T47002.2 ASME SA265', application: 'Chlor-Alkali, Chemistry, Papermaking'
          },
          {
            id: 10008, products: 'Ni/SS', material: 'Ni & Ni alloy/Stainless Steel',
            specification: 'NB/T47002.2, ASME SA265', application: 'Chlor-Alkali, Chemistry, Papermaking'
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
