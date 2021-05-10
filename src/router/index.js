import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/Home.vue'
import product from '../views/Product.vue'
import profile from '../views/Profile.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/team',
    name: 'profile',
    component: profile
  },
  {
    path: '/Add_Product',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
