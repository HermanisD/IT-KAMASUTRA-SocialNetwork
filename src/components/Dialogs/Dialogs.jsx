import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props)=>{
    return(
        <div className={s.dialog + ' '+ s.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props => {
    return(
    <div className={s.message}>{props.message}</div>
    )
})

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Andris" id="1"/>
                <DialogItem name="Ilze" id="2"/>
                <DialogItem name="Elita" id="3"/>
                <DialogItem name="Juris" id="4"/>
                
            </div>    
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Hello!"/>
                <Message message = "I am here!"/>
                <Message message = "I am here!"/>
            </div>
        </div>
    )
}

export default Dialogs;