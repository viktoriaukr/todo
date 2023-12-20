import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({ task: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData, id: uuid() });
    setFormData({ task: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Todo</label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
