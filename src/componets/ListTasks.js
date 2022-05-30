import React, { useState } from "react";
import Todo from "./Task";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.Todo.todos);
  const [status, setStatus] = useState("all");
  const filter =
    status === "all"
      ? todos
      : status === "completed"
      ? todos.filter((x) => x.status === true)
      : todos.filter((x) => x.status === false);
  console.log(status);
  return (
    <div className="todo-container">
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <ul className="todo-list">
        {filter.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
