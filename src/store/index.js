import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      name: "John Doe"
    },
    categories: ["javascript", "sass", "html"]
  },
  mutations: {},
  actions: {}
});
