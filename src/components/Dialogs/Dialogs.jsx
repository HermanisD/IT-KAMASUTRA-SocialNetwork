import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';



const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' '+ s.active}>
                   <NavLink to="/dialogs/1">Andris</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/2">Ilze</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Elita</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4">Juris</NavLink>
                </div>
            </div>    
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>I am here!</div>


            </div>
        </div>
    )
}

export default Dialogs;