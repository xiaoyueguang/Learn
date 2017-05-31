<template>
  <div class="list" :class="{done: item.done}">
    <div class="text">{{item.text}}</div>
    <div class="btn success" @click="$emit('done', item.id)">完成</div>
    <div class="btn" @click="$emit('del', item.id)">删除</div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>
