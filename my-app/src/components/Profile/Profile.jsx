import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./ProfulesModules/MyPosts";
import ProfileInfo from "./ProfulesModules/ProfileInfo";

const Profile = props => {
  debugger;
  return (
    <div>
      <ProfileInfo />

      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
       
      />
    </div>
  );
};

export default Profile;
