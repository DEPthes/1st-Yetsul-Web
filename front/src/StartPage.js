import React, { Component } from "react";

class StartPage extends Component {
  render() {
    return (
      <div className="App">
        <div class="box">
          띵지 여러분 옛술의 전당에 오신 여러분 모두 환영합니다;) <br />
          옛술의 전당에 입장하기 위해선 아주 특별한 규칙이 있는데요
          <br />
          <br />
          .......
          <br />
          <br />
          <br />
          출력하시겠습니까?
        </div>

        <a class="btn" href="print">
          출력하기
        </a>
      </div>
    );
  }
}

export default StartPage;
