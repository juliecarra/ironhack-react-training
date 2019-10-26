import React, { Component } from "react";

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      nationality: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "", nationality: "" });
  };
  render() {
    const { email, password, nationality } = this.state;

    return (
      <div className="SignupPage">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <label htmlFor="nationality">Nationality</label>
          <select
            name="nationality"
            id="nationality"
            value={nationality}
            onChange={this.handleChange}
          >
            <option value="en">en</option>
            <option value="de">de</option>
            <option value="fr">fr</option>
          </select>

          <button>Sign up</button>
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.nationality === "de" ? "Hallo" : ""}
        {this.state.nationality === "en" ? "Hello" : ""}
        {this.state.nationality === "fr" ? "Bonjour" : ""}
        <p>{`Your email adress is: ${email}`}</p>
      </div>
    );
  }
}

export default SignupPage;
