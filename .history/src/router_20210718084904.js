import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/home/Home.vue')
const Catergory = () => import('./views/')


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/Home'
    }
  ]
})
