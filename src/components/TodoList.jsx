import React, { useState } from "react";
import "./style/Todolist.css";

const TodoList = ({ addTodo }) => {
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Filter");

  const handleSubmit = () => {
    addTodo({ title, description }, "Pending");
    setTitle("");
    setDescription("");
    };
    const handleall = () => {
        setStatus("All")
    }
  const handlepending = () => {
    setStatus("Pending");
  };

  const handlecomplete = () => {
    setStatus("Completed");
  };
  return (
    <>
      <div className="container header text-center text-bold">
        <h3>Todo list</h3>
      </div>
      <h5 className="desc">Stay Focus</h5>
      <div className="container inputs">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-success" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <div>
        <div className="dropdown container ">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {status}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              href="#"
              onClick={handleall}
            >
              All
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={handlepending}
            >
              Pending
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={handlecomplete}
            >
              Completed
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
