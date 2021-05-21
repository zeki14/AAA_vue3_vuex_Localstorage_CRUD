import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [] 
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks= payload
    } 
  },
  actions: {
    getTasks({commit}){
      localStorage.getItem('tasks')
      const tasks = JSON.parse(localStorage.getItem('tasks'));//este nombre debe ser el mismo que en el localstorage
      commit('getTasks', tasks)
    }
  },
  modules: {

  }
})
