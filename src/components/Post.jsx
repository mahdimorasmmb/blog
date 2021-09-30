import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContextProvider";
import ContentPost from "./ContentPost";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  console.log(id);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.bourseon.com/posts/${id}`);
      const da = await res.json();
      setPost(da);
    })();
  }, []);
  return (
    <Card
      style={{ height: "100%" }}
      hoverable
      cover={
        <img
          style={{ height: "100%" }}
          alt="example"
          src={`https://media.bourseon.com/${post.cover}`}
        />
      }
    >
      <Helmet>
        <title>پست</title>
        <meta name="description" content="این صفحه پست می باشد " />
      </Helmet>
      <Row gutter={[15, 15]}>
        <Col>
          <div>
            <h2>{post.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </div>
        </Col>
        <Col>
          <Link to="/">برگشت</Link>
        </Col>
      </Row>
    </Card>
  );
}
