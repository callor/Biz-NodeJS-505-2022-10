import { useBBsContext } from "../context/BBsContext";
const BBsSearch = () => {
  const {
    orderList,
    filterList,
    orderValue,
    filterValue,
    setOrderValue,
    setFilterValue,
  } = useBBsContext();

  return (
    <div className="bbs search-box">
      <select
        value={orderValue.eng}
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
        placeholder="검색어"
        className="w3-input w3-border w3-round-xlarge"
      ></input>
    </div>
  );
};

export default BBsSearch;
