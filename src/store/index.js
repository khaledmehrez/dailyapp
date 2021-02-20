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
  addTodo: (state, payload) => state.TodoList.push(payload)
  },
  actions: {
    async fetchTodo({commit}){
      const response = await axios.get("http://localhost:3000/todo");
      commit("fetchTodo", response.data)
    },
    async addTodo({commit}, dataToAdd){
      const response = await axios.post("http://localhost:3000/todo", dataToAdd);
      console.log(response)
      commit("addTodo", dataToAdd)
    },
  },
  modules: {
  },
  getters:{
    GetTodoList: state => state.TodoList
  },
})
