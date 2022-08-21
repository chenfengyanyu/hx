<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Stainless Steel Filler Wire" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/ssfw/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Stainless Steel Filler Wire</div>
        <!-- <div class="subtitle">Stainless Steel Round Bar/ Flat Bar/ Hexagon Bar/Square Bar/ Angle Bar</div> -->
        <div class="desc">We stocked large quantity of all kinds of stainless Steel Wire for our customers. We could
          delivery to you in very short time after order confirmation.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Stainless Forged Flanges</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">AWS A5.9, Chemical Composition Max Wt%</div>
      <BasicTable :productdatas="composition" />
    </div>
     <div class="mytable">
      <div class="title">AWS A5.9, Chemical Composition Max Wt%</div>
      <BasicTable :productdatas="composition1" />
    </div>
    <!-- 
    
    <div class="mytable">
      <div class="title">Stainless Steel Forged Fittings</div>
      <MergeTable :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Stainless Steel Cast Fittings (Threaded/Screwed)</div>
      <BasicTable :productdatas="composition3" />
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
          { field: 'type', title: 'Type' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          {
            id: 10001, type: 'Standard', info: 'AWS A5.9 A5.9M-2017, ASME SFA 5.9'
          },
          {
            id: 10002, type: 'Grade', info: 'SS ER308H, SS ER308L, SS ER308LSi, SS ER308LMo,SS ER309L SS ER310,  SS ER312,SS ER316L,  SS ER316LSi, SS ER347, SS ER2209, SS ER2594'
          },
          {
            id: 10003, type: 'Soft Wire Diameter Range', info: '0.6mm-2.3mm'
          },
          {
            id: 10004, type: 'Hard Wire Diameter Range', info: '0.3mm-3.0mm'
          },
          {
            id: 10005, type: 'Diameter', info: '.035”, .045”, 1/16”, 3/32”, 1/8”, 5/32”'
          },
          {
            id: 10006, type: 'Length', info: '36" (914mm) Customized'
          },
          {
            id: 10007, type: 'Form', info: 'TIG Wire, MIG Wire'
          }
        ]
      },
      composition: {
        config: [
          { field: 'aws', title: 'AWS A5.9' },
          { field: 'c', title: 'C' },
          { field: 'mn', title: 'Mn' },
          { field: 'si', title: 'Si' },
          { field: 'fe', title: 'Fe' },
          { field: 'cr', title: 'Cr' },
          { field: 'mo', title: 'Mo' },
          { field: 'ni', title: 'Ni' },
          { field: 'n', title: 'N' },
          { field: 's', title: 'S' },
          { field: 'p', title: 'P' },
          { field: 'cu', title: 'Cu' }

        ],
        moredata: [
          {
            id: 10000, aws: 'ER308', c: '0.08',mn:'1.0-2.5',si:'0.3-0.65',fe:'Bal',cr:'19.5-22',mo:'0.75',ni:'9-11',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10001, aws: 'ER308H', c: '0.04-0.08',mn:'1.0-2.5',si:'0.3-0.65',fe:'Bal',cr:'19.5-22',mo:'0.50',ni:'9.0-11.0',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10002, aws: 'ER308L', c: '0.03',mn:'1.0-2.5',si:'0.3-0.65',fe:'Bal',cr:'19.5-22',mo:'0.75',ni:'9.0-11',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10003, aws: 'ER308Lsi', c: '0.03',mn:'1.0-2.5',si:'0.65-1.0',fe:'Bal',cr:'19.5-22',mo:'0.75',ni:'9.0-11',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10004, aws: 'ER309L', c: '0.03',mn:'1.0-2.5',si:'0.3-0.65',fe:'Bal',cr:'23-25',mo:'0.75',ni:'12-14',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10005, aws: 'ER309Lsi', c: '0.03',mn:'1.0-2.5',si:'0.65-1.0',fe:'Bal',cr:'23-25',mo:'0.75',ni:'12-14',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10006, aws: 'ER310', c: '0.08-0.15',mn:'1.0-2.5',si:'0.30-0.65',fe:'Bal',cr:'25.0-28.0',mo:'0.75',ni:'20-22.5',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10007, aws: 'ER312', c: '0.15',mn:'1.0-2.5',si:'0.3-0.65',fe:'Bal',cr:'28.0-32.0',mo:'0.754',ni:'8.0-10.5',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10008, aws: 'ER316L', c: '0.03',mn:'2.0-3.0',si:'0.30-0.65',fe:'Bal',cr:'18.0-20.0',mo:'1.0-2.5',ni:'11.0-14.0',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10009, aws: 'ER316Lsi', c: '0.03',mn:'1.0-2.5',si:'0.65-1.0',fe:'Bal',cr:'18.0-20.0',mo:'2.0-3.0',ni:'11.0-14.0',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10010, aws: 'ER347', c: '0.08',mn:'1.0-2.5',si:'0.30-0.65',fe:'Bal',cr:'19.0-21.5',mo:'0.75',ni:'9.0-11.0',n:'',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10011, aws: 'ER2209', c: '0.03',mn:'0.50-2.0',si:'0.90',fe:'Bal',cr:'21.5-23.5',mo:'2.50-3.50',ni:'7.50-9.50',n:'0.08-0.20',s:'0.03',p:'0.03',cu:'0.75'
          },
          {
            id: 10012, aws: 'ER2594', c: '0.03',mn:'2.5',si:'1.0',fe:'',cr:'24.0-27.0',mo:'2.5-4.5',ni:'8.0-10.5',n:'0.20-0.30',s:'0.02',p:'0.03',cu:'1.5'
          }
        ]
      },
      composition1: {
        config: [
          { field: 'products', title: 'Products' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          {
            id: 10000, products: '308L ER308L', info: 'For low carbon 18Cr-8Ni stainless such as ISI 304'
          },
           {
            id: 10001, products: '308H ER308H', info: 'Suitable for welding AISI 304 and 308H steel, good strength at high temperature due to higher carbon content.'
          },
           {
            id: 10002, products: '308LSi ER308LSi', info: 'Weldability and fluidity are better than 308L, Good crack and corrosion resistance due to moderate ferrite content.'
          },
           {
            id: 10003, products: '316L ER316L', info: 'A general purpose wire for welding AISI 316L, and equivalent grades.'
          },
           {
            id: 10004, products: '316LSi ER316LSi', info: 'A general purpose wire for welding AISI 316L, and equivalent grades. High silicon content for minimal spatter and weld metal fluidity.'
          },
           {
            id: 10005, products: '309L ER309L', info: 'Good crack and corrosion resistance due to moderate ferrite content, superior corrosion at 90c due to more Ni and Cr content.'
          },
           {
            id: 10006, products: '309LSi ER309LSi', info: 'Weldability and fluidity are better than 309L'
          },
           {
            id: 10007, products: '310 ER310 A 25%Cr 20%', info: 'Ni wire for welding AISI 310s steels and dissimilar metals, also suitable for non magnetic application.'
          },
           {
            id: 10008, products: '347Si ER347Si', info: 'A general purpose wire for welding AISI321, 347, and equivalent grades, High silicon content for minimal spatter, and weld fluidity.'
          },
           {
            id: 10009, products: '312 ER310', info: 'For 29 Cr-9Ni stainless steels, dissimilar metal welding, it is suitable for, clad steel, stainless steel sheet linings, alloy steel with high hardenability and used as buffer layer before hardfacing.'
          },
           {
            id: 10010, products: '2209 ER2209', info: 'A Duplex type stainless steel wire, used for welding 22CR/9Ni type materials, higher strength and excellent resistance to pitting and stress corrosion cracking.'
          },
           {
            id: 10011, products: '2594 ER2594', info: 'A Super Duplex type wire used for welding of 25/10/5 material.'
          }
          
        ]
      },
      composition3: {
        config: [
          { field: 'standards', title: 'Type' },
          { field: 'asme', title: 'Info' }
        ],
        moredata: [
          {
            id: 10000, standards: 'Threads', asme: 'DIN 2999, ISO 7/1, ISO 228, NPT, BSPT, BSP'
          },
          {
            id: 10001, standards: 'Production Process', asme: 'investment casting'
          },
          {
            id: 10002, standards: 'Materials', asme: '304/304L, 316/316L'
          }
        ]
      },
      composition5: {
        align: 'left',
        config: [
          { field: 'standard', title: 'Standards' },
          { field: 'info1', title: 'Info' },
          { field: 'info2', title: 'Info' },

        ],
        moredata: [
          {
            id: 10001, standard: 'Standards', info1: 'ASME B16.5, ASME B16.47, API 6A, EN 1092-1, BS 4504, BS 10, DIN, JIS, GOST.', info2: ''
          },
          {
            id: 10002, standard: 'Materials', info1: 'Stainless Steel', info2: 'A182 F1, F5, F9, F11, F22, F91\nA105, A350 LF1/LF2/LF3, A694 F42/46/52/56/60/65/70\nA182 F304/304L, F316/316L, F321, F321H, F317L, F310, F347'
          },
          {
            id: 10003, standard: 'Materials', info1: 'Duplex and Super Duplex', info2: 'ASTM/ASME A/SA 182 F44, F45, F51, F53, F55, F60, F61\nS31803, S32205, S32550, S31254, SMO254, S32750, S32760, S32950'
          },
          {
            id: 10004, standard: 'Sizes', info1: 'NPS 1/2 ~ NPS 120 (DN 15 ~ DN 3000)', info2: ''
          },
          {
            id: 10005, standard: 'Types', info1: 'weld neck, slip on, blind, socket weld, threaded, lap joint, spectacle,\npaddle, long weld neck, spacer, orifice, reduced, plate.', info2: ''
          },
          {
            id: 10006, standard: 'Pressure Ratings', info1: 'Class 150, 300, 400, 600, 900, 1500, 2500', info2: ''
          },
        ],
        mergeRule: [
          { row: 0, col: 2, rowspan: 0, colspan: 2 },
          { row: 1, col: 1, rowspan: 2, colspan: 0 },
          { row: 3, col: 2, rowspan: 0, colspan: 2 },
          { row: 4, col: 2, rowspan: 0, colspan: 2 },
          { row: 5, col: 2, rowspan: 0, colspan: 2 }
        ]
      },
      composition2: {
        align: 'left',
        config: [
          { field: 'standard', title: 'Standards' },
          { field: 'info1', title: 'Info' },
          { field: 'info2', title: 'Info' },

        ],
        moredata: [
          {
            id: 10001, standard: 'Standards', info1: 'ASME B16.11, MSS SP97, MSS SP79, MSS SP83, MSS SP95.', info2: ''
          },
          {
            id: 10002, standard: 'Materials', info1: 'Stainless Steel', info2: 'ASTM / ASME A/SA 182 F 304, 304L, 304H, 309H, 310H, 316, 316H, 316L, 316 LN, 317, 317L, 321, 321H, 347, 347H'
          },
          {
            id: 10003, standard: 'Materials', info1: 'Duplex and Super Duplex', info2: 'ASTM / ASME A/SA 182 F44, F45, F51, F53, F55, F60, F61'
          },
          {
            id: 10004, standard: 'Sizes', info1: '1/2″ (DN15) ~ 4″ (DN100)', info2: ''
          },
          {
            id: 10005, standard: 'End Connections', info1: 'Butt weld (BW), socket weld (SW), threaded (THD)', info2: ''
          },
          {
            id: 10006, standard: 'Types', info1: 'elbow, tee, reducer, cross, cap, coupling, half coupling, boss, couplet, street elbows, plug, bushing, nipple, swaged nipple, union, insert, bull plug, weld outlet, socket outlet, threaded outlet, nipolet', info2: ''
          },
          {
            id: 10007, standard: 'Pressure Ratings', info1: 'Class 2000, 3000, 6000, 9000', info2: ''
          },
        ],
        mergeRule: [
          { row: 0, col: 2, rowspan: 0, colspan: 2 },
          { row: 1, col: 1, rowspan: 2, colspan: 0 },
          { row: 3, col: 2, rowspan: 0, colspan: 2 },
          { row: 4, col: 2, rowspan: 0, colspan: 2 },
          { row: 5, col: 2, rowspan: 0, colspan: 2 },
          { row: 6, col: 2, rowspan: 0, colspan: 2 }
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
