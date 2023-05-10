import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CapitalQuizApp from "./pages/CapitalQuizApp";
import PrefQuizApp from "./pages/PrefQuizApp";
import MapIconQuizApp from "./pages/MacIconQuizApp";
import Root from "./pages/Root";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import CapitalQuizPlay from "./components/CapitalQuiz/CapitalQuizPlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "capital-quiz",
        element: <CapitalQuizApp />,
        children: [
          {
            path: "play",
            element: <CapitalQuizPlay />,
          },
          {
            path: "result",
          },
        ],
      },
      {
        path: "pref-quiz",
        element: <PrefQuizApp />,
        children: [
          {
            path: "play",
          },
          {
            path: "result",
          },
        ],
      },
      {
        path: "map-icon-quiz",
        element: <MapIconQuizApp />,
        children: [
          {
            path: "play",
          },
          {
            path: "result",
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
