import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import AdminRoute from "./components/roots/AdminRoute";
import UnauthenticatedRoute from "./components/roots/UnauthenticatedRoute";
import UserRoute from "./components/roots/UserRoute";
import AddPostToOffers from "./pages/AddPostToOffers";
import CreateOffer from "./pages/CreateOffer";
import { CreatePost } from "./pages/CreatePost";
import ErrorNotFound from "./pages/ErrorNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import SearchPost from "./pages/SearchPost";
import AdminMenu from "./pages/adminPages/AdminMenu";
import CreateBrand from "./pages/adminPages/CreateBrand";
import "./styles/index.css";
import CreateCategory from "./pages/adminPages/CreateCategory";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "/post/:id",
        element: <PostDetail />,
      },
      {
        path: "/search/:postName",
        element: <SearchPost />,
      },
      {
        path: "",
        element: <UserRoute />,
        children: [
          {
            path: "/createPost",
            element: <CreatePost />,
          },
          {
            path: "/createOffer",
            element: <CreateOffer />,
          },
          {
            path: "/addPostToOffers",
            element: <AddPostToOffers />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "",
        element: <AdminRoute />,
        children: [
          {
            path: "/adminMenu",
            element: <AdminMenu />,
          },
          {
            path: "/createBrand",
            element: <CreateBrand />,
          },
          {
            path: "/createCategory",
            element: <CreateCategory />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "",
        element: <UnauthenticatedRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
