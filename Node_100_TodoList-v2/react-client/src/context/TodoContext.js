import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { InitData } from "../data/InitData";
import moment from "moment";

// TodoContext : store
const TodoContext = createContext();

// useTodoContext() : 공급자
const useTodoContext = () => {
  return useContext(TodoContext);
};

// store 관리자
const TodoContextProvider = ({ children }) => {
  const [todoContentList, setTodoContentList] = useState([]);
  const [todoContent, setTodoContent] = useState({ ...InitData() });

  /**
   * 프로젝트가 처음 구현될때
   * 서버로 부터 데이터를 가져와서 최초 렌더링 하기
   */

  /**
   * useEffect()
   * 일종의 사용자 정의 event 만들기
   * state 변수들이 변동되었을때 자동으로 실행되기를 바라는 코드
   * todoContent state 변수가 어딘선가 값이 변경되면
   * 자동으로 감지하고 실행되는 코드
   */
  // useEffect(() => console.log("시작하기"), [todoContent]);

  /**
   * useEffect() 를 빈(Blank) 매개변수([])인 상태로
   * 코드를 작성하면
   * 최초 화면이 렌더링될때
   * 자동으로 한번만 실행되는 코드를
   * 만들때
   * didMount 생명주기에 실행되는 event 라고 한다
   */
  useEffect(() => console.log("또 시작하기"), []);

  /**
   * 서버로 부터 데이터를 가져오는 CallBack 함수
   * 원래는 useEffect() 에서 서버데이터를 fetch 하면 되는데
   * 내부 엔진적인 문제로 인하여 정상적으로 작동되지 않거나
   * 무한 반복 실행한다.
   * fetch 하는 Callback 함수를 별도로 만들고
   * 이 Callback 함수를 useEffect() 에서 다시 호출하여 실행해 주어야 한다
   */
  const fetchAll = useCallback(async () => {
    console.log("fetchAll");
    try {
      const res = await fetch("/todo");
      const result = await res.json();
      console.log(result);
      if (result.error) {
        alert(result.error);
        setTodoContentList([]);
      }
      setTodoContentList([...result]);
    } catch (error) {
      alert("서버 접속 오류");
      setTodoContentList([]);
    }
  }, [setTodoContentList]);
  useEffect(() => {
    (async () => {
      await fetchAll();
    })();
  }, [fetchAll]);

  const todoInsert = useCallback(
    async (t_content) => {
      let data = { ...InitData(), t_content };
      let url = "/todo/insert";
      let method = "POST";

      console.log("insert", todoContent);
      if (Number(todoContent.id) !== 0) {
        data = { ...todoContent };
        url = "/todo/update";
        method = "PUT";
      }

      const fetchOption = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const res = await fetch(url, fetchOption);
        const result = await res.json();
        if (result.error) {
          alert(result.error);
          return false;
        } else {
          setTodoContentList([...result]);
        }
        setTodoContent({ ...InitData() });
      } catch (error) {
        console.log(error);
        alert("서버오류!!!");
      }
    },
    [setTodoContent, setTodoContentList, todoContent]
  );

  const todoDelete = useCallback(async (uid) => {
    try {
      const res = await fetch(`/todo/delete/${uid}`, { method: "DELETE" });
      const result = await res.json();
      if (result.error) {
        alert(result.error);
        return false;
      } else {
        setTodoContentList([...result]);
      }
    } catch (err) {
      alert("전송오류!");
    }
  }, []);

  // const todoDelete = useCallback(
  //   (uid) => {
  //     const removeList = todoContentList.filter((item) => {
  //       return item.id !== uid;
  //     });
  //     setTodoContentList(removeList);
  //   },
  //   [setTodoContentList, todoContentList]
  // );

  const todoComplete = useCallback(
    async (uid) => {
      try {
        const res = await fetch(`/todo/complete/${uid}`, { method: "PUT" });
        const result = await res.json();
        if (result.error) {
          return alert("서버 오류!");
        }
        setTodoContentList([...result]);
      } catch (error) {
        alert("서버 접속 오류");
      }
    },
    [setTodoContentList]
  );

  // const todoComplete = useCallback(
  //   (uid) => {
  //     const completeList = todoContentList.map((item) => {
  //       if (item.id === uid) {
  //         // 완료버튼을 클릭했을때
  //         // 완료일자, 시각이 세팅되어 있으면 clear, 그렇지 않으면 다시 세팅
  //         item.e_date = item.e_date ? "" : moment().format("YYYY[-]MM[-]DD");
  //         item.e_time = item.e_time ? "" : moment().format("HH:mm:ss");
  //       }
  //       return item;
  //     });
  //     setTodoContentList(completeList);
  //   },
  //   [setTodoContentList, todoContentList]
  // );

  const todoEditor = (uid) => {
    const editorList = todoContentList.filter((item) => {
      return Number(item.id) === Number(uid);
    });
    setTodoContent({ ...editorList[0] });
  };

  const props = {
    todoContent,
    setTodoContent,
    todoContentList,
    setTodoContentList,
    todoInsert,
    todoComplete,
    todoDelete,
    todoEditor,
  };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};
export { TodoContextProvider, useTodoContext };
