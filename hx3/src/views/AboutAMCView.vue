<script lang="ts">
import { defineComponent } from 'vue'
import Infobox from '@/components/Infobox.vue'
import InfoImg from '@/assets/bg.jpeg'
import QualityVue from '@/components/menu/Quality.vue';
import BasicTable from '@/components/product/BasicTable.vue'

export default defineComponent({
  components: {
    Infobox,
    QualityVue,
    BasicTable
  },
  data() {
    return {
      InfoImg: InfoImg,
    }
  }
})

</script>

<template>
  <main>
    <Infobox :imgsrc=InfoImg title="About AMC" />
    <!-- <div class="show">
      <div class="left">
        <img src="../assets/service/1.png" width="100%" />
      </div>
      <div class="right">
        <div class="title">Service</div>
        <div class="desc">Service is an very important part during the sales. Over the years, Advanced Metals Co.,
          Ltd supply all kinds of service for our customers all over the world.
          Advanced Metals Co., Ltd solve all kinds of problems for our customers and doing many add values service make
          our business go smoothly.
        </div>
      </div>
    </div> -->
    <div class="mytable">
      <div class="hold"></div>
      <!-- <div class="title">Service</div> -->
      <div class="title">Welcome to Advanced Metals Co., Ltd</div>
      <div class="desc">Advanced Metals Co., Ltd, established in 1992 in Xi'an Shaanxi China. We have employs nearly 100
        people. We have 20 years of experiences in supply all kinds of metals products. We produce all kinds of titanium
        metal products, such as titanium bar, plate, sheet, wire, tube and pipe. We also stock and supply large quantity
        of other metal products such as Stainless steel, Nickel-alloy, Zr702, Niobium, Tantalum and Tungsten in plate,
        sheet, coil, bar, welded and seamless pipe/tube, wire, rod and forging products.
        <br><br>
        We supplied for Aerospace, industrials, defense, energy, automotive, medical, sports and customer applications
        for the customers around the world. We could supply you the best quality products with competitive prices. We
        also give all of our customers with the best services, let our customers without any risks in quality and
        shipping.<br><br>
        Nowdays, Advanced Metals Co., Ltd try our best to improve our service and management to supply the best quality
        metals products to our customers. No matter where you are. No mater you are large or small. We are honor all of
        our customers and metals products.<br><br>
        Advanced Metals Co., Ltd Welcome you as our sales agent in your local markets.
      </div>
      <div class="alone"><img src="../assets/about/1.webp" width="100%" /></div>
    </div>
  </main>
</template>

<style scoped>
.show {
  margin: 3rem 1.5rem;
  display: flex;
}

.show .left {
  flex: 1.3;
  margin-right: 1.2rem;
  overflow: hidden;
  padding: 0;
}

.left img {
  height: 23rem;
  border-radius: 0.5rem;
  filter: hue-rotate(348deg);
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
  text-align: center;
  color: #1e88e5;
  font-size: 2rem;
  padding: 1rem 0 0;
  /* border-bottom: 1px dashed #86909c4a; */
}

.mytable .subtitle {
  color: #4a4a4a91;
  margin: 0 0 0.4rem;
}

.mytable .desc {
  font-size: 1.5rem;
  color: #000000a3;
  width: 70%;
  text-align: justify;
  margin: 1rem auto 0;
}

.mytable .alone {
  width: 70%;
  margin: 2rem auto;
}


.double {
  width: 70%;
  display: flex;
  margin: 0 auto;
}

.alone img,
.double img {
  border-radius: 1rem;
}

.mytable .more {
  display: flex;
}

.more img {
  flex: 1;
  width: 30%;
  border-radius: 1rem;
  margin: 1rem;
}

.mytable .hold {
  height: 4rem;
}
</style>
