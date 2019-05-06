import React from "react";
import classes from "./../StyleModules/MyPosts.module.css";
import Post from "./Post";
import AddNewPostText from "./AddNewPostText";


const MyPosts = props => {
 
  const postElemets = props.posts.map(posts => (
    <Post
      key={posts.id}
      messages={posts.message}
      likesCount={posts.likesCount}
    />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostText dispatch={props.dispatch} newPostText={props.newPostText} />
      {postElemets}
    </div>
  );
};

export default MyPosts;
