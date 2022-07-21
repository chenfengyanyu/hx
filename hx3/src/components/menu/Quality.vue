<template>
  <div class="quality-dropdown-menu">
    <div class="imgbox"><img src="../../assets/package/1.jpeg" /></div>
    <div class="imgdesc">
      Products's package is an very important step during transportation. Professional packaging can
      avoid the damage in the transportation.
      Advanced Metals Co., Ltd, try our best to do every step more professional. We choose the good wooden box
      (Fumigation free box) to package our products. May be our package is cost more than other package, but this is
      worth cost. We want our customers order are safe during the shipping. We will try our best to avoid all the risks
      we could think.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "QualityDropdownMenu"
};
</script>

<style scoped>
.quality-dropdown-menu {
  display: flex;
  padding: 2rem;
}

.imgbox {
  flex: 1;
  text-align: right;
  padding-right: 3rem;
}

.imgdesc {
  flex: 1;
  font-size: 1.2rem;
  text-align: justify;
  padding-right: 8rem;
}
</style>