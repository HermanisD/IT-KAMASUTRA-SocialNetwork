import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map( (dialog)=>{ return (<DialogItem name={dialog.name} id={dialog.id} />)});

      
      
    let messagesElements = props.state.messages.map((message)=> {return (<Message message={message.message} />)});
  

    let newPostElement = React.createRef();

    let addPost = () => {
      let text=newPostElement.current.value;
      alert("Es šeit! " + text);
    };

return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div className={s.postsBlock}>
      <h3>Add message</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Dialogs;
