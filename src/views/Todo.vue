<template>
  <div class="hello">
    <span class="p-float-label">
	<Input id="username" type="text" v-model="value" />
  <Button>Add</Button>
  
<TodoList v-for=" GetTodoList in  GetTodoList" :key="GetTodoList.id" :Title="GetTodoList.title" :Description="GetTodoList.description" />
  
  
</span>
  </div>
  
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { onMounted } from 'vue'
import TodoList from '../components/TodoList'
export default {
  name: 'Todo',
  components: {
   TodoList
  },
 
  setup () {
     const store = useStore()
     onMounted(() => {
      store.dispatch('fetchTodo')
     })
     return {
       GetTodoList: computed(() => store.getters.GetTodoList)
    
       
     }
    
  }
  // ,
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
