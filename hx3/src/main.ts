import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueStripeMenu from 'vue-stripe-menu'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueStripeMenu)

app.mount('#app')



