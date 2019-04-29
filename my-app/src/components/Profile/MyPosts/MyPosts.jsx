import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi bro", likesCount: 10 },
    { id: 1, message: "Its my forst post", likesCount: -1 }
  ];

  let postElemets = postData.map(posts => (
    <Post messages={posts.message} likesCount={posts.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea />
        <button>Add post</button>
        <div className={classes.posts} />
        {postElemets}
      </div>
    </div>
  );
};

export default MyPosts;
