import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { v4 as uuid } from "uuid";

const TodoInput = () => {
  const [todoText, setTodoText] = useState("");
  const addTodo = useStoreActions(actions => actions.todoStore.addTodo);
  //console.log(addTodo);
  const submitTodo = () => {
    if (todoText !== "") {
      addTodo({ title: todoText, completed: false, id: uuid() });
      setTodoText("");
    } else {
      alert("please enter a string");
    }
  };
  const handleKeyPress = key => {
    if (key === "Enter") {
      submitTodo();
    }
  };
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      <input
        className="form-control mb-3"
        placeholder="Enter Todo..."
        value={todoText}
        onKeyPress={e => handleKeyPress(e.key)}
        onChange={e => setTodoText(e.target.value)}
      />
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          submitTodo();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
