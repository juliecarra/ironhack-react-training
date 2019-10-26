import React, { Component } from "react";

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;

    let round = Math.round(rating);
    return (
      <div className="DriverCard">
        <h1>{name}</h1>
        <img src={img} alt="" style={{ width: "200px" }} />
        <span>
          {"★".repeat(round)}
          {"☆".repeat(5 - round)}
        </span>
        <p>
          {car.model} - <span>{car.licensePlate}</span>
        </p>
      </div>
    );
  }
}

export default DriverCard;
