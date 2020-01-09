import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  // state의 password 값을 설정합니다.
  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  // state의 password 값을 검증합니다.
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "000"
    });
    this.input.focus(); // input으로 focus를 넘겨줍니다.
  };

  render() {
    return (
      <div>
        <input
          ref={ref => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
