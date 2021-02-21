import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    TodoList: [],
    request: true,
    error: false,
    errormessage: "",
  },

  mutations: {
    endRequest: (state, payload) => (state.request = payload),
    activeError: (state, payload) => (state.error = payload),
    catchError: (state, payload) => (state.errormessage = payload),
    fetchTodo: (state, payload) => (state.TodoList = payload),
    addTodo: (state, payload) => state.TodoList.push(payload),
    deleteTodo: (state, payload) =>
      (state.TodoList = state.TodoList.filter((el) => el._id != payload)),
     
      patchTodo: (state, payload)=> 
       
      
        (state.TodoList[state.TodoList.indexOf(state.TodoList.find(el=>el._id===payload._id))].title= payload.title)
      
     
  },

  actions: {
    async fetchTodo({ commit }) {
      try {
        const response = await axios.get("http://localhost:5000/todo/getTodo");
        commit("fetchTodo", response.data);
        commit("endRequest", false);
      } catch (error) {
        commit("endRequest", false);
        commit("activeError", true);
        commit("catchError", error.message);
      }
    },
    async addTodo({ commit }, dataToAdd) {

      try{
        const response = await axios.post(
          "http://localhost:5000/todo/postTodo",
          dataToAdd
        );
        
        commit("addTodo", response.data);
        
      } catch(error){
        commit("activeError", true);
        commit("catchError", error.message);
      }
      
    },
    async deleteTodo({ commit }, id) {
      try{
         await axios.delete(
          `http://localhost:5000/todo/deleteTodo/${id}`
        );
        
        commit("deleteTodo", id);
        
      }
      catch(error){
        commit("activeError", true);
        commit("catchError", error.message);
      }
    },
    async patchTodo({ commit }, {EditedTitel,id}) {

      try{
        const response = await axios.patch(
          `http://localhost:5000/todo/patchTodo/${id}`,
          {title:EditedTitel}
        );
        commit("patchTodo", response.data);
       
        
      } catch(error){
        commit("activeError", true);
        commit("catchError", error.message);
      }
      
    }
  },
  modules: {},
  getters: {
    GetTodoList: (state) => state.TodoList,
    GetRequest: (state) => state.request,
    GetError: (state) => state.error,
    GetErrorMessage: (state) => state.errormessage,
  },
});
