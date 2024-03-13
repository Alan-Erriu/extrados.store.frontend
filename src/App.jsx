import Login from "./pages/Login";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { ThemeProvider } from "@mui/material";
import PostDetail from "./pages/PostDetail";
import SearchPost from "./pages/SearchPost";
import { theme } from "./utils/themeMuiConfig";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/search" element={<SearchPost />} />
            <Route path="/createPost" element={<CreatePost />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
