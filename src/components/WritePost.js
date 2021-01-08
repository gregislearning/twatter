import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Post.module.scss";

const WritePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.Posts;
  });

  const [currentPostContent, setPostContent] = useState({
    author: "",
    post: ""
  });

  const onChange = (e) => {
    setPostContent({ post: e.target.value });
  };

  const handleSubmit = () => {
    dispatch({ type: "Posts/addPost", payload: currentPostContent });
    setPostContent({ post: "" });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            onChange={(e) => onChange(e)}
            value={currentPostContent.post}
          ></Input>
        </Form.Item>
        <Button
          onClick={handleSubmit}
          disabled={currentPostContent.post === "" ? true : false}
        >
          Post
        </Button>
      </Form>
      {posts.map((post, i) => (
        <div key={i} className={styles.post}>
          {post.post}
        </div>
      ))}
    </div>
  );
};

export default WritePost;
