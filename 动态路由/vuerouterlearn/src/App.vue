<template>
  <div id="app">
    <div id="nav">
      <span v-for="(route,index) in router" :key="index">
       <router-link  :to='route.path' >{{route.name}}</router-link> |
      </span>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    router () {
      return this.$store.state.allRouter
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
