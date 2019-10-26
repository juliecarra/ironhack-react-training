import React, { Component } from "react";

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber = () => {
    this.setState(prevState => {
      return { number: prevState.number + 1 };
    });
  };

  render() {
    const { number } = this.state;

    let colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    let i = number % colors.length;
    let style = {
      color: "#fff",
      backgroundColor: colors[i]
    };
    return (
      <div className="LikeButton">
        <button onClick={this.handleNumber} style={style}>
          {number}
          {number === 1 ? "Like" : "Likes"}
        </button>
      </div>
    );
  }
}

export default LikeButton;
