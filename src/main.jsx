import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "antd/dist/antd.css";
import DataContextProvider from "./context/DataContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
