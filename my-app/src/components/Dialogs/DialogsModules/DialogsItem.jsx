import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";


const DialogsItem = (props) => {
    return (
      <div className={classes.dialog + " " + classes.active}>
        <NavLink to={"/dialogs/" + props.id}>
        <img className={classes.userImg} src='https://msanl.nl/wp-content/uploads/2015/04/Echo_user_icon.svg_.png'/>
        <div>{props.name}</div>
        </NavLink>
      </div>
    );
  };
  
 

  export default  DialogsItem;