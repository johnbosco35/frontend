/** @format */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreen from "../components/home/HomeScreen";
import Home from "../components/home/Home";
import Register from "../components/auth/Register";
import SignIn from "../components/auth/SignIn";
import Setting from "../components/home/Setting";
import Task from "../components/home/Task";
import Board from "../components/home/Board";
import Assigned from "../components/home/Assigned";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/home/settings",
        element: <Setting />,
      },
      {
        path: "/home/task",
        element: <Task />,
      },
      {
        path: "/home/board",
        element: <Board />,
      },
      {
        path: "/home/assigned",
        element: <Assigned />,
      },
    ],
  },
]);
