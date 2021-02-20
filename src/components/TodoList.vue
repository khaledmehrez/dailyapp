<template lang="">
    <Field legend="Godfather I" :toggleable="true">
	<h1>{{Title}}</h1>
    <p>{{Description}}</p>
</Field>
</template>
<script>
export default {
    name:"TodoList",
   props:{
      Title:String,
      Description:String
   },
    
  
}
</script>
<style lang="">
    
</style>