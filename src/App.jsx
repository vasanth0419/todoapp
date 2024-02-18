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
