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
