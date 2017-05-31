<template>
  <div
    :class = '{active: filters === field}'
  >
    {{text}}
  </div>
</template>

<script>
  export default {
    props: ['field', 'text', 'filters']
  }
</script>

