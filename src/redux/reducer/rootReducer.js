import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initState = {
  todos: [{ text: "Finish the checkpoint", id: uuid(), status: false }],
};
const todoSlice = createSlice({
  name: "Todo",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        text: action.payload,
        id: uuid(),
        status: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    setStatus: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: !item.status };
        } else {
          return { ...item };
        }
      });
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, setStatus } = todoSlice.actions;
