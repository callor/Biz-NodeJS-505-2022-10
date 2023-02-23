import { Link, useLoaderData } from "react-router-dom";
import BBsSearch from "./BBsSearch";
import PageNavi from "./PageNavi";

export const loader = async ({ params, values }) => {
  console.log(params.pageNum, values.orderValue, values.filterValue);
  const pageNum = params?.pageNum || 1;
  const listLimit = 5;
  const pageNavCount = 5;

  const res = await fetch(
    `/api?pageNum=${pageNum}&listLimit=${listLimit}&pageNavCount=${pageNavCount}`
  );
  const { bbsList, pagiNation } = await res.json();
  return { bbsList, pagiNation };
};

const bbsListView = (bbsList) => {
  return bbsList.map((bbs) => {
    return (
      <tr>
        <td>{bbs.b_seq}</td>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>
          {bbs.b_nickname}({bbs.b_username})
        </td>
        <td>
          <Link to={`/bbs/detail/${bbs.b_seq}`}>{bbs.b_subject}</Link>
        </td>
        <td>{bbs.b_count}</td>
      </tr>
    );
  });
};

const BBsList = () => {
  const { bbsList } = useLoaderData();
  const listResult = bbsListView(bbsList);
  return (
    <>
      <table className="bbs list">
        <thead>
          <tr>
            <th>SEQ</th>
            <th>작성일자</th>
            <th>작성시각</th>
            <th>작성자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{listResult}</tbody>
      </table>
      <BBsSearch />
      <PageNavi />
    </>
  );
};
export default BBsList;
