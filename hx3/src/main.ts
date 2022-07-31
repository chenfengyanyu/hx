import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueStripeMenu from 'vue-stripe-menu'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {Tabs, Tab} from 'vue3-tabs-component'
import { useTable } from './plugins/vxe-table'
import VideoBackground from 'vue-responsive-video-background-player'
// import VuePdf from 'vue3-pdfjs'


import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueStripeMenu)
app.use(VueAwesomeSwiper, /* { default global options } */)

// https://github.com/xuliangzhan/vxe-table-demo
app.use(useTable)

// https://www.npmjs.com/package/vue3-tabs-component
app.component('tabs', Tabs)
app.component('tab', Tab)

// https://github.com/avidofood/vue-responsive-video-background-player#readme
app.component('video-background', VideoBackground)

// https://www.npmjs.com/package/vue3-pdfjs/v/latest
// app.use(VuePdf)

app.mount('#app')



