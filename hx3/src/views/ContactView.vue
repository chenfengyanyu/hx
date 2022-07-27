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
      contactInfo: {
        config: [
          { field: 'adress', title: 'Adress' },
          { field: 'tel', title: 'Tel' },
          { field: 'app', title: 'WhatsApp' },
          { field: 'email', title: 'Email' },
          { field: 'web', title: 'Web' }
        ],
        moredata: [
          {
            id: 10001,
            adress: 'Tongda International Building, Hi-Tech Development Zone Xi\'an Shaanxi 710065 China',
            tel: '(+86)-134 8493 6283',
            app: '(+86)134 8493 6283',
            email: 'sales@amctitanium.com\ninfo@amctitanium.com',
            web: 'www@amctitanium.com'
          },
        ]
      }
    }
  }
})

</script>

<template>
  <main>
    <Infobox :imgsrc=InfoImg title="Contact" />
    <div class="show">
      <div class="left">
        <img src="../assets/contact.jpeg" />
      </div>
      <div class="right">
        <div class="title">ADVANCED METALS CO., LTD</div>
        <div class="subtitle">We welcome the Sales Agent in your local markets</div>
        <div class="desc">Please contact with us if you have any metals products. We produce, stocked and supply
          titanium, stainless steel, Nickell alloy. Zr702, Niobium. Tantalum, Tungsten, carbon steel products. Our
          metals products include the bar. Plate & sheet. Tube & pipe. Wire, coil and forged metals products.
          So please send me your enquiry (with products standard, Grade, Size, Quantity and other request you need).
          We will reply you within half an hour after received your enquiry. We respect every enquiry and order no
          matter
          the order is small or large. We will try our best to supply the best quality and service to every customer.
          We are looking for the sales agent in your local markets. We give you the best price, quality and delivery
          time to you. We avoid all the risks to you. You could sales our products in your local markets
        </div>
      </div>
    </div>
    <div class="mytable">
      <div class="title">Contact Us</div>
      <!-- <div class="subtitle">Long Products, Annealed</div> -->
      <BasicTable :productdatas="contactInfo" />
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
  font-size: 1.5rem;
  padding: 1rem 0 0;
  /* border-bottom: 1px dashed #86909c4a; */
}

.mytable .subtitle {
  color: #4a4a4a91;
  margin: 0 0 0.4rem;
}
</style>
