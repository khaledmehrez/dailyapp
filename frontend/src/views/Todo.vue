<template>

<div>
   <img class="pictureTodo" src="../assets/LandingTodo.png">
  
<Spinner v-if="GetRequest" />
<MessageError v-if="GetError" severity="warn" sticky  >{{GetErrorMessage}}</MessageError>
  <div v-if="!GetRequest && !GetError" >
    <div class="p-d-inline p-shadow-1 inputSection" >
    
	<Input id="username" type="text" v-model="title" required />
  
  <Button type="button"  @click="onSubmit">Add</Button>
    </div>
   <Field class="field"  v-for=" (GetTodoList,index) in  GetTodoList" v-bind:key="index" legend="your todo" :toggleable="true">

	<h3 v-if="!toggle">{{GetTodoList.title}}</h3>
  <Input v-if="toggle && GetTodoList._id===idEdit" v-model="EditedTitel"/>
    <p>{{GetTodoList.time}}</p>
   
    <Button type="button"  v-on:click="deleteTodo(GetTodoList._id)">X</Button>
    <Button v-if="!toggle" @click="toggle=true,idEdit=GetTodoList._id">edit</Button>
    <Button v-if="toggle" @click="toggle=false,idEdit='',EditedTitel=''">cancel</Button>
    <Button v-if="toggle" @click="editTodo(EditedTitel,GetTodoList._id),toggle=false">confirme</Button>
</Field>

  
  

<p>{{EditedTitel}}</p>
  </div>
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
    let EditedTitel=ref("")
    let toggle=ref(false)
    let idEdit=ref("")
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
     function deleteTodo(id){ 
           
            store.dispatch('deleteTodo',id)  
            
            }
            //edit todo
            function editTodo(EditedTitel,id){
              
              store.dispatch('patchTodo',{EditedTitel,id})
             
             
              
            }
    //  store.dispatch(' addTodo',{title:value,Description: "oejfope"})

     return {
       GetTodoList: computed(() => store.getters.GetTodoList),
        GetRequest: computed(() => store.getters.GetRequest),
         GetError: computed(() => store.getters.GetError),
         GetErrorMessage: computed(() => store.getters.GetErrorMessage),
       onSubmit,
       deleteTodo,
       editTodo,
       title,
       idEdit,
       EditedTitel,
       toggle
       
     }
    
  }
  // ,
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.inputSection{
  margin-left: 40%;
  margin-top: 5%;
  margin-bottom: 5%;
 
  
}
 .field{
    width:50%;
    margin-left:20%
  }
  .pictureTodo{
    height: 80vh;
    width: 100%;
  }
</style>
