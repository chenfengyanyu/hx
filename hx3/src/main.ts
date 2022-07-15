import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueStripeMenu from 'vue-stripe-menu'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueStripeMenu)
app.use(VueAwesomeSwiper, /* { default global options } */)

app.mount('#app')



