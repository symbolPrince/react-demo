/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-26 13:47:45
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 15:00:15
 */ 
import React, { Component } from "react";
import Pubsub from "pubsub-js";
import ThemeContext from './Home'
class New extends Component {
  static contextType =ThemeContext
  constructor(props) {
    super(props);

    this.state = {
      data: "New中原有的数据",
    };
  }
  componentDidMount() {
    console.log(this.context)
    Pubsub.subscribe("evt", (msg, data) => {
      this.setState({
        data,
      });
    });
  }
  // fun() {
  //   Pubsub.subscribe("evt", (msg, data) => {
  //     this.setState({
  //       data,
  //     });
  //   });
  // }
  render() {
    return <div>News---{this.state.data}</div>;
  }
}

export default New;
