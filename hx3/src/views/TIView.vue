<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Ti & Ti Alloy Clad plate" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tff/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Ti & Ti Alloy Clad plate</div>
        <!-- <div class="subtitle">Titanium Ring/ Disc/Other products as your drawing</div> -->
        <div class="desc">The clad plate is produced by bonding two or more metals together into a single steel sheet or
          plate. Titanium-Carbon steel clad plates combined the titanium and carbon steel material through the explosion
          and rolling process. The titanium and titanium alloy cladding make the metal plate more corrosion resistant,
          abrasive resistance and high temperature and pressure resistance.
          Titanium has been widely used in various chemical reaction vessels and heat exchanger materials because of its
          excellent corrosion resistance, but its disadvantage is high cost. Especially for the use as structural
          components, this problem is particularly obvious, And the effective solution is the use of titanium clad steel
          plate. The combination of titanium and ordinary steel is called titanium clad steel plate. It has the
          corrosion resistance of titanium and the strength of the ordinary steel plate as the structure. What matters
          most is that the overall cost can be reduced greatly.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium & Titanium Alloy Clad Plate</div>
      <BasicTable :productdatas="availableProducts" />
      <div class="subtitle">Surface: Polished (ground)surface</div>
      <div class="subtitle">Size: Thick 8mm-120mm x Width 3000mm x Length 8000mm</div>

    </div>
    <div class="mytable">
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
          { field: 'products', title: 'Products' },
          { field: 'material', title: 'Material' },
          { field: 'specification', title: 'Specification' },
          { field: 'application', title: 'Application' },
        ],
        moredata: [
          {
            id: 10001, products: 'Ti/Al', material: 'Ti & Ti alloy/Carbon steel',
            specification: 'GB/T8547,NB/T47002.3\nASTM B898', application: 'Petro-Chemistry, Electricity, Vacuum\nPurification of salt, Chlor-Alkali, ect'
          },
          {
            id: 10002, products: 'Ti/SS', material: 'Ti & Ti alloy/Stainless Steel',
            specification: 'GB/T8547,NB/T47002.3\nASTM B898', application: 'Petro-Chemistry, Chlor-Alkali,\nAerospace, Medicine industry, etc'
          },
          {
            id: 10003, products: 'Ti/Al', material: 'Ti & Ti alloy/Al & Al alloy',
            specification: 'Negotiation', application: 'Aerospace, Cooker, Hydrometallurgy etc'
          },
          {
            id: 10004, products: 'Ti/Cu', material: 'Ti & Ti alloy/ Cu & Cu alloy',
            specification: 'G/BT12769', application: 'Aerospace, Cooker, Hydrometallurgy etc'
          },
          {
            id: 10005, products: 'Ti/Ni', material: 'Ti & Ti alloy/Ni & Ni alloy',
            specification: 'Negotiation', application: 'Metallurgy, Chemical industry,etc'
          }
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
