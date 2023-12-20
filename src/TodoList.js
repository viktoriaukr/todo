import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  const newTodos = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} removeTodo={removeTodo} task={todo.task} />
  ));
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>{newTodos}</ul>
    </div>
  );
};

export default TodoList;
