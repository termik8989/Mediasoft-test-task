import React from "react";
import classes from "./../StyleModules/ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.header}>
        <img src="http://s1.1zoom.me/b5050/137/371625-svetik_1440x900.jpg" />
      </div>
      <div className={classes.BlockDescription}>
       ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
