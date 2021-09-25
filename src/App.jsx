import { useContext } from "react";

import { Col, Layout, Pagination, Row } from "antd";
import "./App.css";
import BlogList from "./components/BlogList";
import { PageContext } from "./context/PageContextProvider";
import { DataContext } from "./context/DataContextProvider";
import MyHeader from "./components/MyHeader";

const { Header, Content, Footer } = Layout;
function App() {
  const { page, setPage } = useContext(PageContext);
  const { data, post } = useContext(DataContext);

  return (
    <Layout>
      <MyHeader></MyHeader>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row>
            <Col> {post ? post : <BlogList />}</Col>
          </Row>
          <Row style={{ padding: "10px 5px" }}>
            <Col span={7}></Col>
            <Col span={10}>
              <Pagination
                defaultCurrent={page}
                total={data ? data.pagination.totalPage : 1}
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
