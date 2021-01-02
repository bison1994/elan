<template>
    <el-form-item v-bind="$props">
        <el-input v-bind="$attrs" @input="$emit('input', $event)" />
    </el-form-item>
</template>

<script>
export default {
    inheritAttrs: false,
    props: ['label', 'prop']
}
</script>