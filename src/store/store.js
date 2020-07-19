import { createStore, action } from "easy-peasy";

const store = createStore({
  todoStore: {
    todos: [],
    addTodo: action((state, payload) => {
      state.todos.push(payload);
    })
  }
});
export default store;
