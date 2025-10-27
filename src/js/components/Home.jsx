import React, { useState, useEffect } from "react";
import "/workspaces/react-hello-Danolv/src/styles/index.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");


  function getTodos() {
  fetch("https://playground.4geeks.com/todo/users/Danonino", { 
    method: "GET" 
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("GET:", data);
      setTodos(data.todos);
    })
    .catch((err) => {
      console.error(err);
    });
}


  function addTodo(tudu) {
    let data = {
      label: tudu,
      is_done: false
    }
    fetch("https://playground.4geeks.com/todo/todos/Danonino", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => { 
        return response.json()})

      .then((data) => {
        console.log("añadodo", data.label);
        getTodos(); // refrescar después de agregar
      })
      .catch((err) => {
        console.error(err)});
}
  function delTodo(id){
  fetch("https://playground.4geeks.com/todo/todos/" + id, {
    method: "DELETE",
  })
    
  .then((response) => response.json())
  .then(() => {
      console.log("Todo eliminado", id);
      getTodos(); 
    })
    .catch((err) => console.error(err));
}
  useEffect(() => {
    getTodos();
  }, []);
//add todp
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;

    addTodo(inputValue); 
    setInputValue("");
  };

//delete todo
/// const handleDelete = (index) => {
///setTodos(todos.filter((_, i) => i !== index));
///};

  return (
    <div className="text-center container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center justify-content-center gap-2">
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
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo.label}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => delTodo(todo.id)}
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