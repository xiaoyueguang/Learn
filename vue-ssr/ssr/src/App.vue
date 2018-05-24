<template lang="pug">
  #app
    img(
      @click="alert",
      src = './assets/logo.png'
    )
    router-view
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    alert () {
      alert(1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
