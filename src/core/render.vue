<script>
export default {
    name: 'v-render',
    inheritAttrs: false,
    render (h) {
        var { root, children, ...rest } = this.$attrs
        if (!root || typeof root !== 'string') return null
        if (Object.prototype.toString.call(children) === '[object Object]') children = [children]
        if (typeof children === 'number' && !isNaN(children)) children = String(children)
        return h(
            root,
            { ...rest },
            Array.isArray(children)
                ? children.map(
                    ({ is, children, ...rest }) => h(
                        'v-render',
                        {
                            attrs: {
                                root: is,
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