import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: () => import('../views/PDFView.vue')
    },
    {
      path: '/pdf2',
      name: 'pdf2',
      component: () => import('../views/PDF2View.vue')
    },
    {
      path: '/iso',
      name: 'iso',
      component: () => import('../views/ISOView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // Titanium 
    {
      path: '/trb',
      name: 'trb',
      component: () => import('../views/TRBView.vue')
    },
    {
      path: '/tps',
      name: 'tps',
      component: () => import('../views/TPSView.vue')
    },
    {
      path: '/tpt',
      name: 'tpt',
      component: () => import('../views/TPTView.vue')
    },
    {
      path: '/tww',
      name: 'tww',
      component: () => import('../views/TWWView.vue')
    }
  ]
})

export default router
