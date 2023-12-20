import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("render", () => {
  render(<NewTodoForm />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
