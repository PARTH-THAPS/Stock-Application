import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Signup/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "./components/Signup/Login/signup";
import Navbar from "./components/shared/Navbar";
import { Home } from "./components/Home";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
