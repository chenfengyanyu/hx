<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Round Bar" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/trb/1.jpg" width="100%"/>
      </div>
      <div class="right">
        <div class="title">Titanium Round Bar</div>
        <div class="subtitle">Titanium Industry Bar/ Medical Bar/ 3D Printing Spherical Powder Bar/ Military Bar</div>
        <div class="desc">Advanced Metals Co., Ltd is manufacture and export large quantities of all kinds of titanium
          Bar and Rod to the world markets every year. Our titanium bar products system includes: Commercially bar and
          6AL-4V bar including round, square and rectangular bars. Titanium bars are forged by the 2500KN, 3150t
          Hydraulic forging press or GMF Precision forging machine or followed by rolled and swaged. All of our titanium
          bar are produce by 100% titanium sponge. Never add any titanium scrap to make sure the quality is very good.
          We welcome any Third Party to inspect our quality. We also do the UT testing and PMI testing to make sure
          The quality will never have any problem risks. We will supply an MTC together with our titanium bar.
          <br>Most of time, we have stock the material for all the kinds of titanium bar that our Clients usually to
          buy.
          If we have the stock titanium bar and we could ship the bar to you the same day or the next days. We also have
          no
          minimum order requirements, so whether you need a single round bar or a major shipment, we can provide the
          materials you need. If you have any other need of request. Such as cut the bar, or want to ship by the
          Express. What you do is just tell me and you could wait the bar in your office
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium Bar</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Titanium Bar for 3D Printing Spherical Powder</div>
      <!-- <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div> -->
      <BasicTable :productdatas="spherical" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition(max) (For Your Reference)</div>
      <!-- <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div> -->
      <HighTable :productdatas="composition" merge="spec"/>
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property (For Reference)</div>
      <HighTable :productdatas="composition2" merge="spec"/>
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
          { field: 'grade', title: 'Grade' },
          { field: 'spec', title: 'Specifications' }
        ],
        moredata: [
          { id: 10001, grade: 'Ti6AL4V; 6AL4VELI, TC4', spec: 'ASTM B348; AMS 4928; AMS 6931; ASTM F136 ; ISO 5832-3;\nAMS 4967; AMS 4965; AMS-T-9047; AMS 6931; GB/T 3620.1; GB/T 2965; BS 2TA11' },
          { id: 10002, grade: 'Ti-6242', spec: 'AMS4975, AMS-T-9047' },
          { id: 10003, grade: 'Ti-6242; TC19', spec: 'AMS4981; AMS-T-9047; GB/T 2965' },
          { id: 10004, grade: 'TA 15 Ti-6.5Al-1Mo-1V-2Zr', spec: 'GB/T 3620.1; GB/T 2965' },
          { id: 10005, grade: 'CP-GRADES 1,2,3,4,7,12', spec: 'ASTM B348; GB/T 3620.1; GB/T 2965, ASTM F67; ISO5832-2' },
          { id: 10006, grade: 'Size', spec: 'Dia.4mm-350mm x L 6000mm' }
        ]
      },
      spherical: {
        config: [
          { field: 'type', title: 'Type' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          { id: 10003, type: 'Application', info: 'Titanium Spherical Powder, Additive Manufacturing Powders' },
          { id: 10004, type: 'Specification', info: 'ASTM F136, ISO5832-3, ASTM B348' },
          { id: 10005, type: 'Designation', info: 'Grade 5, Grad5 ELI, Ti-6A-4V, Grade7, Grade9, Grade12' },
          { id: 10006, type: 'Diameter', info: 'Φ2mm-Φ250mm' },
          { id: 10007, type: 'Length', info: 'Max.6000mm' }
        ]
      },
      mechanicalProperties: {
        config: [
          { field: 'col1', title: 'Type No.' },
          { field: 'col2', title: 'Tensile Strength, Ksi' },
          { field: 'col3', title: 'Yield Strength, Ksi' },
          { field: 'col4', title: 'Elongation in 1 inch,%' },
          { field: 'col5', title: 'Reduction of Area,%' },
          { field: 'col6', title: 'Brinell Hardness' }
        ],
        moredata: [
          { id: 10001, col1: '301', col2: '110', col3: '40', col4: '60', col5: '70', col6: '165' },
          { id: 10002, col1: '302', col2: '90', col3: '40', col4: '55', col5: '70', col6: '150' },
          { id: 10003, col1: '303', col2: '90', col3: '35', col4: '50', col5: '55', col6: '160' },
          { id: 10004, col1: '304', col2: '85', col3: '35', col4: '55', col5: '70', col6: '150' },
          { id: 10005, col1: '304L', col2: '80', col3: '30', col4: '55', col5: '70', col6: '140' },
          { id: 10006, col1: '316', col2: '85', col3: '35', col4: '60', col5: '70', col6: '150' },
          { id: 10007, col1: '316L', col2: '78', col3: '30', col4: '55', col5: '65', col6: '145' },
          { id: 10008, col1: '321', col2: '85', col3: '35', col4: '55', col5: '65', col6: '150' },
          { id: 10009, col1: '410', col2: '75', col3: '40', col4: '35', col5: '70', col6: '155' },
          { id: 100010, col1: '416', col2: '75', col3: '40', col4: '30', col5: '65', col6: '155' },
          { id: 100011, col1: '420', col2: '95', col3: '50', col4: '25', col5: '-', col6: '241' },
          { id: 100012, col1: '2205', col2: '90', col3: '65', col4: '25', col5: '-', col6: '217' },
        ]
      },
      composition: {
        config: [
          { field: 'spec', title: 'Specification' },
          { field: 'material', title: 'Material' },
          { field: 'cmax', title: 'C(max)' },
          { field: 'omax', title: 'O(max)' },
          { field: 'nmax', title: 'N(max)' },
          { field: 'hmax', title: 'H(max)' },
          { field: 'femax', title: 'Fe(max)' },
          { field: 'al', title: 'Al' },
          { field: 'v', title: 'V' },
          { field: 'pd', title: 'Pd' },
          { field: 'ni', title: 'Ni' },
          { field: 'mo', title: 'Mo' }
        ],
        moredata: [
          {
            id: 10001, spec: 'ASTM B-348\nASTM F67', material: 'Gr1', cmax: '0.08', omax: '0.18',
            nmax: '0.03', hmax: '0.015', femax: '0.20', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10002, spec: 'ASTM B-348\nASTM F67', material: 'Gr2', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10003, spec: 'ASTM B-348\nASTM F67', material: 'Gr3', cmax: '0.08', omax: '0.35',
            nmax: '0.05', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '', mo: ''
          },
           {
            id: 10004, spec: 'ASTM B-348\nASTM F67', material: 'Gr4', cmax: '0.08', omax: '0.40',
            nmax: '0.05', hmax: '0.015', femax: '0.50', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10005, spec: 'ASTM B-348\nASTM F67', material: 'Gr5', cmax: '0.08', omax: '0.20',
            nmax: '0.05', hmax: '0.015', femax: '0.40', al: '5.5-6.75', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10006, spec: 'ASTM B-348\nASTM F67', material: 'Gr7', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '0.12-0.25', ni: '', mo: ''
          },
          {
            id: 10007, spec: 'ASTM B-348\nASTM F67', material: 'Gr12', cmax: '0.08', omax: '0.25',
            nmax: '0.03', hmax: '0.015', femax: '0.30', al: '', v: '', pd: '', ni: '0.6-0.9', mo: '0.2-0.4'
          },
           {
            id: 10008, spec: 'ASTM B-348\nASTM F67', material: 'Gr23', cmax: '0.08', omax: '0.13',
            nmax: '0.03', hmax: '0.0125', femax: '0.25', al: '5.5-6.5', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10009, spec: 'ASTM F136', material: 'Gr5 ELI', cmax: '0.08', omax: '0.13',
            nmax: '0.05', hmax: '0.012', femax: '0.25', al: '5.5-6.5', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10010, spec: 'AMS4928', material: 'Gr5', cmax: '0.08', omax: '0.2',
            nmax: '0.05', hmax: '0.0125', femax: '0.30', al: '5.5-6.5', v: '3.5-4.5', pd: '', ni: '', mo: ''
          }
        ]
      },
      composition2: {
        config: [
          { field: 'spec', title: 'Specification' },
          { field: 'material', title: 'Material' },
          { field: 'tensile', title: 'Tensile Strength (min)\nMpa' },
          { field: 'yield', title: 'Yield Strength (min)\nMpa' },
          { field: 'elongation', title: 'Elongation %\n(min)' },
          { field: 'area', title: 'Reduction Area %\n(min)' }
        ],
        moredata: [
          {
            id: 10001, spec: 'ASTM B-348\nASTM F67', material: 'Gr1', tensile: '240', yield: '170',
            elongation: '24', area: '30'
          },
          {
            id: 10002, spec: 'ASTM B-348\nASTM F67', material: 'Gr2', tensile: '345', yield: '275',
            elongation: '20', area: '30'
          },
          {
            id: 10003, spec: 'ASTM B-348\nASTM F67', material: 'Gr3', tensile: '450', yield: '380',
            elongation: '18', area: '30'
          },
          {
            id: 10004, spec: 'ASTM B-348\nASTM F67', material: 'Gr4', tensile: '550', yield: '483',
            elongation: '15', area: '25'
          },
           {
            id: 10005, spec: 'ASTM B-348\nASTM F67', material: 'Gr5', tensile: '895', yield: '828',
            elongation: '10', area: '25'
          },
          {
            id: 10006, spec: 'ASTM B-348\nASTM F67', material: 'Gr7', tensile: '345', yield: '275',
            elongation: '20', area: '30'
          },
          {
            id: 10007, spec: 'ASTM B-348\nASTM F67', material: 'Gr12', tensile: '483', yield: '345',
            elongation: '18', area: '25'
          },
          {
            id: 10008, spec: 'ASTM B-348\nASTM F67', material: 'Gr23', tensile: '828', yield: '759',
            elongation: '10', area: '15'
          },
          {
            id: 10009, spec: 'ASTM F136', material: 'Gr5ELI', tensile: '860', yield: '795',
            elongation: '10', area: '20'
          },
          {
            id: 10010, spec: 'AMS 4928', material: 'Gr5', tensile: '931-896', yield: '862-827',
            elongation: '10', area: '10'
          },
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
