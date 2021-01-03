<script>
export default {
    name: 'ElanRender',
    inheritAttrs: false,
    render (h) {
        var { use, children, ...rest } = this.$attrs
        if (!use || typeof use !== 'string') return null
        if (Object.prototype.toString.call(children) === '[object Object]') {
            children = [children]
        }
        if (typeof children === 'number' && !isNaN(children)) {
            children = String(children)
        }

        return h(
            use,
            { ...rest },
            Array.isArray(children)
                ? children.map(
                    ({ use, children, ...rest }) => h(
                        'ElanRender',
                        {
                            attrs: {
                                use,
                                children,
                                ...rest
                            }
                        }
                    )
                )
                : typeof children === 'string'
                    ? children
                    : null
        )
    }
}
</script>
