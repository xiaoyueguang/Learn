<template>
  <div class="home-page">
    This is Test Page
    <a href="/#/">首页</a>
  </div>
</template>

<script>
import { Component, life } from "miox-vue2x-classify";
@Component
export default class TestPage {
  data () {
    return {
      home: 123456
    }
  }
  @life
  mounted() {
    console.log("welcome to test");
    window.bbb = this
  }
}
</script>