import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
  let posts = props.posts.map((el) => {
    return (
      <Post message={el.message} likes={el.likes} dislikes={el.dislikes} />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
     props.dispatch({type:"ADD-POST"});
  };

  let onPostChange=()=>{
      let text=newPostElement.current.value;
      let action={type:"UPDATE-NEW-POST-TEXT", newText:text}
    props.dispatch(action);
    
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
