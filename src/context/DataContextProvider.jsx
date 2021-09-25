import React, { createContext, useEffect, useReducer, useState } from "react";
import dataReducer from "../reducers/dataReducer";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, {});

  useEffect(() => {
    fetch("https://api.bourseon.com/posts/?page=2")
      .then((res) => res.json())
      .then((da) =>
        dispatch({
          type: "fetch",
          payload: da,
        })
      );
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

fetch;
