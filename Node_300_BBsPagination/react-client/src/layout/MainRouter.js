import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BBsMain, { loader as BBsLoader } from "../comps/BBsMain";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", loader: BBsLoader, element: <BBsMain /> },
      { path: "bbs/:pageNum", loader: BBsLoader, element: <BBsMain /> },
      { path: "bbs/detail/:id", loader: BBsLoader, element: <BBsMain /> },
    ],
  },
]);

export default mainRouter;
