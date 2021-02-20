import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    TodoList:[]
  },
 

  mutations: {
    fetchTodo: (state, payload) => (
      state.TodoList = payload
  ),
   
  },
  actions: {
    async fetchTodo({commit}){
      const response = await axios.get("http://localhost:3000/todo");
      commit("fetchTodo", response.data)
    },
  },
  modules: {
  },
  getters:{
    GetTodoList: state => state.TodoList
  },
})
