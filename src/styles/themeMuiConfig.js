import { createTheme } from "@mui/material";

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
const success = {
  main: "#4caf50",
  light: "#81c784",
  dark: "#388e3c",
  contrastText: "#fff",
};
export const theme = createTheme({
  palette: {
    primary,
    secondary,
    success,
  },
});
