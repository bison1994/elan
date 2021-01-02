import EInput from './input.vue'

const components = {
    EInput
}

export default function(Vue) {
    Object.keys(components).forEach(name => {
        Vue.component(name, components[name]);
    })
}
