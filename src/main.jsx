import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from "./pages/ErrorPage";
import CapitalQuizApp from "./pages/CapitalQuizApp";
import PrefQuizApp from "./pages/PrefQuizApp";
import MapiconQuizApp from "./pages/MapiconQuizApp";
import Root from "./pages/Root";
import Home from "./pages/Home";
import QuizPlay from "./pages/QuizPlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "capital-quiz",
        element: <CapitalQuizApp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "pref-quiz",
        element: <PrefQuizApp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "map-icon-quiz",
        element: <MapiconQuizApp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "play",
        element: <QuizPlay />,
        errorElement: <ErrorPage />,
      },
      {
        path: "capital-quiz/result",
        // element: <CapitalQuizResult />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);
