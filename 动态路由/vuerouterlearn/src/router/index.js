import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
// import store from '../store'
function _import (file) {
  return () => import('@/views/' + file + '.vue')
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]
store.commit('setState', { key: 'allRouter', value: routes })

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const { fetchRouter } = store.state
  if (fetchRouter.length) {
    if (!store.state.fetched) {
      const r = JSON.parse(JSON.stringify(fetchRouter))
      r.forEach(route => {
        route.component = _import(route.component)
      })
      router.addRoutes(r)
      store.commit('setState', { key: 'allRouter', value: [...router.options.routes, ...fetchRouter] })
      store.commit('setState', { key: 'fetched', value: true })
      next(to)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
