import React, { Component } from "react";

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="IdCard">
        <img src={picture} alt="" />
        <strong>
          First Name<span>: {firstName}</span>
        </strong>
        <strong>
          Last Name<span>: {lastName}</span>
        </strong>
        <strong>
          Gender<span>: {gender}</span>
        </strong>
        <strong>
          Height<span>: {height}</span>
        </strong>
        <strong>
          Birth <span>: {birth.toDateString()}</span>
        </strong>
      </div>
    );
  }
}

export default IdCard;
