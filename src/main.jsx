import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "antd/dist/antd.css";
import DataContextProvider from "./context/DataContextProvider";
import PageContextProvider from "./context/PageContextProvider";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <PageContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </PageContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
