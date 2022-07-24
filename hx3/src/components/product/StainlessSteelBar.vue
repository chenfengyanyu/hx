<template>
    <vxe-table border :row-config="{ isHover: true }" class="mytable-style"
        :header-cell-class-name="headerCellClassName" :data="demo1.tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="shape" title="Stainless Steel Bar Shape"></vxe-column>
        <vxe-column field="type" title="Stainless Steel Bar Grade/Type"></vxe-column>
        <vxe-column field="size" title="Stainless Steel Bar Sizes"></vxe-column>
    </vxe-table>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

export default defineComponent({
    setup() {
        const demo1 = reactive({
            tableData: [
                { id: 10001, shape: 'Stainless Steel Flat Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A, Edge Conditioned, True Mill Edge', size: 'Thickness: 3.175mm - 50.8mm\nWidths: 12.7mm - 203.2mm' },
                { id: 10002, shape: 'Stainless Steel Half Round Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A', size: 'Diameter: 4.76mm - 19.3mm' },
                { id: 10003, shape: 'Stainless Steel Hexagon Bar', type: 'Grades: 303, 304/304L, 316/316L,2205\nType: Annealed, Cold Finished, Cond A', size: 'Diameter: 9.6mm - 76mm' },
                { id: 10004, shape: 'Stainless Steel Round Bar', type: 'Grades: 303, 304/304L, 316/316L, 410, 416, 440C, 13-8 , 15-5 , 17-4 (630), 17-4 H1150, 2205\nType: Accuracy, Annealed, BSQ, Coiled, Cold Finished, Cond A, Hot Rolled, Rough Turned, TGP, PSQ, Forged', size: 'Diameter: 3.175mm-304.8mm' },
                { id: 10005, shape: 'Stainless Steel Square Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A', size: 'Diameter: 3.175mm - 76.2mm' },
                { id: 10006, shape: 'Stainless Steel Angle Bar', type: 'Grades: 303, 304/304L, 316/316L, 2205\nType: Annealed, Cold Finished, Cond A', size: 'Thickness :2mm-16mm\nWidth: 15mm-94mm' }
            ]
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
            headerCellClassName
        }
    }
})
</script>

<style >
.mytable-style .vxe-header--column.col-blue {
    background-color: #1e88e5;
    color: #fff;
}
</style>
