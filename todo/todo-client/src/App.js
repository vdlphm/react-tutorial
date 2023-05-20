import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  function onTodoDelete() {
    console.log("Delete");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Todo name="Test 1" onTodoDelete={onTodoDelete} />
      <Todo name="Test 1" onTodoDelete={onTodoDelete} />
      <Todo name="Test 1" onTodoDelete={onTodoDelete} />
    </div>
  );
}

export default App;
