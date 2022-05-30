import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './../reducer/rootReducer';
const store = configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});
export default store;
