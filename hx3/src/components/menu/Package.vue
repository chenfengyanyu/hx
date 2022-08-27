<template>
  <div class="package-dropdown-menu">
    <div class="imgdesc">
      Products's package is an very important step during transportation. Professional packaging can
      avoid the damage in the transportation.
      Advanced Metals Co., Ltd, try our best to do every step more professional. We choose the good wooden box
      (Fumigation free box) to package our products. May be our package is cost more than other package, but this is
      worth cost. We want our customers order are safe during the shipping. We will try our best to avoid all the risks
      we could think.
    </div>
    <div class="imageline">
      <ImageBox :lists="productList" />
    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageBox from '../ImageBox.vue'
import ssrb1 from '@/assets/package/1.jpeg'
import ssrb2 from '@/assets/package/2.jpeg'
import ssrb3 from '@/assets/package/3.jpeg'
import ssrb4 from '@/assets/package/4.jpeg'
import ssrb5 from '@/assets/package/5.jpeg'
import ssrb6 from '@/assets/package/6.jpeg'
import ssrb7 from '@/assets/package/1.jpeg'
import ssrb8 from '@/assets/package/5.jpeg'


export default defineComponent({
  components: {
    ImageBox
  },
  data() {
    return {
      productList: [ssrb1, ssrb2, ssrb3, ssrb4, ssrb5, ssrb6, ssrb7, ssrb8]
    }
  }

});
</script>

<style scoped>
.package-dropdown-menu {
  padding: 2rem;
}

.imgdesc {
  font-size: 1.2rem;
  margin: 0 1.5rem 1rem;
  text-align: justify;
}

.imageline {
  margin: 0 1.5rem;
}
</style>