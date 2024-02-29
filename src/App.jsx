import Login from "./pages/Login";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material";
import PostDetail from "./pages/PostDetail";
import SearchPost from "./pages/SearchPost";

function App() {
  const primary = {
    main: "#034a96",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff",
  };
  const secondary = {
    main: "#034a96",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff",
  };
  const theme = createTheme({
    palette: {
      primary,
      secondary,
    },
  });
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post" element={<PostDetail />} />
            <Route path="/search" element={<SearchPost />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
