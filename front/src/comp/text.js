import React, { Component } from "react";
import axios from "axios";

export default class text extends Component {
  state = {
    text: "",
    result: ""
  };

  async componentDidMount() {
    const result = await axios
      .get("http://localhost:4000")
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      result: result.data
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const result = await axios
      .get(`http://localhost:4000/api/cow/${this.state.text}`)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
    await this.setState({
      result: result.data
    });
  };

  render() {
    return (
      <div className="container">
        <code>{this.state.result}</code>
        <form onSubmit={this.onSubmit}>
          <input
            className="input"
            placeholder="type..."
            name="text"
            onChange={this.onChange}
          />
          <br />
          <button className="btn btn-cow" type="submit">
            Show me a talking cow..!!
          </button>
        </form>
      </div>
    );
  }
}
