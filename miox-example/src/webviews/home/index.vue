<template>
  <div class="home-page">
    <h1 class="center">Welcome to use miox</h1>
    <p class="center">Perfect framework showing...</p>
    <a href="/#/test">TEST</a>
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script>
import { Component, life } from "miox-vue2x-classify";

@Component
export default class HomePage {
  data () {
    return {
      home: 123
    }
  }
  @life
  mounted() {
    console.log("welcome to miox");
    window.aaa = this
  }
}
</script>