/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-29 09:28:26
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 11:00:33
 */

import React, { Component } from "react";
import { store } from "../store/store";
import * as ACTION from "../store/action";
import { Button } from "antd";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: store.getState()[0].age,
      arr: store.getState(),
    };
  }
  componentDidMount() {
    // console.log(this.props.location.query)
    store.subscribe(() => {
      this.setState({
        arr: store.getState()
      });
    });
  }
  render() {
    return (
      <div>
        <div> {this.state.age}</div>{" "}
        <Button
          onClick={() => {
            store.dispatch(ACTION.add(1));
          }}
        >
          加
        </Button>
        <Button
          onClick={() => {
            store.dispatch(ACTION.del(1));
          }}
        >
          减
        </Button>
        <div>
          {this.state.arr.map((value, index) => {
            return <p key={index}>姓名:{value.name}年龄：{value.age}</p>;
          })}
        </div>
      </div>
    );
  }
}
