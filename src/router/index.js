import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bomboniere',
  },
  {
    path: '/bomboniere',
    name: 'bomboniere',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bomboniere.vue')
  },
  {
    path: '/destaque',
    name: 'Destaque',

    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  },
  {
    path: '/filmes',
    name: 'filmes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Filmes.vue')
  },

  {
    path: '/sobre',
    name: 'sobre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre')
  },

  {
    path: '/promocao',
    name: 'promocao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Promocao' )
  },
  {
    path: '/cartaz',
    name: 'cartaz',
    component: () => import(/* webpackChunkName: "about" */ '../views/lancamento' )
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
