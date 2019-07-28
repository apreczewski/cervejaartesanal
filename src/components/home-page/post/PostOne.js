import React from 'react';
import {Badge, Card, CardBody, Col} from "shards-react";

const PostOne = (post, idx) => (
  <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
    <Card small className="card-post card-post--1">
      <div className="card-post__image" style={{ backgroundImage: `url(${post.backgroundImage})` }}>
        <Badge pill className={`card-post__category bg-${post.categoryTheme}`}>
          {post.category}
        </Badge>
        <div className="card-post__author d-flex">
          <a
            href="#"
            className="card-post__author-avatar card-post__author-avatar--small"
            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
          >
            Written by {post.author}
          </a>
        </div>
      </div>
      <CardBody>
        <h5 className="card-title">
          <a href="#" className="text-fiord-blue"> {post.title} </a>
        </h5>
        <p className="card-text d-inline-block mb-3">{post.body}</p>
        <span className="text-muted">{post.date}</span>
      </CardBody>
    </Card>
  </Col>
);

export default PostOne;