import Vue from 'vue'
import ElanForm from './core/ElanForm'
import ElanRender from './core/ElanRender'

export default async function (opt = {}) {
    const { use } = opt
    const { default: plugin } = await import(`./lib/${use}/install.js`)
    switch (use) {
        case 'element-ui':
            ElanForm.use = 'el-form'
    }
    Vue.component("ElanForm", ElanForm)
    Vue.component("ElanRender", ElanRender)
    Vue.use(plugin)
}
