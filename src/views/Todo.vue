<template>
  <div class="hello">
    <span class="p-float-label">
	<Input id="username" type="text" v-model="title" required />
  <p>{{title}}</p>
  <Button @click="onSubmit">Add</Button>
   <Field  v-for=" GetTodoList in  GetTodoList" :key="GetTodoList.id" legend="Godfather I" :toggleable="true">
	<h3>{{GetTodoList.title}}</h3>
    <p>{{GetTodoList.time}}</p>
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
    function onSubmit() {
      // submit to backend or whatever you like
     store.dispatch('addTodo',{"title":title.value,"time":new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()})
    }
     const store = useStore()
     onMounted(() => {
      store.dispatch('fetchTodo')
     })
    //  store.dispatch(' addTodo',{title:value,Description: "oejfope"})

     return {
       GetTodoList: computed(() => store.getters.GetTodoList),
       onSubmit,
       title
       
     }
    
  }
  // ,
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
