import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store/store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  rootElement
);
