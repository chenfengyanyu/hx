<template>
    <vxe-table border class="mytable-style merge-style-1" :header-cell-class-name="headerCellClassName"  :column-config="{ resizable: true }" :row-config="{ isHover: true }"
        :scroll-y="{ enabled: false }" :show-header="false" :align="mergeCol.allAlign" :data="mergeCol.tableData" :merge-cells="mergeCol.mergeCells">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column v-for="item in configInfo" :field="item.field" :title="item.title"></vxe-column>
    </vxe-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

export default defineComponent({
    setup(props) {
        const { productdatas} = toRefs(props)
        // console.log(merge.value);
        const mergeCol = reactive({
            allAlign: productdatas.value.align as VxeTablePropTypes.Align,
            tableData: productdatas.value.moredata,
            mergeCells: productdatas.value.mergeRule  as VxeTablePropTypes.MergeCells
        })
        
        const headerCellClassName: VxeTablePropTypes.HeaderCellClassName = ({ column }) => {
            // if (column.field === 'name') {
            //     return 'col-blue'
            // }
            // return null
            return 'col-blue'
        }

        return {
            mergeCol,
            configInfo: productdatas.value.config,
            headerCellClassName,
        }
    },
    data() {
        // console.log('>>>>:',this.$props.productdatas);
        return {
            defaultDatas: this.$props.productdatas,
        }
    },
    props: ['productdatas','merge']
})
</script>

<style >
.mytable-style .vxe-header--column.col-blue {
    background-color: #1e88e5;
    color: #fff;
    /* text-align: center; */
}
.merge-style-1 .vxe-body--row:nth-child(1){
    background-color: #1e88e5;
    color: #fff;
}
</style>
