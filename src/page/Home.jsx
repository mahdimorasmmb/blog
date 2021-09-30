import { Col, Pagination, Row } from "antd";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import BlogList from "../components/BlogList";

import { DataContext } from "../context/DataContextProvider";
import { PageContext } from "../context/PageContextProvider";

export default function Home() {
  const { page, setPage } = useContext(PageContext);
  const { data } = useContext(DataContext);
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 380 }}
    >
      <Helmet>
        <title>بلاگ </title>
        <meta name="description" content="این بلاگ هست" />
      </Helmet>
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
            total={data ? data.pagination.totalPage : 1}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </Col>
        <Col span={7}></Col>
      </Row>
    </div>
  );
}
