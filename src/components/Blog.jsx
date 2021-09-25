import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

export default function Blog({ cover, description, title }) {
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
      <Meta title={title} description={description} />
    </Card>
  );
}
