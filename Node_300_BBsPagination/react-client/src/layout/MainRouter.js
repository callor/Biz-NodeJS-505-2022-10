import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import BBsDetail from "../comps/BBsDetail";
import BBsMain from "../comps/BBsMain";
import BBsList, { loader as BBsListLoader } from "../comps/BBsList";
import { useBBsContext } from "../context/BBsContext";
import BBsLoding from "../comps/BBsLoding";

const MainRouterProvider = () => {
  const { orderValue, filterValue, searchInput } = useBBsContext();

  const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>여기는 Home 입니다</h1> },
        {
          path: "bbs",
          element: <BBsMain />,
          children: [
            {
              path: ":pageNum",
              loader: ({ params }) => {
                return BBsListLoader({
                  params,
                  values: { orderValue, filterValue, searchInput },
                });
              },
              element: <BBsList />,
            },
            { path: "detail/:id", element: <BBsDetail /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={mainRouter} fallbackElement={<BBsLoding />} />;
};

export default MainRouterProvider;
