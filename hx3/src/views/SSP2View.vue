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
      <MergeTable :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Thickness Tolerance</div>
      <div class="subtitle">ASTM A480 cold rolled sheet/plate thickness tolerance</div>
      <MergeTable :productdatas="composition3" />
    </div>
    <div class="mytable">
      <div class="title">Thickness Tolerance</div>
      <div class="subtitle">ASTM A480 hot rolled sheet/plate thickness tolerance</div>
      <MergeTable :productdatas="composition4" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition</div>
      <!-- <div class="subtitle">ASTM A480 hot rolled sheet/plate thickness tolerance</div> -->
      <MergeTable :productdatas="composition5" />
    </div>
    <div class="mytable">
      <div class="title">Mechanical Property</div>
      <!-- <div class="subtitle">ASTM A480 hot rolled sheet/plate thickness tolerance</div> -->
      <MergeTable3 :productdatas="composition6" />
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
import MergeTable from '../components/product/MergeTable.vue'
import MergeTable3 from '../components/product/MergeTable3.vue'

export default defineComponent({
  components: {
    Infobox,
    BasicTable,
    ImageBox,
    HighTable,
    MergeTable,
    MergeTable3
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
        align: 'center',
        config: [
          { field: 'thick', title: 'Thickness' },
          { field: 'col1', title: 'Deviation' },
          { field: 'col2', title: 'Deviation' },
          { field: 'col3', title: 'Deviation' }
        ],
        moredata: [
          {
            id: 10001, thick: 'Thickness,in.[mm]', col1: 'Deviation, allowed for the specified width\n(w),±,in.[mm]', col2: 'Deviation, allowed for the specified width\n(w),±,in.[mm]',
            col3: 'Deviation, allowed for the specified width\n(w),±,in.[mm]'
          },
          {
            id: 10002, thick: 'Thickness,in.[mm]', col1: 'W≤40[1000]', col2: '40[1000]<w≤50[1300]', col3: '50[1300]<w≤84[2100]'
          },
          {
            id: 10003, thick: '0.012[0.30]', col1: '0.001[0.030]', col2: '-', col3: '-'
          },
          {
            id: 10004, thick: '0.016[0.40]', col1: '0.0015[0.04]', col2: '0.0015[0.04]', col3: '-'
          },
          {
            id: 10005, thick: '0.020[0.50]', col1: '0.0015[0.04]', col2: '0.0015[0.04]', col3: '-'
          },
          {
            id: 10006, thick: '0.024[0.60]', col1: '0.002[0.05]', col2: '0.002[0.05]', col3: '-'
          },
          {
            id: 10007, thick: '0.032[0.80]', col1: '0.002[0.05]', col2: '0.002[0.05]', col3: '-'
          },
          {
            id: 10008, thick: '0.040[1.00]', col1: '0.0025[0.06]', col2: '0.0025[0.06]', col3: '0.003[0.08]'
          },
          {
            id: 10009, thick: '0.047[1.20]', col1: '0.003[0.08]', col2: '0.003[0.08]', col3: '0.003[0.08]'
          },
          {
            id: 10010, thick: '0.059[1.50]', col1: '0.003[0.08]', col2: '0.003[0.08]', col3: '0.004[0.10]'
          },
          {
            id: 10011, thick: '0.079[2.00]', col1: '0.004[0.10]', col2: '0.004[0.10]', col3: '0.0045[0.11]'
          },
          {
            id: 10012, thick: '0.098[2.50]', col1: '0.004[0.10]', col2: '0.004[0.10]', col3: '0.005[0.13]'
          },
          {
            id: 10013, thick: '0.118[3.00]', col1: '0.005[0.13]', col2: '0.005[0.13]', col3: '0.006[0.15]'
          },
          {
            id: 10014, thick: '0.157[4.00]', col1: '0.007[0.17]', col2: '0.007[0.17]', col3: '0.007[0.17]'
          },
          {
            id: 10015, thick: '0.197[5.00]', col1: '0.007[0.17]', col2: '0.007[0.17]', col3: '0.0075[0.19]'
          },
          {
            id: 10016, thick: '0.236[6.00]', col1: '0.007[0.17]', col2: '0.008[0.20]', col3: '0.009[0.23]'
          },
          {
            id: 10017, thick: '0.3125[8.00]', col1: '0.007[0.17]', col2: '0.009[0.23]', col3: '0.010[0.25]'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 2, colspan: 0 },
          { row: 0, col: 2, rowspan: 0, colspan: 3 }
        ]
      },
      composition4: {
        align: 'center',
        config: [
          { field: 'thick', title: 'Thickness' },
          { field: 'col1', title: 'Deviation' },
          { field: 'col2', title: 'Deviation' },
          { field: 'col3', title: 'Deviation' }
        ],
        moredata: [
          {
            id: 10001, thick: 'Thickness,in.[mm]', col1: 'Deviation, allowed for the specified width\n(w),±,in.[mm]', col2: 'Deviation, allowed for the specified width\n(w),±,in.[mm]',
            col3: 'Deviation, allowed for the specified width\n(w),±,in.[mm]'
          },
          {
            id: 10002, thick: 'w≤84[2134]', col1: '84[2134]<w≤120[3048]', col2: '120[3048]<w≤144[3658]', col3: 'w>144[3658]'
          },
          {
            id: 10003, thick: 'Thickness + C, in.[mm]', col1: '-', col2: '-', col3: '-'
          },
          {
            id: 10004, thick: '0.055[1.35]', col1: '0.070[1.78]', col2: '-', col3: '-'
          },
          {
            id: 10005, thick: '0.045[1.14]', col1: '0.050[1.27]', col2: '0.085[2.16]', col3: '-'
          },
          {
            id: 10006, thick: '0.055[1.40]', col1: '0.060[1.52]', col2: '0.085[2.16]', col3: '0.090[2.29]'
          },
          {
            id: 10007, thick: '0.060[1.52]', col1: '0.065[1.65]', col2: '0.085[2.16]', col3: '0.100[2.54]'
          },
          {
            id: 10008, thick: '0.070[1.78]', col1: '0.075[1.90]', col2: '0.095[2.41]', col3: '0.115[2.92]'
          },
          {
            id: 10009, thick: '0.125[3.20]', col1: '0.150[3.80]', col2: '0.175[4.45]', col3: '0.200[5.08]'
          },
          {
            id: 10010, thick: '0.150[3.81]', col1: '0.160[4.06]', col2: '0.200[5.08]', col3: '0.225[5.72]'
          },
          {
            id: 10011, thick: '0.180[4.57]', col1: '0.200[5.08]', col2: '0.335[8.50]', col3: '0.355[9.02]'
          },
          {
            id: 10012, thick: '0.235[6.00]', col1: '0.255[6.48]', col2: '0.355[9.02]', col3: '0.435[11.0]'
          },
          {
            id: 10013, thick: '0.315[8.00]', col1: '0.335[8.50]', col2: '0.435[11.0]', col3: '0.550[14.0]'
          }
        ],
        mergeRule: [
          { row: 0, col: 2, rowspan: 0, colspan: 3 },
          { row: 2, col: 1, rowspan: 0, colspan: 4 }
        ]
      },
      composition5: {
        align: 'center',
        config: [
          { field: 'grade1', title: 'Grade' },
          { field: 'grade2', title: 'Grade' },
          { field: 'col2', title: 'ASTM A240 Chemical Composition' },
          { field: 'col3', title: 'ASTM A240 Chemical Composition' },
          { field: 'col4', title: 'ASTM A240 Chemical Composition' },
          { field: 'col5', title: 'ASTM A240 Chemical Composition' },
          { field: 'col6', title: 'ASTM A240 Chemical Composition' },
          { field: 'col7', title: 'ASTM A240 Chemical Composition' },
          { field: 'col8', title: 'ASTM A240 Chemical Composition' },
          { field: 'col9', title: 'ASTM A240 Chemical Composition' },
          { field: 'col10', title: 'ASTM A240 Chemical Composition' },
        ],
        moredata: [
          {
            id: 10001, grade1: 'Grade', grade2: '', col2: 'ASTM A240 Chemical Composition', col3: '', col4: '', col5: '', col6: '',
            col7: '', col8: '', col9: '', col10: ''
          },
          {
            id: 10002, grade1: 'ASTM(A240M)', grade2: 'Others(JIS)', col2: 'C', col3: 'Si', col4: 'Mn', col5: 'P', col6: 'S',
            col7: 'Ni', col8: 'Cr', col9: 'Mo', col10: 'Others'
          },
          {
            id: 10003, grade1: '304', grade2: 'SUS304', col2: '≤0.07', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '8.0/10.5', col8: '17.5/19.5', col9: '―', col10: 'N≤0.10'
          },
          {
            id: 10004, grade1: '304H', grade2: '', col2: '0.04/0.10', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '8.0/10.5', col8: '18.0/20.0', col9: '-', col10: ''
          },
          {
            id: 10005, grade1: '304L', grade2: 'SUS304L', col2: '≤0.030', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '8.0/12.0', col8: '17.5/19.5', col9: '-', col10: 'N≤0.10'
          },
          {
            id: 10006, grade1: '304N', grade2: 'SUS304N1', col2: '≤0.08', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '8.0/10.5', col8: '18.0/20.0', col9: '-', col10: 'N:0.10/0.16'
          },
          {
            id: 10007, grade1: '304LN', grade2: 'SUS304LN', col2: '≤0.030', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '8.0/12.0', col8: '18.0/20.0', col9: '-', col10: 'N:0.10/0.16'
          },
          {
            id: 10008, grade1: '309S', grade2: 'SUS309S', col2: '≤0.08', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '12.0/15.0', col8: '22.0/24.0', col9: '-', col10: ''
          },
          {
            id: 10009, grade1: '310S', grade2: 'SUS310S', col2: '≤0.08', col3: '≤1.50', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '19.0/22.0', col8: '24.0/26.0', col9: '-', col10: ''
          },
          {
            id: 10010, grade1: '316', grade2: 'SUS316', col2: '≤0.08', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '10.0/14.0', col8: '16.0/18.0', col9: '2.00/3.00', col10: 'N≤0.10'
          },
          {
            id: 10011, grade1: '316L', grade2: 'SUS316L', col2: '≤0.030', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '10.0/14.0', col8: '16.0/18.0', col9: '2.00/3.00', col10: 'N≤0.10'
          },
          {
            id: 10012, grade1: '316H', grade2: '', col2: '0.04/0.10', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '10.0/14.0', col8: '16.0/18.0', col9: '2.00/3.00', col10: ''
          },
          {
            id: 10013, grade1: '316LN', grade2: 'SUS316LN', col2: '≤0.030', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '10.0/14.0', col8: '16.0/18.0', col9: '2.00/3.00', col10: 'N:0.10/0.16'
          },
          {
            id: 10014, grade1: '317L', grade2: 'SUS317L', col2: '≤0.030', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '11.0/15.0', col8: '18.0/20.0', col9: '3.0/4.0', col10: 'N≤0.10'
          },
          {
            id: 10015, grade1: '317LN', grade2: 'SUS317LN', col2: '≤0.030', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '11.0/15.0', col8: '18.0/20.0', col9: '3.0/4.0', col10: 'N:0.10/0.22'
          },
          {
            id: 10016, grade1: '321', grade2: 'SUS321', col2: '≤0.08', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '9.0/12.0', col8: '17.0/19.0', col9: '―', col10: 'N≤0.10Ti:5ʷʢC+Nʣ/0.70'
          },
          {
            id: 10017, grade1: '347', grade2: 'SUS347', col2: '≤0.08', col3: '≤0.75', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '9.0/13.0', col8: '17.0/19.0', col9: '-', col10: 'Nb:10ʷC/1.00'
          },
          {
            id: 10018, grade1: 'N08904ʢ904L', grade2: 'SUS890L', col2: '≤0.020', col3: '≤1.00', col4: '≤2.00', col5: '≤0.045', col6: '≤0.035',
            col7: '23.0/28.0', col8: '19.0/23.0', col9: '4.00/5.00', col10: 'N≤0.10Cu:1.0/2.0'
          },
          {
            id: 10019, grade1: 'S31254', grade2: '', col2: '≤0.020', col3: '≤0.80', col4: '≤1.00', col5: '≤0.030', col6: '≤0.010',
            col7: '17.5/18.5', col8: '19.5/20.5', col9: '6.0/6.5', col10: 'N:0.18/0.25Cu:0.50/1.00'
          },
          {
            id: 10020, grade1: '', grade2: 'SUS317J2', col2: '≤0.06', col3: '≤1.50', col4: '≤2.00', col5: '≤0.045', col6: '≤0.030',
            col7: '12.00/16.00', col8: '23.00/26.00', col9: '0.50/1.20', col10: 'N:0.25/0.40'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 0, colspan: 2 },
          { row: 0, col: 3, rowspan: 0, colspan: 9 }
        ]
      },
      composition6: {
        align: 'center',
        config: [
          { field: 'grade1', title: 'Grade' },
          { field: 'col1', title: 'Mechanical Property' },
          { field: 'col2', title: 'Mechanical Property' },
          { field: 'col3', title: 'Mechanical Property' },
          { field: 'col4', title: 'Mechanical Property' },
          { field: 'col5', title: 'Mechanical Property' }
        ],
        moredata: [
          {
            id: 10001, grade1: 'Steel Grade', col1: 'Mechanical Property', col2: '', col3: '', col4: '', col5: '',
          },
          {
            id: 10002, grade1: 'ASTM(A240M)', col1: 'Tensile Properties', col2: '', col3: '', col4: 'Hardness', col5: '',
          },
          {
            id: 10003, grade1: 'ASTM(A240M)', col1: 'Yield Strength MPa', col2: 'Tensile Strength MPa',
            col3: 'Elongation%', col4: 'HBW', col5: 'HRBW',
          },
          {
            id: 10004, grade1: '304', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤201', col5: '≤92',
          },
          {
            id: 10005, grade1: '304H', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤201', col5: '≤92',
          },
          {
            id: 10006, grade1: '304L', col1: '≥170', col2: '≥485', col3: '≥40', col4: '≤201', col5: '≤92',
          },
          {
            id: 10007, grade1: '304N', col1: '≤201', col2: '≥550', col3: '≥30', col4: '≤217', col5: '≤95',
          },
          {
            id: 10008, grade1: '304LN', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10009, grade1: '309S', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10010, grade1: '310S', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10011, grade1: '316', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10012, grade1: '316L', col1: '≥170', col2: '≥485', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10013, grade1: '316H', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10014, grade1: '316LN', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10015, grade1: '317L', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10016, grade1: '317LN', col1: '≥240', col2: '≥550', col3: '≥40', col4: '≤217', col5: '≤95',
          },
          {
            id: 10017, grade1: '321', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤217', col5: '≤92',
          },
          {
            id: 10018, grade1: '347', col1: '≥205', col2: '≥515', col3: '≥40', col4: '≤201', col5: '≤92',
          }
        ],
        mergeRule: [
          { row: 0, col: 2, rowspan: 0, colspan: 5 },
          { row: 1, col: 1, rowspan: 2, colspan: 0 },
          { row: 1, col: 2, rowspan: 0, colspan: 3 },
          { row: 1, col: 5, rowspan: 0, colspan: 2 }
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
