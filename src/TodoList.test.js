import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todo, task = "test todo") {
  const taskInput = todo.getByLabelText("Todo");
  fireEvent.change(taskInput, { target: { value: task } });
  const btn = todo.getByText("Add Todo");
  fireEvent.click(btn);
}

test("render", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("adding a new todo", () => {
  const todo = render(<TodoList />);
  expect(todo.queryByText("X")).not.toBeInTheDocument();
  addTodo(todo);
  expect(todo.queryByText("X")).toBeInTheDocument();
  expect(todo.getByText("test todo")).toBeInTheDocument();
});

test("removing todo", () => {
  const todo = render(<TodoList />);
  addTodo(todo);
  const btn = todo.getByText("X");
  fireEvent.click(btn);
  expect(btn).not.toBeInTheDocument();
});
