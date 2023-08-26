import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore('list', () => {
  // state
  const list = reactive([
    {
      name: 'John',
      hobby: 'Swimming',
    },
    {
      name: 'Ilham',
      hobby: 'reading',
    }
  ])

  // getter
  const getList = computed(() => list)

  // action
  function addList(params) {
    if (params) {
      list.push(params)
    }
  }

  return { list, getList, addList }
})