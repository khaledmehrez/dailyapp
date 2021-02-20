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
  addTodo: (state, payload) => state.TodoList.push(payload),
  deleteTodo:(state, payload) => state.TodoList=state.TodoList.filter(el=>el.id!=payload),
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
    async deleteTodo({commit}, id){
      const response= await axios.delete(`http://localhost:3000/todo/${id}`);
      console.log(response)
      commit("deleteTodo", id)
    }
  },
  modules: {
  },
  getters:{
    GetTodoList: state => state.TodoList
  },
})
