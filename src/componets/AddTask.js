import React from "react";
import { useState } from "react";
import { addTodo } from "../redux/reducer/rootReducer";
import { useDispatch } from "react-redux";
function Form() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  return (
    <form>
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
        className="todo-input"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addTodo(inputText));
        }}
        type="submit"
        className="todo-button"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      
    </form>
  );
}
export default Form;
