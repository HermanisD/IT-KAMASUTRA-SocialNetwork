import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post"

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
        <Post message="Hi, how are you?" likes="15" dislikes="0"/>
        <Post message = "It's my first post" likes="20" dislikes="0"/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
