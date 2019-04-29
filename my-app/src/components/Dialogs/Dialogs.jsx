import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogsItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.dialog}>{props.messages}</div>;
};



const Dialogs = (props) => {

  let dialogsData = [
    {id: 1 , name: 'Dimych'  },
    {id: 2 , name: 'Andrey'  },
    {id: 3 , name: 'Sveta'  },
    {id: 4 , name: 'Viktor'  },
  ];
  let messagesData = [
    {id: 1 , messages: 'Hi'},
    {id: 1 , messages: 'How is yuo'},
    {id: 1 , messages: 'you'},
  ]
  
  let dialogsElement = dialogsData.map( (dialog) => <DialogsItem name={dialog.name} id={dialog.id} /> )

  let messagesElement = messagesData.map( (messag) =>  <Message messages={messag.messages} />)
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={classes.messages}>
       {messagesElement}
      </div>
    </div>
  );
};
export default Dialogs;
