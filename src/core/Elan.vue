<script>
export default {
    props: {
        schema: {
            type: Object,
            required: true
        },
        model: {
            type: Object,
            required: true
        }
    },
    render (h) {
        const { schema, model, $attrs } = this
        const children = Object.keys(schema).map(prop => {
            const config = schema[prop]
            const {
                use,
                class: _class,
                style,
                attrs,
                props,
                domProps,
                on = {},
                nativeOn,
                directives,
                scopedSlots,
                slot,
                key,
                ref,
                refInFor,
                ...rest
            } = config

            on.input = val => {
                model[prop] = val
            }

            return {
                use,
                attrs: {
                    prop,
                    value: model[prop],
                    ...rest,
                    ...attrs
                },
                class: _class,
                style,
                props,
                domProps,
                on,
                nativeOn,
                directives,
                scopedSlots,
                slot,
                key,
                ref,
                refInFor,
            }
        })
        return h("ElanRender", {
            attrs: {
                use: this.$options.use,
                children,
                props: {
                    model,
                    ...$attrs
                } 
            }
        })
    }
}
</script>
