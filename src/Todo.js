import React from "react";

const Todo = ({ id, removeTodo, task }) => {
  const remove = () => removeTodo(id);
  return (
    <div>
      <li>
        {task}
        <button onClick={remove}>X</button>
      </li>
    </div>
  );
};

export default Todo;
