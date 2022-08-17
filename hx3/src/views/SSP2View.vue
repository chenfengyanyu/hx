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
      <HighTable :productdatas="availableProducts" merge="grade"/>
      <!-- <div class="subtitle">Surface: Polished (ground)surface</div> -->
    </div>
    <!-- <div class="mytable">
      <div class="title">Refractory Metal clad plate</div>
      <HighTable :productdatas="composition" merge="application" />
    </div>
    <div class="mytable">
      <div class="title">Clad Bar</div>
      <HighTable :productdatas="composition2" merge="application" />
    </div>
    <div class="mytable">
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
          { field: 'grade', title: ' ' },
          { field: 'astm', title: 'ASTM A240/A240M' },
          { field: 'jis', title: 'JIS G4305' },
          { field: 'aisi', title: 'AISI' },
          { field: 'en', title: 'EN' },
        ],
        moredata: [
          {
            id: 10001, grade: 'Grade', astm: 'S30100',
            jis: 'SUS301', aisi: '301',en:'1.4310'
          },
          {
            id: 10002, grade: 'Grade', astm: 'S30400',
            jis: 'SUS304', aisi: '304',en:'1.4301'
          },
          {
            id: 10003, grade: 'Grade', astm: 'S30403',
            jis: '', aisi: '304L',en:'1.4307'
          },
          {
            id: 10004, grade: 'Grade', astm: 'S31008',
            jis: 'SUS310S', aisi: '310S',en:'1.4845'
          },
          {
            id: 10005, grade: 'Grade', astm: 'S31603',
            jis: '', aisi: '316L',en:'1.4404'
          },
          {
            id: 10006, grade: 'Grade', astm: 'S32100',
            jis: 'SUS321', aisi: '321',en:'1.4541'
          },
          {
            id: 10007, grade: 'Grade', astm: 'S41008',
            jis: 'SUS410S', aisi: '410S',en:''
          },
          {
            id: 10008, grade: 'Grade', astm: 'S43000',
            jis: 'SUS430', aisi: '430',en:'1.4016'
          },
          {
            id: 10009, grade: 'Grade', astm: 'S43932',
            jis: '', aisi: '',en:'1.4510'
          },
          {
            id: 10010, grade: 'Grade', astm: 'S444000',
            jis: 'SUS444', aisi: '444',en:'1.4521'
          },
          {
            id: 10011, grade: 'Grade', astm: 'S31266',
            jis: 'SUS316', aisi: '316',en:''
          },
        ]
      },
      composition: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'material', title: 'Material' },
          { field: 'specification', title: 'Specification' },
          { field: 'application', title: 'Application' }
        ],
        moredata: [
          {
            id: 10001, products: 'Zr/Steel', material: 'Zr&Zr alloy/all kinds of steel',
            specification: 'ASTM B898', application: 'Chemical industry\nAcetic acid'
          },
          {
            id: 10002, products: 'Ta/Steel', material: 'Ta& Ta alloy/ all kinds of steel',
            specification: 'ASTM B898', application: 'Chemical industry\nAcetic acid'
          },
          {
            id: 10003, products: 'Nb/steel', material: 'Nb&Nb alloy/all kinds of steel',
            specification: 'ASTM B898', application: 'Chemical industry\nAcetic acid'
          }
        ]
      },
      composition2: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'material', title: 'Material' },
          { field: 'specification', title: 'Specification' },
          { field: 'application', title: 'Application' }
        ],
        moredata: [
          {
            id: 10001, products: 'Ti/Cu', material: 'Ti & Ti alloy/Cu & Cu alloy',
            specification: 'GB/T12769', application: 'Chlor-Alkali industry\nCryogence engineering\nGalvanization, Metallurgy'
          },
          {
            id: 10002, products: 'Stainless steel/Cu', material: 'SS/Cu & Cu alloy',
            specification: 'GB/T12769', application: 'Chlor-Alkali industry\nCryogence engineering\nGalvanization, Metallurgy'
          },
          {
            id: 10003, products: 'Ni/Cu', material: 'Ni &Ni alloy/Cu & Cu alloy',
            specification: 'GB/T12769', application: 'Chlor-Alkali industry\nCryogence engineering\nGalvanization, Metallurgy'
          }
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
