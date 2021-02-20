<template>
  <div class="hello">
    <span class="p-float-label">
	<Input id="username" type="text" v-model="title" required />
  <p>{{title}}</p>
  <Button @click="onSubmit">Add</Button>
   <Field  v-for=" GetTodoList in  GetTodoList" :key="GetTodoList.id" legend="Godfather I" :toggleable="true">
	<h3>{{GetTodoList.title}}</h3>
    <p>{{GetTodoList.time}}</p>
    <Button   @click="deleteTodo(GetTodoList.id)">X</Button>
</Field>

  
  
</span>
  </div>
  
</template>

<script>

import { useStore } from 'vuex'
import { computed } from 'vue'
import { onMounted } from 'vue'
import { ref } from "vue";
export default {
  name: 'Todo',
  components: {
  
  },
 
  setup () {
    let title = ref("");
    //dispatch action to add data
    function onSubmit() {
      // submit to backend or whatever you like
     store.dispatch('addTodo',{"title":title.value,"time":new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()})
    }
     const store = useStore()
     // dipatch action to get data
     onMounted(() => {
      store.dispatch('fetchTodo')
     })
     //delete data
     function deleteTodo(id){    store.dispatch('deleteTodo',id) }
    //  store.dispatch(' addTodo',{title:value,Description: "oejfope"})

     return {
       GetTodoList: computed(() => store.getters.GetTodoList),
       onSubmit,
       deleteTodo,
       title,
       
     }
    
  }
  // ,
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
