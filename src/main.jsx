import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CapitalQuizApp from "./pages/CapitalQuizApp";
import PrefQuizApp from "./pages/PrefQuizApp";
import MapIconQuizApp from "./pages/MacIconQuizApp";
import Root from "./pages/Root";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import CapitalQuizPlay from "./components/CapitalQuiz/CapitalQuizPlay";
import { ChakraProvider } from "@chakra-ui/react";

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
      },
      {
        path: "capital-quiz/play",
        element: <CapitalQuizPlay />,
        errorElement: <CapitalQuizApp />,
      },
      {
        path: "capital-quiz/result",
        // element: <CapitalQuizResult />,
      },
      {
        path: "pref-quiz",
        element: <PrefQuizApp />,
      },
      {
        path: "map-icon-quiz",
        element: <MapIconQuizApp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RecoilRoot>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
