import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const [Todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  const [NewTodos, setNewTodos] = useState([""]);

  let AddnewTodo = () => {
    setTodos((prevtodos) => {
      return [...prevtodos, { task: NewTodos, id: uuidv4() }];
    });
    setNewTodos("");
  };

  let UpdateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  let DeleteTodo = (id) => {
    setTodos(Todos.filter((todo) => todo.id != id));
  };

  let ToUppercase = () => {
    setTodos(
      Todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  return (
    <div className="bg-zinc-700 h-screen w-screen">
      <div className=" w-[25%] ml-[35%]  h-screen">
      <div className="bg-gray h-20 flex justify-center items-center rounded-md ">
        <input
          className="px-3 py-3 rounded-md"
          placeholder="Enter your ToDo "
          value={NewTodos}
          type="text"
          onChange={UpdateTodoValue}
        />
        <button
          className="bg-emerald-500  hover:bg-emerald-600 ml-3 p-2 rounded "
          onClick={AddnewTodo}
        >
          Add Task
        </button>
      </div>
      <br />

      <h3 className=" bg-black text-white p-4 text-2xl font-bold">TODO LIST</h3>
      <ul className="mt-6">
        {Todos.map((Todo) => (
          <li
            className="bg-slate-600 h-20 mb-4 flex items-center justify-center"
            key={Todo.id}
          >
            <span className=" w-[50%] px-2 py-3  text-3xl">{Todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button  className="bg-red-500  hover:bg-red-600 ml-3 p-2 rounded " onClick={() => DeleteTodo(Todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ToDoList;
