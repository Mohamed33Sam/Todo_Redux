import "./App.css";
import Form from "./componets/AddTask";
import TodoList from "./componets/ListTasks";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <>
          <header>
            <h1> Todo List </h1>
          </header>
          <Form />
          <TodoList />
        </>
      </div>
    </Provider>
  );
}

export default App;
