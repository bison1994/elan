import ElanWrappedInput from './input.vue'

const components = {
    ElanWrappedInput
}

export default function(Vue) {
    Object.keys(components).forEach(name => {
        Vue.component(name, components[name]);
    })
}
