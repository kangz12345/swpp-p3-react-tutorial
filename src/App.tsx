import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./containers/TodoList/TodoList";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="todos" element={<TodoList title={"My TODOs!"} />} />
          <Route path="new-todo" element={<NewTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
