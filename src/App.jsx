import { useContext } from "react";

import { Col, Layout, Pagination, Row } from "antd";
import "./App.css";
import BlogList from "./components/BlogList";
import { PageContext } from "./context/PageContextProvider";
import { DataContext } from "./context/DataContextProvider";

const { Header, Content, Footer } = Layout;
function App() {
  const { page, setPage } = useContext(PageContext);
  const { data } = useContext(DataContext);
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>My Blog</h1>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row>
            <Col>
              {" "}
              <BlogList />
            </Col>
          </Row>
          <Row style={{ padding: "10px 5px" }}>
            <Col span={7}></Col>
            <Col span={10}>
              <Pagination
                defaultCurrent={page}
                total={data.pagination.totalPage}
                onChange={(page) => {
                  setPage(page);
                }}
              />
            </Col>
            <Col span={7}></Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
