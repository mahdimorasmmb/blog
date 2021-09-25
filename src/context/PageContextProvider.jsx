import React, { Children, createContext, useState } from "react";

export const PageContext = createContext();

export default function PageContextProvider(props) {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
}
