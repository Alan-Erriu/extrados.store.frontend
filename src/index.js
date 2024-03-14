import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { theme } from "./utilities/themeMuiConfig";
import { ThemeProvider } from "@emotion/react";
import { AxiosInterceptor } from "./services/interceptor/axiosInterceptor";

AxiosInterceptor();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
