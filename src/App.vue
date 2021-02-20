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
                   label:'business',to:'/'
                  
                 
                },
                {
                   label:'entertainment',to:'/about'
                  
                  
                },
                {
                   label:'general',
                   
                
                },
                {
                   label:'health',
                  
                },
                {
                   label:'science',
                  
                },
                  {
                   label:'sports',
                  
                },
                  {
                   label:'technology',
                  
                }
             ]

    return {items}
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
