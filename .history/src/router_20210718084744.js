import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()

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
