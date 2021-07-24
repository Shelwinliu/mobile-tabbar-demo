import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/home/Home.vue')
const Catergory = () => import('./views/catergory/Catergory.vue')
const Cart = () => import('./views/cart/Cart.vue')
const Profile = () => import('./views/profile/Profile.vue')


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: ''
    }
  ]
})
