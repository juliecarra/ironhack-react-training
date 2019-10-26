import React, { Component } from "react";

class Greetings extends Component {
  render() {
    const { lang, children } = this.props;

    if (lang === "de")
      return (
        <p className="Greetings__paragraph">
          Hallo <span>{children}</span>
        </p>
      );
    if (lang === "en")
      return (
        <p className="Greetings__paragraph">
          Hello <span>{children}</span>
        </p>
      );
    if (lang === "es")
      return (
        <p className="Greetings__paragraph">
          Hola <span>{children}</span>
        </p>
      );
    if (lang === "fr")
      return (
        <p className="Greetings__paragraph">
          Bonjour <span>{children}</span>
        </p>
      );
    return <div className="Greetings"></div>;
  }
}

export default Greetings;
