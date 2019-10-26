import React, { Component } from "react";

class Random extends Component {
  render() {
    const { min, max } = this.props;

    let randomNumber = Math.floor(Math.random() * (max - min) + 1);
    return (
      <div className="Random">
        <p className="Random__paragraph">
          Random value between <span>{min}</span> and <span>{max}</span> =>{" "}
          <span>{randomNumber}</span>
        </p>
      </div>
    );
  }
}

export default Random;
