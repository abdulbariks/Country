import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar/Navbar.jsx";
import Users from "./components/users/Users.jsx";
import Countries from "./components/countries/countries.jsx";

const countriesPromise = fetch("countries.json").then((res) => res.json());

const router = createBrowserRouter([
  // { path: "/", element: <div>home page</div> },
  // { path: "/about", element: <div>About page</div> },
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Navbar },
      { path: "users", Component: Users },
      {
        path: "countries",
        element: (
          <Suspense fallback={<h2>Loading.......</h2>}>
            <Countries countriesPromise={countriesPromise}></Countries>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <h3 className="text-2xl">Not Found: 404 Status</h3>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
