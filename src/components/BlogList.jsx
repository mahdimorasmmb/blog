import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";

export default function BlogList() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.bourseon.com/posts")
      .then((r) => r.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <Row gutter={[16, 16]}>
      {data.posts.map((item) => (
        <Col md={12} key={item.id}>
          <Card
            style={{ height: "100%" }}
            hoverable
            cover={
              <img
                style={{ height: "100%" }}
                alt="example"
                src={`https://media.bourseon.com/${item.cover}`}
              />
            }
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
