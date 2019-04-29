import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Graphics from "./components/Graphics/Graphics";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs} /> {/* exact - возможно это придеться использовать для точного выбора url'а */}
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/graphics' component={Graphics}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
