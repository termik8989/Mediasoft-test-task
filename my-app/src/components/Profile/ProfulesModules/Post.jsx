import React from "react";
import classes from "./../StyleModules/Post.module.css";
import PostLikesCount from "./PostLikesCount";

const Post = props => {
  return (
    <div className={classes.item}>
      <div className={classes.prewive}>
        {props.messages} 
        <div>
          <PostLikesCount countsLike={props.likesCount} />
        </div>
      </div>
      <img src="https://discourse-cdn-sjc1.com/turtlerock/uploads/default/original/3X/a/a/aa8eb1c0680746eab0d3651673fdf93f39aab36a.jpeg" />
    </div>
  );
};

export default Post;
