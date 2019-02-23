import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      name: 'John Doe'
    },
    categories: ['javascript', 'sass', 'html'],
    todos: [
      { id: 0, text: 'lalalal 1', done: true },
      { id: 1, text: 'lalalal 2', done: false },
      { id: 2, text: 'lalalal 3', done: true }
    ]
  },
  // Las mutaciones realizan cambios en el state (son sincronas)
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push(value);
    }
  },
  // las acciones (son asíncronas)
  actions: {},
  // obtienen datos del state (son como las computed)
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    todosLength: state => {
      return state.todos.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    // Puedo utilizar un getter dentro de otro
    activeTodos: (state, getters) => {
      // resta los todos completos al total de todos.
      return state.todos.length - getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  }
});
