import React, { Component } from "react";
import ContextCh from "../demo/ContextCh";

class ContextFa extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    return (
      <div>
        父类组件
        <ContextCh></ContextCh>
      </div>
    );
  }
}

export default ContextFa;
