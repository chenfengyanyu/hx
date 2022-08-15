<template>
  <main>
    <Infobox :imgsrc="InfoImg" title="Titanium Welding wire" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/tww/1.jpg" width="100%" />
      </div>
      <div class="right">
        <div class="title">Titanium Welding wire</div>
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
            id: 10001, type: 'Inch', info08: '0.03”',info09:'0.035”',info10:'0.04”',info12:'0.045”',info16:'1/16”',
            info20:'3/32”',info24:'1/8”',info32:'5/32',info50:''
          },
          {
            id: 10002, type: 'TIG', info08: '',info09:'',info10:'',info12:'✓',info16:'✓',
            info20:'✓',info24:'✓',info32:'✓',info50:'✓'
          },
          {
            id: 10003, type: 'SPOOL', info08: '✓',info09:'✓',info10:'✓',info12:'✓',info16:'✓',
            info20:'✓',info24:'✓',info32:'',info50:''
          },
          {
            id: 10004, type: 'COIL', info08: '',info09:'',info10:'',info12:'✓',info16:'✓',
            info20:'✓',info24:'✓',info32:'✓',info50:'✓'
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
            id: 10001, material: 'ERTi-1', chemical:'Ti99.8', cmax: '0.03', omax: '0.03-0.10',
            nmax: '0.012', hmax: '0.005', femax: '0.08', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10002, material: 'ERTi-2', chemical:'Ti99.6', cmax: '0.03', omax: '0.08-0.16',
            nmax: '0.015', hmax: '0.008', femax: '0.12', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10003, material: 'ERTi-3', chemical:'Ti99.5', cmax: '0.03', omax: '0.13-0.20',
            nmax: '0.02', hmax: '0.008', femax: '0.16', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10004, material: 'ERTi-4', chemical:'Ti99.3', cmax: '0.03', omax: '0.18-0.32',
            nmax: '0.025', hmax: '0.008', femax: '0.25', al: '', v: '', pd: '', ni: '', mo: ''
          },
          {
            id: 10005, material: 'ERTi-5', chemical:'TiAl6V4B', cmax: '0.05', omax: '0.12-0.20',
            nmax: '0.030', hmax: '0.015', femax: '0.22', al: '5.5-6.75', v: '3.5-4.5', pd: '', ni: '', mo: ''
          },
          {
            id: 10007, material: 'ERTi-7', chemical:'TiPd0.2A', cmax: '0.03', omax: '0.08-0.16',
            nmax: '0.015', hmax: '0.008', femax: '0.12', al: '', v: '', pd: '0.12-0.25', ni: '', mo: ''
          },
          {
            id: 10009, material: 'ERTi-9', chemical:'TiAl3V2.5A', cmax: '0.03', omax: '0.06-0.12',
            nmax: '0.012', hmax: '0.005', femax: '0.20', al: '2.5-3.5', v: '2.0-3.0', pd: '', ni: '', mo: ''
          },
          {
            id: 10012, material: 'ERTi-12', chemical:'TiNi0.7Mo0.3', cmax: '0.03', omax: '0.08-0.16',
            nmax: '0.015', hmax: '0.008', femax: '0.15', al: '', v: '', pd: '', ni: '0.6-0.9', mo: '0.2-0.4'
          },
          {
            id: 10023, material: 'TiAl6V4A', chemical:'TiAl3V2.5A', cmax: '0.03', omax: '0.03-0.11',
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
