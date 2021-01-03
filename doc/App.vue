<template>
  <div id="app">
    <ElanForm :schema="schema" :model="detail" inline />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      schema: {
        a: {
          use: 'input',
          if: (d) => d,
          // props
          label: '名称',
          placeholder: 'xxx',
          col: 12,
          description: 'xxx',
          clearable: true,
          labelWidth: "50px",
          // special
          on: {},
          style: {}
        }
      },
      detail: {
        a: '',
        b: ''
      }
    }
  },
  methods: {
    handle () {
      alert(1)
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
  margin-top: 60px;
}
.aaa {
  color: blue;
}
</style>
