<template>
    <v-render root="el-form" :children="computedSchema" :props="{
        model,
        ...$attrs
    }" />
</template>

<script>
export default {
    props: {
        schema: {
            required: true
        },
        model: {
            required: true
        }
    },
    computed: {
        computedSchema () {
            var { schema, model } = this
            return Object.keys(schema).map(key => {
                var { is, on, label, ...rest } = schema[key]
                on = Object.assign({
                    input (val) {
                        model[key] = val
                    }
                }, on)
                return {
                    is,
                    props: {
                        prop: key,
                        label,
                    },
                    attrs: {
                        value: model[key],
                        ...rest
                    },
                    on,
                }
            })
        }
    }
}
</script>