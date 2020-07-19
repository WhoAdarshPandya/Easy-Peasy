import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="w-50 text-center m-auto">
      <TodoInput />
      <TodoList />
    </div>
  );
}
