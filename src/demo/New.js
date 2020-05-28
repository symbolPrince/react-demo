import React, { Component } from "react";
import Pubsub from "pubsub-js";
class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "New中原有的数据",
    };
  }
  componentDidMount() {
    Pubsub.subscribe("evt", (msg, data) => {
      this.setState({
        data,
      });
    });
  }
  fun() {
    Pubsub.subscribe("evt", (msg, data) => {
      this.setState({
        data,
      });
    });
  }
  render() {
    return <div>News---{this.state.data}</div>;
  }
}

export default New;
