<template>
    <vxe-table border class="mytable-style" :header-cell-class-name="headerCellClassName"  :column-config="{ resizable: true }" :row-config="{ isHover: true }"
        :scroll-y="{ enabled: false }" :span-method="mergeRowMethod" :data="mergeCol.tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column v-for="item in configInfo" :field="item.field" :title="item.title"></vxe-column>
    </vxe-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

export default defineComponent({
    setup(props) {
        const { productdatas, merge} = toRefs(props)
        // console.log(merge.value);
        const mergeCol = reactive({
            tableData: productdatas.value.moredata
        })
        // 通用行合并函数（将相同多列数据合并为一行）
        const mergeRowMethod: VxeTablePropTypes.SpanMethod = ({ row, _rowIndex, column, visibleData }) => {
            const fields = [merge.value]
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
            mergeRowMethod
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
</style>
