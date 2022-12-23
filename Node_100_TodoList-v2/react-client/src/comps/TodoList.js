import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoContentList } = useTodoContext();
  const todoListItemView = todoContentList.map((item) => {
    return <TodoItem item={item} key={item.id} />;
  });
  return <div>{todoListItemView}</div>;
};
export default TodoList;
