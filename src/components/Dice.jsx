import React, { Component } from "react";

class Dice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.getRandomValue()
    };
    this.handleDice = this.handleDice.bind(this);
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  handleDice = () => {
    this.setState({ value: null });
    setTimeout(() => {
      this.setState({ value: this.getRandomValue() });
    }, 1000);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <img
          src={value ? `/img/dice${value}.png` : "img/dice-empty.png"}
          alt=""
          onClick={this.handleDice}
          width="200px"
        />
      </div>
    );
  }
}

export default Dice;
