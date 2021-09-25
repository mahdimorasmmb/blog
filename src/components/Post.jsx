import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

export default function Post({ title, description, cover, content }) {
  return (
    <Card
      style={{ height: "100%" }}
      hoverable
      cover={
        <img
          style={{ height: "100%" }}
          alt="example"
          src={`https://media.bourseon.com/${cover}`}
        />
      }
    >
      <Row gutter={[15, 15]}>
        <Col>
          <Meta title={title} description={content} />
        </Col>
      </Row>
    </Card>
  );
}
