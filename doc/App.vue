<template>
  <div id="app">
    <d-form :schema="schema" :model="detail" :inline="true" />
  </div>
</template>

<script>
import Vue from 'vue'
import render from './core/render'
import dForm from './lib/element-ui/d-form'
import dInput from './lib/element-ui/d-input'

Vue.component('v-render', render)
Vue.component('d-form', dForm)
Vue.component('d-input', dInput)

export default {
  name: 'App',
  data () {
    return {
      schema: {
        a: {
          is: 'd-input',
          label: '名称',
          placeholder: 'xxx',
          col: 12,
          description: 'xxx',
          clearable: true,
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
