import { useTodoContext } from "../context/TodoContext";
const TodoInput = () => {
  // ContextProvider 로 부터 state 관련 변수, 함수 받기
  const { todoInsert, todoContent, setTodoContent } = useTodoContext();
  /**
   * 추가 button 을 클릭했을때 사용할 event
   */
  const onClickHander = () => {
    todoInsert(todoContent.t_content);
    console.log(todoContent);
  };

  /**
   * input box 문자열을 입력할때 사용할 event
   */
  const onChangeHander = (e) => {
    const value = e.target.value;
    setTodoContent({ ...todoContent, t_content: value });
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        onChange={onChangeHander}
        value={todoContent.t_content}
      />
      <button
        onClick={onClickHander}
        disabled={todoContent.t_content.length < 2}
      >
        Enter
      </button>
    </div>
  );
};

export default TodoInput;
