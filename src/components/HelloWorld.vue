<template>
  <div>
    <todo />
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
    <!--
      <div class="hello">Mi data {{ user.name }}</div>
      <span>categories: {{ $store.getters.catLength }}</span>
      <p v-for="category in categories" :key="category">{{ category }}</p>
      <hr />

      <p v-for="todo in todos" :key="todo.id">
        {{ todo.text }} - {{ todo.done }}
      </p>
      <p>Done: {{ $store.getters.doneTodos.length }}</p>
      <p>Pending: {{ $store.getters.activeTodos }}</p>
      <hr />
      <p>{{ getTodoById(2) }}</p>
    -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Todo from './Todo';

export default {
  components: {
    Todo
  },
  // Como elementos sueltos
  /*computed: mapState({
    userName: state => state.user.name,
    userID: state => state.user.userID,
    categories: "categories"
  })*/

  // devuelve desde un array
  computed: {
    /*getTodo() {
      return this.$store.getters.getTodoById;
    },*/
    ...mapGetters(['getTodoById']),
    ...mapState(['user', 'categories', 'todos'])
  }
};
</script>
