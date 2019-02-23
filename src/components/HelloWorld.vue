<template>
  <div>
    <div class="hello">Mi data {{ user.name }}</div>
    <p v-for="category in categories" :key="category">{{ category }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // Como elementos sueltos
  /*computed: mapState({
    userName: state => state.user.name,
    userID: state => state.user.userID,
    categories: "categories"
  })*/

  // devuelve desde un array
  computed: mapState(["user", "categories"])
};
</script>
