<script setup>
import { reactive, ref } from 'vue'
const list = reactive([
  {
    name: 'First List'
  },
  {
    name: 'Second List'
  }
]);
// ref input
const nameInput = ref('')
// regular function
// function addList(params) {
//   list.push({ name: params })
// }
// arrow function
const addList = (params) => {
  if (params) {
    list.push({ name: params })
    nameInput.value = ''
  }
}
</script>

<template>
  <h1>Test</h1>
    <!-- add v-model to integrate data binding with ref -->
    <!-- add event handler listener when keyup enter -->
    <!-- method handler with addList function -->
    <!-- event modifier .enter -->    
  <input
    v-model="nameInput"
    type="text"
    name="name"
    @keyup.enter="addList(nameInput)"
  />

  <ol>
    <template v-for="item in list" v-bind:key="item">
      <li>{{ item.name }}</li>
    </template>
  </ol>
</template>