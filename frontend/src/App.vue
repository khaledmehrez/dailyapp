<template>
 <Navbar :model="items" />
 <router-view/>
</template>
<script>


export default {
  name: 'App',
  components: {
    
    
  },
  setup() {
  let items= [
                {
                   label:'Home',to:'/'
                  
                 
                },
                {
                   label:'Todo',to:'/todo'
                  
                  
                },
                {
                   label:'News',to:'/news'
                   
                
                }
                
             ]

    return {items}
  }
}
</script>
<style>

</style>
