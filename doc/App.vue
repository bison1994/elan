<template>
  <div id="app">
    <Elan :schema="schema" :model="detail" inline />
    {{ detail }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      schema: {
        a: {
          use: 'e-input',
          label: '名称',
          placeholder: 'xxx',
          col: 12,
          description: 'xxx',
          clearable: true,
          labelWidth: "50px",
          // special
          on: {},
          style: {},
          class: {},
          'v-if': (d) => d,
          'v-show': () => false,
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
