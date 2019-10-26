import React, { Component } from "react";

class NumbersTable extends Component {
  render() {
    const { limit } = this.props;

    let numbers = [];
    for (let i = 1; i <= limit; i++) {
      let bgColor = i % 2 === 0 ? "red" : "white";
      numbers.push(
        <p key={i} style={{ backgroundColor: bgColor }}>
          {i}
        </p>
      );
    }
    return <div className="NumbersTable">{numbers}</div>;
  }
}

export default NumbersTable;
