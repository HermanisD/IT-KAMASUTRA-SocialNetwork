import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  

  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU" />
      {props.message}
      <div>
        <span>Likes: {props.likes}</span>
        <br></br>
        <span>Dislikes: {props.dislikes}</span>
      </div>
    </div>
  );
};

export default Post;
