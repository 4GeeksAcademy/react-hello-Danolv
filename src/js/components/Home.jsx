import React, { useState } from "react";
import "/workspaces/react-hello-Danolv/src/styles/index.css"

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

//add todp
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;

    setTodos([...todos, inputValue]); 
    setInputValue("");
  };

//delete todo
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="text-center container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="todos-input">
            To Do List
          </label>
          <input
            className="form-control"
            id="todos-input"
            placeholder="Agrega un tudu"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>

      {}
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;