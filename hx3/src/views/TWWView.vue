<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Wire" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tww/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Titanium Wire</div>
        <div class="subtitle">Titanium Welding wire/ Titanium Wire for Additive Manufacturing/ Titanium Wire for
          Eyeglass</div>
        <div class="desc">Advanced Metals Co., Ltd is the professional manufacturer of Titanium Rod and Welding Wire
          according to Standards..Titanium wire is one of our king products. We have all the normal size in stock. Any
          quantity from 1kg to some tons are been delivered at once from our stock. We stocked large quantity of all
          kinds of raw material for producing the wire. We could delivery the goods to you in the short time. All of our
          titanium wire are produced by 100% titanium sponge. Not add any titanium scrap. We never received any quality
          complaint about the quality. So if you choose our titanium wire, you will never have any quality problem
          risks.
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Titanium Welding Wire</div>
      <BasicTable :productdatas="availableProducts" />
    </div>
    <div class="mytable">
      <div class="title">Available Diameter, Type</div>
      <BasicTable :productdatas="diameterProducts" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition AWS A5.16-2013 (For Your Reference)</div>
      <BasicTable :productdatas="composition" />
    </div>
    <div class="mytable">
      <div class="title">Titanium Wire for Additive Manufacturing (3Dprint, Spherical Powder/Micro powder)</div>
      <MergeTable1 :productdatas="composition2" />
    </div>
    <div class="mytable">
      <div class="title">Specification for Titanium Grades</div>
      <div class="subtitle">CP Titanium</div>
      <MergeTable :productdatas="composition3" />
    </div>
    <div class="mytable">
      <div class="title">Specification for Titanium Grades</div>
      <div class="subtitle">Alloy Titanium</div>
      <MergeTable :productdatas="composition4" />
    </div>
    <div class="mytable">
      <div class="title">Titanium Wire for Eyeglass</div>
      <div class="subtitle">Titanium and beta-titanium are also popular materials for eyeglass frames. Titanium eyewear
        can be produced in variety of colors for a clean, modern look with a hint of color, and it's
        hypoallergenic.<br><br>
        Three types of titanium are widely used in eyewear frames, Commercially Pure, Beta, and Memory Metals
        Beta titanium is an alloy of primarily titanium, but with the addition of vanadium and aluminum for additional
        strength and toughness, Due to a very high ration of strength to modulus, this metal provides the frame great
        elasticity, alloying the eyeglass to remain stable through long periods of intense activity, Beta titanium is
        strong, durable, lightweight, flexible, hypoallergenic and anticorrosive.<br><br>
        Memory metal is an alloy composed of roughly 50% titanium and 50% Nickel, it has amazing flexibility, Frames
        made from memory metal can be easily bent without breaking. They will return to their original form even after
        being far beyond what you would expect them to recover form.
      </div>
      <MergeTable :productdatas="composition5" />
    </div>
    <div class="mytable">
      <div class="title">Titanium Wire for Eyeglass</div>
      <div class="subtitle">Mechanical Properties</div>
      <MergeTable :productdatas="composition6" />
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

import ssrb1 from '@/assets/product/tww/1.jpg'
import ssrb2 from '@/assets/product/tww/2.jpg'
import ssrb3 from '@/assets/product/tww/3.jpg'
import ssrb4 from '@/assets/product/tww/4.jpg'
import ssrb5 from '@/assets/product/tww/5.jpeg'
import ssrb6 from '@/assets/product/tww/6.jpg'
import ssrb7 from '@/assets/product/tww/7.jpeg'
import ssrb8 from '@/assets/product/tww/8.jpeg'
import HighTable from '../components/product/HighTable.vue'
import MergeTable from '../components/product/MergeTable.vue'
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
          { field: 'type', title: 'Type' },
          { field: 'info', title: 'Info' }
        ],
        moredata: [
          {
            id: 10001, type: 'Specification', info: 'AWS A5.16-2013/ISO24034-2010/ASTM B-863/\nASTM B-348/PA-WS-018/Rev.3(Ti-6Al-4V SLO)'
          },
          {
            id: 10002, type: 'Material', info: 'ERTi-1, ERTi-2, ERTi-3, ERTi-4, ERTi-5, ERTi-7, ERTi-9, ERTi-12, ERTi-23'
          },
          {
            id: 10003, type: 'Diameter', info: '0.3mm—6.0mm'
          },
          {
            id: 10004, type: 'Spool', info: 'Precision Winding 1Kg/Mini spool, 5kg/Spool, 10kg/spool'
          },
          {
            id: 10005, type: 'Coil', info: '5-100kg/Coil'
          },
          {
            id: 10006, type: 'TIG', info: '914.4mm-3000mm'
          }
        ]
      },
      diameterProducts: {
        config: [
          { field: 'type', title: 'Dia' },
          { field: 'info08', title: '0.8mm' },
          { field: 'info09', title: '0.9mm' },
          { field: 'info10', title: '1.0mm' },
          { field: 'info12', title: '1.2mm' },
          { field: 'info16', title: '1.6mm' },
          { field: 'info20', title: '2.0mm' },
          { field: 'info24', title: '2.4mm' },
          { field: 'info32', title: '3.2mm' },
          { field: 'info50', title: '5.0mm' }
        ],
        moredata: [
          {
            id: 10001, type: 'Inch', info08: '0.03”', info09: '0.035”', info10: '0.04”', info12: '0.045”', info16: '1/16”',
            info20: '3/32”', info24: '1/8”', info32: '5/32', info50: ''
          },
          {
            id: 10002, type: 'TIG', info08: '', info09: '', info10: '', info12: '✓', info16: '✓',
            info20: '✓', info24: '✓', info32: '✓', info50: '✓'
          },
          {
            id: 10003, type: 'SPOOL', info08: '✓', info09: '✓', info10: '✓', info12: '✓', info16: '✓',
            info20: '✓', info24: '✓', info32: '', info50: ''
          },
          {
            id: 10004, type: 'COIL', info08: '', info09: '', info10: '', info12: '✓', info16: '✓',
            info20: '✓', info24: '✓', info32: '✓', info50: '✓'
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
      composition2: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Grades' },
          { field: 'col2', title: 'Specification' },
          { field: 'col3', title: 'Diameter Range' },
          { field: 'col4', title: 'Surface Treatment' },
          { field: 'col5', title: 'Packing/Weight' },
        ],
        moredata: [
          {
            id: 10000, col1: 'Grades', col2: 'Specification',
            col3: 'Diameter Range', col4: 'Surface Treatment', col5: 'Packing/Weight'
          },
          {
            id: 10001, col1: 'CP-Ti Gr1, Gr2, Gr3, Gr4', col2: 'ASTM B348/B863\nASTM F67/ISO5832-2',
            col3: 'Wire: Φ0.8- Φ6.35mm\nBar: Φ6.0-114.3mm\nCustomized acceptable',
            col4: 'Pickled ( Acid Etched)\nBurnished', col5: 'Wire: 30-50kgs/Coil\nBar:500-6000mm Length Or Customized'
          },
          {
            id: 10002, col1: 'Alloy-Ti Gr5 Ti-6AL4V\nGr23, Ti-6AL4V ELI', col2: 'ASTM B348/B863\nASTM F136/ISO5832-3',
            col3: '', col4: '', col5: ''
          },
          {
            id: 10003, col1: 'Features\nStability of quality characteristics.    Low micro-and macro shrinkage.   High Surface quality\nLower flaw depth parameters than required by standards.   Absence of foreign inclusions in the surface layer \nHydrogen content is lower than required standard.', col2: '', col3: '', col4: '', col5: ''
          }
        ],
        mergeRule: [
          { row: 1, col: 3, rowspan: 2, colspan: 0 },
          { row: 1, col: 4, rowspan: 2, colspan: 0 },
          { row: 3, col: 1, rowspan: 0, colspan: 5 }
        ]
      },
      composition3: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Specification' },
          { field: 'col2', title: '' },
          { field: 'col3', title: 'Chemical Composition %' },
          { field: 'col4', title: '' },
          { field: 'col5', title: '' },
          { field: 'col6', title: '' },
          { field: 'col7', title: '' },
          { field: 'col8', title: '' },
          { field: 'col9', title: 'Mechanical Properties' },
          { field: 'col10', title: '' },
          { field: 'col11', title: '' }
        ],
        moredata: [
          {
            id: 10000, col1: 'Specification', col2: '', col3: 'Chemical Composition %', col4: '', col5: '', col6: '',
            col7: '', col8: '', col9: 'Mechanical Properties', col10: '', col11: ''
          },
          {
            id: 10001, col1: 'ASTM\nB348/B863', col2: 'ASTM F67\nISO5832-2', col3: 'C', col4: 'N', col5: 'H', col6: 'O',
            col7: 'Fe', col8: 'Ti', col9: 'Rp 0.2\n(Mpa)', col10: 'Rm\n(Mpa)', col11: 'A5%'
          },
          {
            id: 10002, col1: 'Grade 1', col2: 'Grade 2', col3: '< 0.08', col4: '< 0.03', col5: '< 0.0125', col6: '< 0.06',
            col7: '< 0.20', col8: 'Balance', col9: '>170', col10: '>240', col11: '>24'
          },
          {
            id: 10003, col1: 'Grade 1', col2: 'Grade 1', col3: '< 0.08', col4: '< 0.03', col5: '< 0.0125', col6: '< 0.06',
            col7: '< 0.30', col8: 'Balance', col9: '>275', col10: '>345', col11: '>20'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 0, colspan: 2 },
          { row: 0, col: 3, rowspan: 0, colspan: 6 },
          { row: 0, col: 9, rowspan: 0, colspan: 3 }
        ]
      },
      composition4: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Specification' },
          { field: 'col2', title: '' },
          { field: 'col3', title: 'Chemical Composition %' },
          { field: 'col4', title: '' },
          { field: 'col5', title: '' },
          { field: 'col6', title: '' },
          { field: 'col7', title: '' },
          { field: 'col8', title: '' },
          { field: 'col9', title: '' },
          { field: 'col10', title: 'Mechanical Properties' },
          { field: 'col11', title: '' },
          { field: 'col12', title: '' }
        ],
        moredata: [
          {
            id: 10000, col1: 'Specification', col2: '', col3: 'Chemical Composition %', col4: '', col5: '', col6: '',
            col7: '', col8: '', col9: '', col10: 'Mechanical Properties', col11: '', col12: ''
          },
          {
            id: 10001, col1: 'ASTM\nB348/B863', col2: 'ASTM F136\nISO5832-3', col3: 'Al', col4: 'V', col5: 'C', col6: 'N',
            col7: 'H', col8: 'O', col9: 'Fe', col10: 'Rp 0.2\n(Mpa)', col11: 'Rm\n(Mpa)', col12: 'A5%'
          },
          {
            id: 10002, col1: 'Grade 5', col2: 'Grade 5', col3: '5.5-6.5', col4: '3.5-4.5', col5: '< 0.08', col6: '< 0.05',
            col7: '< 0.015', col8: '< 0.06', col9: '< 0.30', col10: '>170', col11: '>240', col12: '>24'
          },
          {
            id: 10003, col1: 'Grade 23', col2: 'Grade 23', col3: '5.5-6.75', col4: '3.5-4.5', col5: '< 0.08', col6: '< 0.05',
            col7: '< 0.012', col8: '< 0.06', col9: '< 0.25', col10: '>275', col11: '>345', col12: '>20'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 0, colspan: 2 },
          { row: 0, col: 3, rowspan: 0, colspan: 7 },
          { row: 0, col: 10, rowspan: 0, colspan: 3 }
        ]
      },
      composition5: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Grade' },
          { field: 'col2', title: 'CHEMICLS COMPOSITION ( %)' },
          { field: 'col3', title: '' },
          { field: 'col4', title: '' },
          { field: 'col5', title: '' },
          { field: 'col6', title: '' },
          { field: 'col7', title: '' },
          { field: 'col8', title: '' },
          { field: 'col9', title: '' },
          { field: 'col10', title: '' },
          { field: 'col11', title: '' },
        ],
        moredata: [
          {
            id: 10000, col1: 'Grade', col2: 'CHEMICLS COMPOSITION ( %)', col3: '', col4: '', col5: '', col6: '',
            col7: '', col8: '', col9: '', col10: '', col11: ''
          },
          {
            id: 10001, col1: '', col2: 'C', col3: 'Fe', col4: 'N', col5: 'O', col6: 'H',
            col7: 'Al', col8: 'V', col9: 'Sn', col10: 'Cr', col11: 'Ti'
          },
          {
            id: 10002, col1: 'Gr.2', col2: '0.08', col3: '0.30', col4: '0.03', col5: '0.25', col6: '0.015',
            col7: '', col8: '', col9: '', col10: '', col11: 'rem'
          },
          {
            id: 10003, col1: 'Gr.9', col2: '0.08', col3: '0.25', col4: '0.03', col5: '0.25', col6: '0.015',
            col7: '2.5-3.5', col8: '2.0-3.0', col9: '', col10: '', col11: 'rem'
          },
          {
            id: 10004, col1: 'Ti-15333', col2: '0.05', col3: '0.25', col4: '0.05', col5: '0.13', col6: '0.015',
            col7: '2.5-3.5', col8: '14.0-16.0', col9: '2.5-3.5', col10: '2.5-3.5', col11: 'rem'
          },
          {
            id: 10005, col1: 'Ti-422', col2: '0.10', col3: '1.00', col4: '0.05', col5: '0.20', col6: '0.015',
            col7: '3.5-4.5', col8: '20.0-23.0', col9: '', col10: '', col11: 'rem'
          }
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 2, colspan: 0 },
          { row: 0, col: 2, rowspan: 0, colspan: 10 }
        ]
      },
      composition6: {
        align: 'center',
        config: [
          { field: 'col1', title: 'Mechanical Properties' },
          { field: 'col2', title: 'Gr2' },
          { field: 'col3', title: '' },
          { field: 'col4', title: 'Gr9' },
          { field: 'col5', title: '' },
          { field: 'col6', title: 'Ti-15333' },
          { field: 'col7', title: '' },
          { field: 'col8', title: 'Ti-422' },
          { field: 'col9', title: '' }
        ],
        moredata: [
          {
            id: 10000, col1: 'Mechanical\nProperties', col2: 'Gr2', col3: '', col4: 'Gr9', col5: '', col6: 'Ti-15333',
            col7: '', col8: 'Ti-422', col9: ''
          },
          {
            id: 10001, col1: '', col2: 'Min', col3: 'Typical', col4: 'Min', col5: 'Typical', col6: 'Min',
            col7: 'Typical', col8: 'Min', col9: 'Typical'
          },
          {
            id: 10002, col1: 'UTS, Mpa', col2: '345', col3: '485', col4: '621', col5: '740', col6: '703',
            col7: '1000', col8: '640', col9: '980'
          },
          {
            id: 10003, col1: '0.2% PS , Mpa', col2: '275', col3: '350-450', col4: '483', col5: '607', col6: '690',
            col7: '1172', col8: '540', col9: '880'
          },
          {
            id: 10004, col1: 'Elongation on\n 2 in. %', col2: '20', col3: '28', col4: '15', col5: '17', col6: '12',
            col7: '7', col8: '10', col9: '7'
          },
          {
            id: 10005, col1: 'Charpy V\n notch impact', col2: '', col3: '40-82', col4: '', col5: '', col6: '',
            col7: '', col8: '', col9: ''
          },
          {
            id: 10006, col1: 'Elastic modules\n Gpa', col2: '', col3: '103', col4: '48', col5: '91', col6: '',
            col7: '', col8: '', col9: ''
          },
          {
            id: 10007, col1: 'Hardness\n HRC', col2: '', col3: '160-220HV', col4: '', col5: '15', col6: '',
            col7: '', col8: '220', col9: '350'
          }
          
        ],
        mergeRule: [
          { row: 0, col: 1, rowspan: 2, colspan: 0 },
          { row: 0, col: 2, rowspan: 0, colspan: 2 },
          { row: 0, col: 4, rowspan: 0, colspan: 2 },
          { row: 0, col: 6, rowspan: 0, colspan: 2 },
          { row: 0, col: 8, rowspan: 0, colspan: 2 }
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
