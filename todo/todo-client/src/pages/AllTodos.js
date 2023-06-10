import { useState } from "react";
import Todo from "../components/Todo";

function AllTodo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function onAddTodo() {
    if (value === null || value.match(/^ *$/) !== null) {
      return;
    }
    let tempTodos = todos;
    tempTodos.push(value);
    setTodos(tempTodos);
    setValue("");
  }

  function onTodoDelete(index) {
    let temp = todos.filter((item, i) => i !== index);
    setTodos(temp);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {""}
      <button className="btn" onClick={onAddTodo}>
        {" "}
        Click to Add Todo
      </button>
      {todos.length > 0 &&
        todos.map((item, i) => (
          <Todo key={i} name={item} onTodoDelete={() => onTodoDelete(i)}></Todo>
        ))}
    </div>
  );
}

export default AllTodo;
