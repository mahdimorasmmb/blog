import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Post from "../components/Post";
import dataReducer from "../reducers/dataReducer";

import { PageContext } from "./PageContextProvider";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, "");

  const { page } = useContext(PageContext);

  // const handelPost = (id) => {
  //   return data.posts.map((item) => {
  //     if (item.id === id) {

  //         <Post title={item.title} cover={item.cover} content={item.content} />

  //     }
  //   });
  // };

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.bourseon.com/posts/?page=${page}`);
      const da = await res.json();
      dispatch({
        type: "fetch",
        payload: da,
      });
    })();
  }, [page]);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

fetch;
