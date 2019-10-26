import React, { Component } from "react";

class CreditCard extends Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color
    } = this.props;

    let hiddenNumbers = "•".repeat(4);
    let numbers = number.substr(12);

    let card = type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
    return (
      <div
        className="CreditCard"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div className="CreditCard__image">
          <img src={card} alt="" style={{ width: "100px" }} />
        </div>
        <p>
          {hiddenNumbers} {hiddenNumbers} {hiddenNumbers} {numbers}
        </p>
        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    );
  }
}

export default CreditCard;
