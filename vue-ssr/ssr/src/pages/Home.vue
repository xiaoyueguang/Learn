<template lang='pug'>
  div 首页
    router-link(to = '/about') 关于我们
    article(v-for = 'item, index in items', :key = 'index')
      h4 名称: {{item.titleCn}} / {{item.titleEn}}
      h5 演员: {{item.actorName1}}
      img(style = 'width: 100px;', :src = 'item.img')
</template>

<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  asyncData ({ store, route }) {
    return store.state.items.length > 0
      ? Promise.resolve()
      : store.dispatch('fetchItem')
  },
  data () {
    return {
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  watch: {},
  methods: {
  },
  async created () {
    // if (this.dataPromise) {
    //   console.log(this.dataPromise)
    // } else {
    //   await this.$store.dispatch('fetchItem')
    // }
  },
  mounted () {}
}
</script>
