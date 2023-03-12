import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../components/main/Main";
import AddBlogs from "../components/pages/AddBlogs";
import AllBlogs from "../components/pages/AllBlogs";
import Blogs from "../components/pages/Blogs";
import Contacts from "../components/pages/Contacts";
import CustomizeBlog from "../components/pages/CustomizeBlog";
import EditBlogs from "../components/pages/EditBlogs";
import Header from "../components/pages/Header";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SIgnup";
import ErrorPage from "../shared/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Header",
        element: <Header/>,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs />,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/AddBlogs",
        element: <AddBlogs />,
      },
      {
        path: "/EditBlogs",
        element: <EditBlogs />,
      },
    //   {
    //     path: "/SignUp",
    //     element: <SignUp/>,
    //   },
      {
        path: "/customize",
        element: <CustomizeBlog/>,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },

    ],
  },
]);

export default router;
