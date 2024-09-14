import React, { useState } from "react";
import List from "./List";
import AddButton from "./AddButton";

const Home = (props) => {
  const [tasks, setTasks] = useState(props.data);
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);


  const handleSearch = () => {
    const result = tasks.filter((task) =>
      task.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredTasks);
    setFilteredTasks(result);
    setSearchTerm("")
  };

   const addTask = (newTask) => {
     const newId = tasks.length + 1;
     const taskToAdd = { ...newTask, id: newId, status: "pending" };
     const updatedTasks = [...tasks, taskToAdd];
     setTasks(updatedTasks);
     setFilteredTasks(updatedTasks); // Update filteredTasks with new task
   };

    const handleDelete = (id) => {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks)
      setFilteredTasks(tasks);
    };

    const onStatusDone = (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, status: "completed" } : task
      );
      setTasks(updatedTasks);
      alert("Status Done")
    };


  return (
    <>
      {modal === true ? (
        <div>
          <AddButton addTask={addTask} setFilteredTasks={setFilteredTasks} />
          <button className="m-2" onClick={() => setModal(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="h-44">
          <h1>Zania</h1>
          <button className="m-2" onClick={() => setModal(true)}>
            Add Task
          </button>
          <div>
            <input
              className="border-2"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="m-2" onClick={handleSearch}>
              Search
            </button>
          </div>
          <button className="m-2" onClick={() => setFilteredTasks(tasks)}>
            Cancel
          </button>
          <List
            data={filteredTasks}
            onDelete={handleDelete}
            onStatusDone={onStatusDone}
          />
        </div>
      )}
    </>
  );
};
export default Home;
