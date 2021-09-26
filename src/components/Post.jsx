import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

export default function Post({ title, description, cover, content }) {
  const { home } = useContext(DataContext);
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
        <Col>
          <Button
            onClick={() => {
              home();
            }}
            type="primary"
          >
            برگشت
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
