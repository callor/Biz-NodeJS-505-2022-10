import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import BBsDetail from "../comps/BBsDetail";
import BBsMain from "../comps/BBsMain";
import BBsList, { loader as BBsListLoader } from "../comps/BBsList";

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
          { path: ":pageNum", loader: BBsListLoader, element: <BBsList /> },
          { path: "detail/:id", element: <BBsDetail /> },
        ],
      },
    ],
  },
]);

const MainRouterProvider = () => {
  return <RouterProvider router={mainRouter} />;
};

export default MainRouterProvider;
