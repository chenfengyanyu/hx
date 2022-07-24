<script setup lang="ts">
import Infobox from '@/components/Infobox.vue'
import InfoImg from '@/assets/bg.jpeg'
import StainlessSteelBarVue from '@/components/product/StainlessSteelBar.vue';
</script>

<template>
  <main>
    <Infobox :imgsrc=InfoImg title="Product" />
    <div class="show">
      <div class="left">
        <img src="../assets/product/stainless-steel-round-bar/1.jpg" />
      </div>
      <div class="right">
        <div class="title">Stainless Steel Bar</div>
        <div class="subtitle">Stainless Steel Round Bar/ Flat Bar/ Hexagon Bar/Square Bar/ Angle Bar</div>
        <div class="desc">High quality stainless steel bar supplier, Competitive price, ISO system certification, Can
          accept any Third Party Testing inspection quality. Have 25000 tons inventory of stainless steel products every
          month, Can delivery within 5 days, 3 times quality detection before shipping
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Available Products</div>
      <StainlessSteelBarVue/>
    </div>
  </main>
</template>

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
  padding-bottom: 1rem;
  /* border-bottom: 1px dashed #86909c4a; */
}
</style>
