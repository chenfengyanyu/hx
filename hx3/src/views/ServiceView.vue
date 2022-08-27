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
    <Infobox :imgsrc=InfoImg title="Service" />
    <div class="show">
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
    </div>
    <div class="mytable">
      <div class="title">Our service as follows</div>
      <div class="desc">1.we have the very professional International Logistics. Our shipping forwarder are professional
        in Clear the
        Custom and shipping. We could ship your orders in time. We will never delay the shipping and let our customers
        received their orders in the short time.</div>
      <div class="alone"><img src="../assets/service/2.png" width="100%" /></div>
      <div class="desc">2.We supply the Cutting, Forging, Rolling, Heat Treatment, Bright the surface for our customer.
        From above service, make our customer's business go smoothly.</div>
      <div class="alone"><img src="../assets/service/3.png" width="100%" /></div>
      <div class="desc">3.We contact the Third Party Testing inspection for our customers. If our customers want The
        Third Party inspection your products. Advanced Metals Co., Ltd could contact SGS. DNV, TUV inspection for our
        customers. The Third Party inspection your order and will write the Inspection report for you. This is another
        way to control the quality for you.</div>
      <div class="double">
        <img src="../assets/service/4.png" width="100%" />
        <img src="../assets/service/5.png" width="100%" />
      </div>
      <div class="desc">4.We Supply extra testing for your orders. If our customers want other extra testing for their
        order products. To make sure your products quality is good. We could supply the following products as follows:
        UT Testing , PT Testing , PMI Testing and other testing you need.
      </div>
      <div class="more">
        <img src="../assets/service/6.jpg" width="100%" />
        <img src="../assets/service/7.jpg" width="100%" />
        <img src="../assets/service/8.jpg" width="100%" />
      </div>
      <div class="title">Handle quality complaints from our customers</div>
      <div class="desc">We will solve the problems for our customer first when we received the Quality complaint. We
        want to establish the long time, Trust and friendly business relationship with you.
      </div>
      <div class="alone"><img src="../assets/service/9.png" width="100%" /></div>
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
  color: #1e88e5;
  font-size: 1.5rem;
  padding: 1rem 0 0;
  /* border-bottom: 1px dashed #86909c4a; */
}

.mytable .subtitle {
  color: #4a4a4a91;
  margin: 0 0 0.4rem;
}

.mytable .desc {
  font-size: 1.2rem;
  color: #000000c9;
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
</style>
