import { NavLink, useLoaderData } from "react-router-dom";

const pageNavView = (pagiNation) => {
  const startNavNum = pagiNation.startNavNum;
  let endNavNum = startNavNum + pagiNation.pageNavCount;
  endNavNum =
    endNavNum > pagiNation.pageTotalCount
      ? pagiNation.pageTotalCount + 1
      : endNavNum;

  const navNumArray = [
    0, // 맨처음으로 가기
    startNavNum > 1 && (pagiNation.pageNum - 1) * -1, // 이전으로가기
    ...Array.from(Array(endNavNum - startNavNum).keys()).map(
      (v) => v + startNavNum
    ),
    endNavNum <= pagiNation.pageTotalCount && (pagiNation.pageNum + 1) * -1, // 이후로 가기
    Number.MAX_SAFE_INTEGER, // 맨 끝으로 가기
  ];

  return navNumArray.reduce((result, nav) => {
    if (nav !== false) {
      result = [
        ...result,
        <div key={nav}>
          <NavLink
            key={nav}
            className={({ isActive }) =>
              nav !== 0 && nav !== Number.MAX_SAFE_INTEGER && isActive
                ? "active"
                : ""
            }
            to={`/bbs/${
              nav < 0
                ? nav * -1
                : nav === 0
                ? 1
                : nav === Number.MAX_SAFE_INTEGER
                ? pagiNation.pageTotalCount
                : nav
            }`}
          >
            {nav < 0 ? (
              <>&middot;&middot;&middot;</>
            ) : nav === 0 ? (
              <>&#x2758;&lt;</>
            ) : nav === Number.MAX_SAFE_INTEGER ? (
              <>&gt;&#x2758;</>
            ) : (
              nav
            )}
          </NavLink>
        </div>,
      ];
    }
    return result;
  }, []);
};

const PageNavi = () => {
  const { pagiNation } = useLoaderData();
  console.log("Page", pagiNation);
  const pageNav = pageNavView(pagiNation);
  return <div className="pageNavBar">{pageNav}</div>;
};
export default PageNavi;
