<template>
    <el-form-item v-bind="p.formItemProps">
        <el-input v-bind="p.formComponentProps" @input="$emit('input', $event)" />
    </el-form-item>
</template>

<script>
import { splitAttrs } from './common'
export default {
    inheritAttrs: false,
    computed: {
        p () {
            return splitAttrs(this.$attrs)
        }
    },
}
</script>
