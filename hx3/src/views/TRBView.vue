<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Round Bar" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/trb/1.jpg" />
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
          buy. If
          we have the stock titanium bar and we could ship the bar to you the same day or the next days. We also have no
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
      <BasicTable :productdatas="chemicalComposition" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Properties</div>
      <div class="subtitle">Long Products, Annealed</div>
      <BasicTable :productdatas="chemicalComposition" />
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
          { field: 'grade', title: 'Grade' },
          { field: 'spec', title: 'SPECIFICATIONS' }
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
      chemicalComposition: {
        config: [
          { field: 'col1', title: 'UNS' },
          { field: 'col2', title: 'ASTM' },
          { field: 'col3', title: 'EN' },
          { field: 'col4', title: 'JIS' },
          { field: 'col5', title: 'C%' },
          { field: 'col6', title: 'Mn%' },
          { field: 'col7', title: 'P%' },
          { field: 'col8', title: 'S%' },
          { field: 'col9', title: 'Si%' },
          { field: 'col10', title: 'Cr%' },
          { field: 'col11', title: 'Ni%' },
          { field: 'col12', title: 'Mo%' }
        ],
        moredata: [
          {
            id: 10003, col1: 'S30100', col2: '301', col3: '1.4319', col4: 'SUS301', col5: '≤0.15', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤1.00', col10: '16.0-18.0', col11: '6.0-8.0', col12: '-'
          },
          {
            id: 10004, col1: 'S30400', col2: '304', col3: '1.4301', col4: 'SUS304', col5: '≤0.08', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '18.0-20.0', col11: '8.0-10.5', col12: '-'
          },
          {
            id: 10005, col1: 'S30403', col2: '304L', col3: '1.4306', col4: 'SUS304L', col5: '≤0.03', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '18.0-20.0', col11: '8.0-12.0', col12: '-'
          },
          {
            id: 10006, col1: 'S30908', col2: '309S', col3: '1.4833', col4: 'SUS309S', col5: '≤0.08', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '22.0-24.0', col11: '12.0-15.0', col12: '-'
          },
          {
            id: 10007, col1: 'S31008', col2: '310S', col3: '1.4845', col4: 'SUS310S', col5: '≤0.08', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤1.50', col10: '24.0-26.0', col11: '19.0-22.0', col12: '-'
          },
          {
            id: 10008, col1: 'S31600', col2: '316', col3: '1.4401', col4: 'SUS316', col5: '≤0.08', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '16.0-18.0', col11: '10.0-14.0', col12: '2.0-3.0'
          },
          {
            id: 10009, col1: 'S31603', col2: '316L', col3: '1.4404', col4: 'SUS316L', col5: '≤0.03', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '16.0-18.0', col11: '10.0-14.0', col12: '2.0-3.0'
          },
          {
            id: 10010, col1: 'S31703', col2: '317L', col3: '1.4438', col4: 'SUS317L', col5: '≤0.03', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '18.0-20.0', col11: '11.0-15.0', col12: '3.0-4.0'
          },
          {
            id: 10011, col1: 'S32100', col2: '321', col3: '1.4541', col4: 'SUS321', col5: '≤0.08', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '17.0-19.00', col11: '9.0-12.0', col12: '-'
          },
          {
            id: 10012, col1: 'S34700', col2: '347', col3: '1.4550', col4: 'SUS347', col5: '≤0.08', col6: '≤2.00',
            col7: '≤0.045', col8: '≤0.03', col9: '≤0.75', col10: '17.0-19.00', col11: '9.0-13.0', col12: '-'
          },
          {
            id: 10013, col1: 'S32750', col2: 'SAD2507', col3: '1.4410', col4: '-', col5: '≤0.03', col6: '≤1.2',
            col7: '≤0.035', col8: '≤0.02', col9: '≤0.80', col10: '24.0-26.0', col11: '6.0-8.0', col12: '3.0-5.0'
          },
          {
            id: 10014, col1: 'S31803', col2: 'SAF2205', col3: '1.4462', col4: '-', col5: '≤0.03', col6: '≤2.0',
            col7: '≤0.03', col8: '≤0.02', col9: '≤1.00', col10: '21.0-23.0', col11: '4.0-6.5', col12: '2.5-3.5'
          },
          {
            id: 10015, col1: 'N08904', col2: '904L', col3: '1.4539', col4: '-', col5: '≤0.03', col6: '≤2.0',
            col7: '≤0.035', col8: '≤0.03', col9: '≤1.00', col10: '18.0-20.0', col11: '23.0-25.0', col12: '3.0-4.0'
          },
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
