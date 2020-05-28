/*
 * @Descripttion: demo主页
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-26 13:27:40
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 17:24:02
 */ 

import React, { Component } from "react";
import { Button } from "antd";
import Phone from "./Phone";
import New from "./New";
import Reduex from './Redux'
import 'antd/dist/antd.css';
import {store} from '../redux/index'
import {changeData} from '../redux/actions'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeData: "home中原來的數據",
      storeData:store.getState().state.data
    };
  }
  componentDidMount() {
    console.log(store)
    store.subscribe(()=>{
      console.log(store.getState().state)
      this.setState({storeData:store.getState().state.data})})
  }
  /**
   * @name: 改變組件內的額值
   * @param {type} 
   * @return: 
   */
  fun = () => {
    this.setState({
      homeData: "home改變的數據",
    });
  };
  /**
   * @name: 自组件向父组件传值
   * @param {type} 
   * @return: 
   */
  phoneFun=(data)=>{
    this.setState({
      homeData:data
    })
  }
  render() {
    return (
      <div>
        <div>home中的數據----{this.state.homeData}</div>
        <Phone data={this.state.homeData} fun={this.phoneFun}></Phone>
        <New ></New>
        <Button type='primary' onClick={this.fun}>点击改变home的值</Button>
        <div>{this.state.storeData}</div>
        <Button type='primary' onClick={()=>{store.dispatch(changeData('很好'))}}>redux</Button>
        <Reduex></Reduex>
      </div>
    );
  }
}

export default Home;
