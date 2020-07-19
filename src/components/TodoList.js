import React from "react";
import { useStoreState } from "easy-peasy";

const TodoList = () => {
  const todos = useStoreState(state => state.todoStore.todos);
  return (
    <div>
      {todos.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default TodoList;
