import React, { createContext, useEffect, useReducer } from "react";
import dataReducer from "../reducers/dataReducer";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, {});
  useEffect(() => {
    fetch("https://api.bourseon.com/posts")
      .then((res) => res.json())
      .then((da) => {
        dispatch({
          type: "fetch",
          payload: da,
        });
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

fetch;
