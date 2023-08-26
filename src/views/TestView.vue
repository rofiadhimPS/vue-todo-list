<script setup>
const list = [
  {
    name: 'First List',
  },
  {
    name: 'Second List',
  }
];
</script>

<template>
  <h1>Test</h1>

  <ol>
    <template v-for="item in list" v-bind:key="item">
      <li>{{ item.name }}</li>
    </template>
  </ol>
</template>