<template>
  <div>
    <div class="hello">Mi data {{ user.name }}</div>
    <span>categories: {{ $store.getters.catLength }}</span>
    <p v-for="category in categories" :key="category">{{ category }}</p>
    <hr />

    <p v-for="todo in todos" :key="todo.id">
      {{ todo.text }} - {{ todo.done }}
    </p>
    <p>Done: {{ $store.getters.doneTodos.length }}</p>
    <p>Pending: {{ $store.getters.activeTodos }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // Como elementos sueltos
  /*computed: mapState({
    userName: state => state.user.name,
    userID: state => state.user.userID,
    categories: "categories"
  })*/

  // devuelve desde un array
  computed: mapState(['user', 'categories', 'todos'])
};
</script>
