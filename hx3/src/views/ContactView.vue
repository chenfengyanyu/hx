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
        <img src="../assets/contact2.jpeg" width="100%" />
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
      <!-- <BasicTable :productdatas="contactInfo" /> -->
      <ul class="card">
        <li>
          <img src="../assets/contact/add.png" />
          <div class="title">Adress</div>
          <div class="info">Tongda International Building, Hi-Tech Development Zone Xi'an Shaanxi 710065 China</div>
        </li>
        <li>
          <img src="../assets/contact/tel.png" />
          <div class="title">Tel</div>
          <div class="info">(+86)-134 8493 6283</div>
        </li>
        <li>
          <img src="../assets/contact/weixin.png" />
          <div class="title">WhatsApp</div>
          <div class="info">(+86)134 8493 6283</div>
        </li>
        <li>
          <img src="../assets/contact/email.png" />
          <div class="title">Email</div>
          <div class="info">
            <a href="mailto: sales@amctitanium.com">sales@amctitanium.com</a><br>
            <a href="mailto: info@amctitanium.com">info@amctitanium.com</a>
          </div>
        </li>
        <li>
          <img src="../assets/contact/web.png" />
          <div class="title">Web</div>
          <div class="info"><a href="http://www.amctitanium.com" target="_blank">www.amctitanium.com</a></div>
        </li>
      </ul>
      <!-- <table class="custom">
        <tr>
          <th width="30%">Adress</th>
          <th>Tel</th>
          <th>WhatsApp</th>
          <th>Email</th>
          <th>Web</th>
        </tr>
        <tr>
          <td>Tongda International Building, Hi-Tech Development Zone Xi'an Shaanxi 710065 China</td>
          <td>(+86)-134 8493 6283</td>
          <td>(+86)134 8493 6283</td>
          <td>
            <a href="mailto: sales@amctitanium.com">sales@amctitanium.com</a><br>
            <a href="mailto: info@amctitanium.com">info@amctitanium.com</a>
          </td>
          <td><a href="http://www.amctitanium.com" target="_blank">www.amctitanium.com</a></td>
        </tr>

      </table> -->
      <!-- <div class="title">Contact Us</div> -->
      <div class="alone"><img src="../assets/service/2.png" width="100%" /></div>
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
  /* filter: hue-rotate(348deg); */
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

.custom {
  width: 100%;
  border: 0.1rem solid #e5e6ebc4;
  border-collapse: collapse;
}

.custom th {
  background-color: #1e88e5;
  color: #fff;
  padding: 0.5rem;
  border: 0.05rem solid;
}

.custom td {
  padding: 0.5rem;
  text-align: center;
}

.custom a {
  color: #1e88e5;
}

.mytable .alone {
  /* width: 70%; */
  margin: 2rem auto;
}

.alone img {
  border-radius: 1rem;
}

.card {
  background: #1e88e5;
  color: #fff;
  display: flex;
  text-align: center;
  padding: 1rem 0;
  list-style-type: none;
}

.card li {
  flex: 1;
  border-right: 1px solid #ffffff78;
  padding: 0.5rem;
}

.card .info {
  color: #ffffffb0;
  font-size: 1.1rem;
}

.card .title{
  font-size: 1.8rem;
}

.card li>img {
  width: 5rem;
}
.card .info>a{
  color: #ffffffb0;
}
</style>
