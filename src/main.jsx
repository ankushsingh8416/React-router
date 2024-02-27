import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Slider from "./Components/Slider/slider";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Pricing from "./Components/Pricing/pricing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: [<Slider key="slider" />, <Pricing key="pricing" />]
      },
      {
        path: "home",
        element: [<Slider key="slider" />, <Pricing key="pricing" />]
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
