import { removeTodo, setStatus } from "../redux/reducer/rootReducer";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const setTask = (e) => {
    e.preventDefault();
    dispatch(setStatus(todo.id));
  };
  const removeTask = (e) => {
    e.preventDefault();
    dispatch(removeTodo(todo.id));
  };
  return (
    <div className="todo" key={todo?.id}>
      <li className={`todo-item ${todo?.status ? "completed" : ""}`}>
        {todo?.text}
      </li>
      <li className="todo-item">{todo?.status}</li>
      <button onClick={setTask} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeTask} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
