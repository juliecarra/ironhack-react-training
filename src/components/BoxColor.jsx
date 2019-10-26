import React, { Component } from "react";

class BoxColor extends Component {
  render() {
    const { r, g, b } = this.props;

    let rgb = `rgb(${r}, ${g}, ${b})`;

    let hex =
      "#" +
      ("0" + r.toString(16)).substr(-2) +
      ("0" + g.toString(16)).substr(-2) +
      ("0" + b.toString(16)).substr(-2);

    return (
      <div className="BoxColor" style={{ backgroundColor: rgb }}>
        <p className="BoxColor__paragraph">
          rgb({r},{g},{b})
        </p>
        <p className="BoxColor__paragraph">{hex}</p>
      </div>
    );
  }
}

export default BoxColor;
