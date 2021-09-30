import { useContext } from "react";

import { Col, Layout, Pagination, Row } from "antd";
import "./App.css";
import BlogList from "./components/BlogList";
import { PageContext } from "./context/PageContextProvider";
import { DataContext } from "./context/DataContextProvider";
import MyHeader from "./components/MyHeader";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./components/Blog";
import Post from "./components/Post";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <MyHeader></MyHeader>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog/:id">
            <Post />
          </Route>
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
