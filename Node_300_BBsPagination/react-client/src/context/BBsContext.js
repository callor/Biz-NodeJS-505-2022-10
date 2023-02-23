import { createContext, useContext, useState } from "react";

// store
const BBsContext = createContext();

export const useBBsContext = () => {
  return useContext(BBsContext);
};

const orderList = [
  { eng: "latest", kor: "최신순" },
  { eng: "upvotes", kor: "추천순" },
  { eng: "replies", kor: "댓글순" },
  { eng: "views", kor: "조회순" },
];

const filterList = [
  { eng: "title_content", kor: "제목+내용" },
  { eng: "title", kor: "제목" },
  { eng: "content", kor: "내용" },
  { eng: "nickname", kor: "닉네임" },
  { eng: "reply", kor: "댓글" },
];

export const BBsContextProvider = ({ children }) => {
  const [orderValue, setOrderValue] = useState({
    eng: orderList[0].eng,
    kor: orderList[0].kor,
  });
  const [filterValue, setFilterValue] = useState({
    eng: filterList[0].eng,
    kor: filterList[0].kor,
  });
  const [searchInput, setSearchInput] = useState("");
  const props = {
    orderList,
    filterList,
    orderValue,
    filterValue,
    setOrderValue,
    setFilterValue,
    searchInput,
    setSearchInput,
  };
  return <BBsContext.Provider value={props}>{children}</BBsContext.Provider>;
};

// export {BBsContext, BBsContextProvider};
