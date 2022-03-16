import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU" />
      post 1
      <div>
        <span>like</span>
        <br></br>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
