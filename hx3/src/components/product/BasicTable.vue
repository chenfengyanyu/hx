<template>
    <vxe-table border :row-config="{ isHover: true }" class="mytable-style"
        :header-cell-class-name="headerCellClassName" :data="demo1.tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column v-for="item in configInfo" :field="item.field" :title="item.title"></vxe-column>
    </vxe-table>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

export default defineComponent({
    setup(props) {
        const { productdatas } = toRefs(props)
        const demo1 = reactive({
            tableData: productdatas.value.moredata
        })

        const headerCellClassName: VxeTablePropTypes.HeaderCellClassName = ({ column }) => {
            // if (column.field === 'name') {
            //     return 'col-blue'
            // }
            // return null
            return 'col-blue'
        }
        
        return {
            demo1,
            configInfo: productdatas.value.config,
            headerCellClassName
        }
    },
    data() {
        // console.log('>>>>:',this.$props.productdatas);
        return {
            defaultDatas: this.$props.productdatas
        }
    },
    props: ['productdatas']
})
</script>

<style >
.mytable-style .vxe-header--column.col-blue {
    background-color: #1e88e5;
    color: #fff;
    text-align: center;
}
.mytable-style .vxe-body--column {
    text-align: center;
}
</style>
