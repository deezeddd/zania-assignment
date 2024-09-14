import React, { useState } from "react";

const AddButton = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "", 
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.title && task.category && task.description) {
      addTask(task);
      setTask({ title: "", category: "", description: "" }); // Resetting the state
    } else {
      console.log("Please fill in all fields.");
    }
    alert("Task Added");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Title</h1> 
          <input
            className="border-2 m-2"
            type="text"
            name="title" 
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1>Category</h1>
          <input
            className="border-2 m-2"
            type="text"
            name="category"
            value={task.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1>Description</h1>
          <input
            className="border-2 m-2"
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <button className="m-2 p-2 bg-green-200" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddButton;
