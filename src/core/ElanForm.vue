<script>
const ComponentNameMap = {
    input: 'ElanWrappedInput',
    select: 'ElanWrappedSelect',
    checkbox: 'ElanWrappedCheckbox',
    radio: 'ElanWrappedRadio',
}

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
                if: _if,
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

            if (_if && !_if(model)) {
                return null
            }
            
            /** for two way data binding */
            on.input = val => {
                model[prop] = val
            }

            return {
                use: ComponentNameMap[use],
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
        }).filter(v => v)

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
