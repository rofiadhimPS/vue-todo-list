<script setup>
// komunikasi dari parent ke children; props
defineProps({
  id: {
    type: String,
    default: 'id'
  },
  name: {
    type: String,
    default: 'name'
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  modelValue: {
    type: String,
    default: ''
  }
})
// komunikasi dari children ke parents; emit
defineEmits(['update:modelValue'])
</script>

<template>
    <label :for="id">{{ name }}</label>
  <input
    :id="id"
    class="input"
    type="text"
    :name="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="(e) => $emit('update:modelValue', e.target.value)"
  />
</template>

<style scoped>
.input {
  /* 2rem = 16px * 2 */
  margin-block-end: 1rem;
  width: 100%;
}
</style>