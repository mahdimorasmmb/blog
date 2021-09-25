import React, { createContext, useContext, useEffect, useState } from "react";

import { PageContext } from "./PageContextProvider";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useState("");
  const { page } = useContext(PageContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.bourseon.com/posts/?page=${page}`);
      const da = await res.json();
      dispatch(da);
    })();
  }, [page]);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

fetch;
