import { Col, Row } from "antd";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import Blog from "./Blog";

export default function BlogList() {
  const { data } = useContext(DataContext);

  return (
    <Row gutter={[16, 16]}>
      {data &&
        data.posts.map(({ id, cover, description, title }) => (
          <Col md={12} key={id}>
            <Blog cover={cover} description={description} title={title} />
          </Col>
        ))}
    </Row>
  );
}
