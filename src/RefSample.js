import React, { Component } from "react";

class RefSample extends Component {
  // 컴포넌트 내부의 멤버 변수로 ref를 담아줍니다.
  input = React.createRef();

  handleFocus = () => {
    // 조회하려면 this.input.current를 사용해 콜백 함수처럼 접근합니다.
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
