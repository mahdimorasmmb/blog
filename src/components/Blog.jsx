import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

export default function Blog({ id, cover, description, title }) {
  const { handelPost } = useContext(DataContext);
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
          <Meta title={title} description={description} />
        </Col>
        <Col>
          <Button
            onClick={() => {
              handelPost(id);
            }}
            type="primary"
          >
            ادامه مطلب
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
