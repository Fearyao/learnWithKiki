<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="fetch">fetch and goto</button>
  </div>
</template>
<script>
import getRouter from '@/router/fetch'
import router from '@/router'
export default {
  methods: {
    fetch () {
      if (this.$store.state.fetched) {
        return
      }
      function _import (file) {
        return () => import('@/views/' + file + '.vue')
      }
      getRouter().then(res => {
        this.$store.commit('setState', { key: 'fetchRouter', value: res })
        const res1 = JSON.parse(JSON.stringify(res))
        res1.forEach(route => {
          route.component = _import(route.component)
        })
        this.$store.commit('setState', { key: 'allRouter', value: [...router.options.routes, ...res1] })
      })
    }
  }
}
</script>
