import { useState } from "react";
import { useBBsContext } from "../context/BBsContext";
const BBsSearch = () => {
  const {
    orderList,
    filterList,
    orderValue,
    filterValue,
    setOrderValue,
    setFilterValue,
    searchInput,
    setSearchInput,
  } = useBBsContext();

  const [inputText, setInputText] = useState("");

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      console.log(e.keyCode, inputText);
      setSearchInput(inputText);
    }
  };

  return (
    <div className="bbs search-box">
      <select
        value={orderValue.eng}
        onChange={(e) => {
          const t = e.target; // 버블링에서 가장 하단의 tag
          const c = e.currentTarget; // 현재 tag
          setOrderValue({
            eng: t.value,
            kor: t.options[c.selectedIndex].text,
          });
        }}
        className="w3-select w3-border w3-round-xlarge"
      >
        {orderList.map((order) => {
          return (
            <option value={order.eng} key={order.kor}>
              {order.kor}
            </option>
          );
        })}
      </select>
      <select
        value={filterValue.eng}
        onChange={(e) => {
          const t = e.target; // 버블링에서 가장 하단의 tag
          const c = e.currentTarget; // 현재 tag
          setFilterValue({
            eng: t.value,
            kor: t.options[c.selectedIndex].text,
          });
        }}
        className="w3-select w3-border w3-round-xlarge"
      >
        {filterList.map((filter) => {
          return (
            <option value={filter.eng} key={filter.eng}>
              {filter.kor}
            </option>
          );
        })}
      </select>
      <input
        value={inputText}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        placeholder="검색어"
        className="w3-input w3-border w3-round-xlarge"
      ></input>
    </div>
  );
};

export default BBsSearch;
