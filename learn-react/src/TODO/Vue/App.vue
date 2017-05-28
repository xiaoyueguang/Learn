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
      <div :class="{active: filters === ''}" @click="setFilters('')">全部</div>
      <div :class="{active: filters === 'done'}" @click="setFilters('done')">已完成</div>
      <div :class="{active: filters === 'undone'}" @click="setFilters('undone')">未完成</div>
    </div>
    <div class="lists">
      <div
        class="list"
        :class="{done: item.done}"
        v-for='(item, index) in items'
      >
        <div class="text">{{item.text}}</div>
        <div class="btn success" @click="done(item.id)">完成</div>
        <div class="btn" @click="del(item.id)">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input: '',
        oriItems: [],
        filters: '',
        id: 0
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
      setFilters (type) {
        this.filters = type
      },
      add () {
        if (this.input === '') return false
        this.oriItems.push({
          id: this.id++,
          done: false,
          text: this.input
        })
        this.input = ''
      },
      done (id) {
        let index = this.getIndex(id)
        this.oriItems[index].done = !this.oriItems[index].done
      },
      del (id) {
        let index = this.getIndex(id)
        this.oriItems.splice(index, 1)
        console.log(this.oriItems)
      },
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

