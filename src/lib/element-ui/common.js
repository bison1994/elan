export function splitAttrs (attrs) {
    const { label, prop, rules, labelWidth, required, error, showMessage, inlineMessage, size, ...rest } = attrs
    return {
        formItemProps: { label, prop, rules, labelWidth, required, error, showMessage, inlineMessage, size },
        formComponentProps: rest
    }
}
