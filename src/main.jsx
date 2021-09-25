import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "antd/dist/antd.css";
import DataContextProvider from "./context/DataContextProvider";
import PageContextProvider from "./context/PageContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <PageContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </PageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
