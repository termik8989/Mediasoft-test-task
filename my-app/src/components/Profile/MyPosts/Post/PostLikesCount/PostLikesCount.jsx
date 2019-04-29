import React from "react";
import classes from "./PostLikesCount.module.css";

class PostLikesCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countsLike: props.countsLike };

    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onPlus() {
    this.setState(statePlus => ({
      countsLike: statePlus.countsLike + 1
    }));
  }

  onMinus() {
    this.setState(stateMinus => ({
      countsLike: stateMinus.countsLike - 1
    }));
  }

  render() {
    return (
      <span>
        <button onClick={this.onMinus}>-</button>
        {this.state.countsLike}
        <button onClick={this.onPlus}>+</button>
      </span>
    );
  }
}

export default PostLikesCount;
