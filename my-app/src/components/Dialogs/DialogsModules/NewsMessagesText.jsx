import React from "react";
import {
  onMessagesChangeActionCreat,
  addMessagesActionCreat
} from "../../../DataState/state";

const NewsMessagesText = props => {
  debugger;

  const newMessageElement = React.createRef();

  const addMessages = () => {
    props.dispatch(addMessagesActionCreat());
  };

  const onMessagesChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(onMessagesChangeActionCreat(text));
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onMessagesChange}
          ref={newMessageElement}
          placeholder={props.newMessagesText}
        />
        <div>
          <button onClick={addMessages}>addMessages</button>
        </div>
      </div>
    </div>
  );
};

export default NewsMessagesText;
