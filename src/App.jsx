import Login from "./pages/Login";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import SearchPost from "./pages/SearchPost";
import { CreatePost } from "./pages/CreatePost";
import { Layout } from "./components/layout/Layout";
import ErrorNotFound from "./pages/ErrorNotFound";
import CreateOffer from "./pages/CreateOffer";
import AddPostToOffers from "./pages/AddPostToOffers";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
