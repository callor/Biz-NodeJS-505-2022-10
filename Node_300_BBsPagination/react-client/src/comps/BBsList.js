import { Link, useLoaderData } from "react-router-dom";

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
  );
};
export default BBsList;
