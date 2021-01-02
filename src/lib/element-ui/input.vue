<template>
    <el-form-item v-bind="p.formItemProps">
        <el-input v-bind="p.inputProps" @input="$emit('input', $event)" />
    </el-form-item>
</template>

<script>
export default {
    inheritAttrs: false,
    computed: {
        p () {
            const { label, prop, rules, labelWidth, ...rest } = this.$attrs
            return {
                formItemProps: {
                    label, prop, rules, labelWidth
                },
                inputProps: rest
            }
        }
    },
}
</script>
