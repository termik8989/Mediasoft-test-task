import React from "react";
import classes from "./Post.module.css";
import PostLikesCount from "./PostLikesCount/PostLikesCount";

const Post = props => {
  debugger;
  return (
    <div className={classes.item}>
      <div className={classes.prewive}>
        {props.messages} {/*криво отображаються с права, погуглить css3 */}
        <div>
          <PostLikesCount countsLike={props.likesCount} />{" "}
        </div>
      </div>
      <img src="https://discourse-cdn-sjc1.com/turtlerock/uploads/default/original/3X/a/a/aa8eb1c0680746eab0d3651673fdf93f39aab36a.jpeg" />
    </div>
  );
};

export default Post;
