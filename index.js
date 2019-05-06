import store from "./DataState/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderEntire = state => {
  debugger;
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerenderEntire(store.getState());

store.subscribe(rerenderEntire);
