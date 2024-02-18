# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### TASK SUMMITION ....
### TODO list app


#### _* 1st step to create a empty folder for a project and create react project with in the folder`todoapp`*_

#### code to create a react `npm create vite@latest todoapp`

### create a components as for recuirement

#### codes in `app.jsx`

```
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, updatedTitle, updatedDescription) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          title: updatedTitle,
          description: updatedDescription,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoList addTodo={addTodo} />
      {todos.map((item, index) => (
        <div key={index}>
          <Card
            item={item}
            index={index}
            deleteTodo={() => deleteTodo(index)}
            editTodo={(updatedTitle, updatedDescription) =>
              editTodo(index, updatedTitle, updatedDescription)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default App;


```

### codes in `Todolist.jsx`

```
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



```


### codes in `card.jsx`

```
import React, { useState } from "react";
import "./style/Card.css";

const Card = ({ item, index, deleteTodo, editTodo }) => {
  const [status, setStatus] = useState("Status");

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleEdit = () => {
    const updatedTitle = prompt("Enter updated title:", item.title);
    const updatedDescription = prompt(
      "Enter updated description:",
      item.description
    );

    if (updatedTitle !== null && updatedDescription !== null) {
      editTodo(index, updatedTitle, updatedDescription);
    }
  };

  const pendingStatus = () => {
    setStatus("Pending");
  };

  const completeStatus = () => {
    setStatus("Completed");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8" key={index}>
          <div className="card card-info">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <hr />
              <p className="card-text">{item.description}</p>
              <div className="dropdown">
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
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#" onClick={pendingStatus}>
                    Pending
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={completeStatus}
                  >
                    Completed
                  </a>
                </div>
              </div>
              <button className="btn btn-success" onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-success" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

```