import React, { Component } from "react";

class Rating extends Component {
  render() {
    const { children } = this.props;

    let round = Math.round(children);

    return (
      <div className="Rating">
        <p style={{ color: "#fff" }}>
          {"★".repeat(round)}
          {"☆".repeat(5 - round)}
        </p>
      </div>
    );
  }
}

export default Rating;
