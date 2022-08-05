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
      <BasicTable :productdatas="spherical" />
    </div>
    <div class="mytable">
      <div class="title">Chemical Composition(max) (For Your Reference)</div>
      <!-- <div class="subtitle">Chemical Properties of Frequently-used Stainless Steel Material Grade</div> -->
      <!-- <BasicTable :productdatas="composition" /> -->
      <vxe-table
          border
          height="300"
          :column-config="{resizable: true}"
          :scroll-y="{enabled: false}"
          :span-method="mergeRowMethod"
          :data="mergeCol.tableData">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="key" title="Key"></vxe-column>
          <vxe-column field="content" title="Translate"></vxe-column>
          <vxe-column field="language" title="Language" :filters="[{label: '中文', value: 'zh_CN' }, {label: 'English', value: 'en_US'}]"></vxe-column>
        </vxe-table>
    </div>
    <div class="mytable">
      <div class="title">Related Products</div>
      <!-- <div class="subtitle">Long Products, Annealed</div> -->
      <ImageBox :lists="productList" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Infobox from '@/components/Infobox.vue'
import InfoImg from '@/assets/bg.jpeg'
import BasicTable from '@/components/product/BasicTable.vue'
import ImageBox from '@/components/ImageBox.vue'
import type { VxeTablePropTypes } from 'vxe-table'

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
  setup() {
    const mergeCol = reactive({
      tableData: [
        { id: 10001, key: 'app.label.name', content: '名称', language: 'zh_CN' },
        { id: 10002, key: 'app.label.name', content: 'Name', language: 'en_US' },
        { id: 10003, key: 'app.label.sex', content: '性别', language: 'zh_CN' },
        { id: 10004, key: 'app.label.sex', content: 'Sex', language: 'en_US' },
        { id: 10005, key: 'app.label.age', content: '年龄', language: 'zh_CN' },
        { id: 10006, key: 'app.label.age', content: 'Age', language: 'en_US' },
        { id: 10007, key: 'app.label.role', content: '角色', language: 'zh_CN' },
        { id: 10008, key: 'app.label.role', content: 'Role', language: 'en_US' },
        { id: 10009, key: 'app.label.address', content: '地址', language: 'zh_CN' },
        { id: 10010, key: 'app.label.address', content: 'Address', language: 'en_US' },
        { id: 10011, key: 'app.label.nickname', content: '昵称', language: 'zh_CN' },
        { id: 10012, key: 'app.label.nickname', content: 'Nickname', language: 'en_US' }
      ]
    })
    // 通用行合并函数（将相同多列数据合并为一行）
    const mergeRowMethod: VxeTablePropTypes.SpanMethod = ({ row, _rowIndex, column, visibleData }) => {
      const fields = ['key']
      const cellValue = row[column.field]
      if (cellValue && fields.includes(column.field)) {
        const prevRow = visibleData[_rowIndex - 1]
        let nextRow = visibleData[_rowIndex + 1]
        if (prevRow && prevRow[column.field] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.field] === cellValue) {
            nextRow = visibleData[++countRowspan + _rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    }
    return {
      mergeCol,
      mergeRowMethod
    }
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
          { field: 'specification', title: 'Specification' },
          { field: 'material', title: 'Material' },
          { field: 'col3', title: 'C(max)' },
          { field: 'col4', title: 'O(max)' },
          { field: 'col5', title: 'N(max)' },
          { field: 'col6', title: 'H(max)' },
          { field: 'col7', title: 'Fe(max)' },
          { field: 'col8', title: 'Al' },
          { field: 'col9', title: 'V' },
          { field: 'col10', title: 'Pd' },
          { field: 'col11', title: 'Ni' },
          { field: 'col12', title: 'Mo' }
        ],
        moredata: [
          {
            id: 10001, specification: 'ASTM B-348\nASTM F67', material: 'Gr1', col3: '0.08', col4: '0.18',
            col5: '0.03', col6: '0.015', col7: '0.20', col8: '-', col9: '-', col10: '-', col11: '-', col12: '-'
          },
          {
            id: 10002, specification: 'ASTM B-348\nASTM F67', material: 'Gr2', col3: '0.08', col4: '0.25',
            col5: '0.03', col6: '0.015', col7: '0.30', col8: '-', col9: '-', col10: '-', col11: '-', col12: '-'
          },
          {
            id: 10003, specification: 'ASTM B-348\nASTM F67', material: 'Gr3', col3: '0.08', col4: '0.35',
            col5: '0.05', col6: '0.015', col7: '0.30', col8: '-', col9: '-', col10: '-', col11: '-', col12: '-'
          },
          {
            id: 10004, specification: 'ASTM B-348\nASTM F67', material: 'Gr4', col3: '0.08', col4: '0.40',
            col5: '0.05', col6: '0.015', col7: '0.50', col8: '-', col9: '-', col10: '-', col11: '-', col12: '-'
          },
          {
            id: 10005, specification: 'ASTM B-348\nASTM F67', material: 'Gr5', col3: '0.08', col4: '0.20',
            col5: '0.05', col6: '0.015', col7: '0.40', col8: '5.5-6.75', col9: '3.5-4.5', col10: '-', col11: '-', col12: '-'
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
