import React, { Component } from "react";
// import ValidationSample from "./ValidationSample";
// import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";

import "./App.css";

// 함수형 컴포넌트에서 클래스형 컴포넌트로 바꿔놓습니다.
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollbox = ref)} />
        {/* 화살표 함수로 함수를 호출하여 렌더링 시 발생할 수 있는 오류를 막습니다. */}
        <button onClick={() => this.scrollbox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
