import { TodoContextProvider } from "../context/TodoContext";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
const TodoMain = () => {
  return (
    <div className="Todo">
      <TodoContextProvider>
        <TodoInput />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
};

export default TodoMain;
