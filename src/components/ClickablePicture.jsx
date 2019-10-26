import React, { Component } from "react";

class ClickablePicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked = () => {
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  };

  render() {
    const { img, imgClicked } = this.props;
    const { clicked } = this.state;
    return (
      <div className="ClickablePicture">
        <img
          src={!clicked ? img : imgClicked}
          alt=""
          onClick={this.handleClicked}
        />
      </div>
    );
  }
}

export default ClickablePicture;
