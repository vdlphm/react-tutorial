import { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Todo from "../components/Todo";

function AllTodo() {
  const [todos, setTodos] = useState(
    Cookies.get("todoCookieConsent") && Cookies.get("todos")
      ? JSON.parse(Cookies.get("todos"))
      : []
  );
  const [value, setValue] = useState("");

  function onAddTodo() {
    if (value === null || value.match(/^ *$/) !== null) {
      return;
    }
    let tempTodos = todos;
    tempTodos.push(value);
    Cookies.set("todos", JSON.stringify(tempTodos), {
      expires: 1,
      path: "",
    });
    setTodos(tempTodos);
    setValue("");
  }

  function onTodoDelete(index) {
    let temp = todos.filter((item, i) => i !== index);
    Cookies.set("todos", JSON.stringify(temp), { expires: 1, path: "" });
    setTodos(temp);
  }

  return (
    <div>
      <CookieConsent
        location="bottom"
        cookieName="todoCookieConsent"
        style={{ background: "white", color: "333333" }}
        buttonText="I Understand!"
        buttonStyle={{
          color: "white",
          font: "inherit",
          fontSize: "15px",
          border: "1px solid #800040",
          margin: "0 1rem",
          padding: "0.5rem 1.5rem",
          background: "#800040",
          borderRadius: "4px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <h1>Todo List</h1>
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddTodo();
          }
        }}
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
