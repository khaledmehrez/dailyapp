<template>
  <div class="about">
    <Spinner v-if="GetRequest" />
<MessageError v-if="GetError" severity="warn" sticky  >{{GetErrorMessage}}</MessageError>
    <Card v-for=" (GetNewsList,index) in  GetNewsList" v-bind:key="index" :GetNewsList="GetNewsList" />
  </div>
</template>
<script>

import { useStore } from 'vuex'
import { computed } from 'vue'
import { onMounted } from 'vue'
import Card from '../components/Card.vue'

export default {
  components: { Card },
    name:"About",
   
    setup() {
      
       const store = useStore()
     // dipatch action to get data
     onMounted(() => {
      store.dispatch('fetchNews')
     })
      return{

         GetNewsList: computed(() => store.getters.GetNewsList),
         GetRequest: computed(() => store.getters.GetRequest),
         GetError: computed(() => store.getters.GetError),
         GetErrorMessage: computed(() => store.getters.GetErrorMessage)
      }
      
    }
  
}
</script>