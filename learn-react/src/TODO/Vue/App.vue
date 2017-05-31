<template>
  <div class = 'wrap'>
    <h1>TODO</h1>
    <input
      class="input"
      type="text"
      v-model='input'
      @keydown.enter='add'
    />
    <div class="filter">
      <filter-btn
        v-for = '(field, index) in fields'
        :key = 'index'
        :text = 'field.text'
        :field = 'field.field'
        :filters = 'filters'
        @click.native = 'setFilters(field.field)'
      ></filter-btn>
    </div>
    <div class="lists">
      <list
        v-for = '(item, index) in items'
        :key = 'index'
        :item = 'item'
        @done = 'done'
        @del = 'del'
      ></list>
    </div>
  </div>
</template>
<script>
  import List from './list.vue'
  import FilterBtn from './filter.vue'
  export default {
    components: {
      List, FilterBtn
    },
    data () {
      return {
        // 用以双向绑定
        input: '',
        // 原生数组
        oriItems: [],
        // 过滤字符
        filters: '',
        // ID
        id: 0,
        fields: [
          {field: '', text: '全部'},
          {field: 'done', text: '已完成'},
          {field: 'undone', text: '未完成'}
        ]
      }
    },
    computed: {
      items () {
        switch (this.filters) {
          case '':
            return this.oriItems
          case 'done':
            return this.oriItems.filter(({done}) => done)
          case 'undone':
            return this.oriItems.filter(({done}) => !done)
        }
      }
    },
    methods: {
      // 设置过滤
      setFilters (type) {
        this.filters = type
      },
      // 添加
      add () {
        if (this.input === '') return false
        this.oriItems.push({
          id: this.id++,
          done: false,
          text: this.input
        })
        this.input = ''
      },
      // 完成
      done (id) {
        let index = this.getIndex(id)
        this.oriItems[index].done = !this.oriItems[index].done
      },
      // 删除
      del (id) {
        let index = this.getIndex(id)
        this.oriItems.splice(index, 1)
      },
      // 获得序号
      getIndex (id_argu) {
        let index = -1
        this.oriItems.forEach(({id}, ind) => {
          if (id === id_argu) index = ind
        })
        return index
      }
    }
  }
</script>
<style src="../style.css"></style>