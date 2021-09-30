import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Helmet } from "react-helmet";

export default function MyHeader() {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>My Blog</h1>
    </Header>
  );
}
