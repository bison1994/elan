import Vue from 'vue'
import Elan from './core/Elan'
import ElanRender from './core/Render'

export default async function (opt = {}) {
    const { use } = opt
    const { default: plugin } = await import(`./lib/${use}/install.js`)
    switch (use) {
        case 'element-ui':
            Elan.use = 'el-form'
    }
    Vue.component("Elan", Elan)
    Vue.component("ElanRender", ElanRender)
    Vue.use(plugin)
}
