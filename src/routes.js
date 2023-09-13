import { createBrowserRouter } from "react-router-dom";

import Wrapper from "./components/Wrapper";

import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Code from "./pages/code/CodePage";
import Art from "./pages/art/ArtPage";
import Stage from "./pages/stage/StagePage";
import Misc from "./pages/misc/MiscPage";
import Detail from "./pages/detail/DetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/code",
        element: <Code />,
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/stage",
        element: <Stage />,
      },
      {
        path: "/misc",
        element: <Misc />,
      },
      {
        path: "code/:projectId",
        element: <Detail type="code" />,
      },
      {
        path: "art/:projectId",
        element: <Detail type="art" />,
      },
    ],
  },
]);

export default router;
