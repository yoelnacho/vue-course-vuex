<template>
  <div>
    <input
      placeholder="new todo"
      type="text"
      v-model="todo.value"
      v-on:keyup.enter="validation();"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        type: String,
        required: false,
        default: ''
      }
    };
  },
  methods: {
    validation() {
      if (this.todo.value === undefined) {
        return alert('Empty field');
      } else {
        this.addTodo();
      }
    },
    addTodo() {
      //console.log(this.$store.getters.todosLength + 1);
      const newTodo = {
        id: this.$store.getters.todosLength + 1,
        text: this.todo.value,
        done: false
      };
      this.$store.commit('ADD_TODO', newTodo);
      //console.log(this.todo.value);

      this.todo = '';
    }
  }
};
</script>
