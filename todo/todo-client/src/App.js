import { Routes, Route } from "react-router-dom";
import AllTodo from "./pages/AllTodos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllTodo />} />
    </Routes>
  );
}

export default App;
