import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio'
import Navbar from '../components/Navbar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    components: {
      default: Inicio,
      header: Navbar
    }
  },
  {
    path: '/vue',
    name: 'Home',
    components:{
      default:Home,
      header: Navbar
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
