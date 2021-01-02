import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import elan from '../src'

Vue.use(ElementUI);

Vue.config.productionTip = false

elan({
  use: 'element-ui'
}).then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})
