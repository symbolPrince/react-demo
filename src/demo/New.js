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
import { Route, NavLink } from "react-router-dom";
import Homea from "./home/homea";
import Homeb from "./home/homeb";
class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "New中原有的数据",
    };
  }
  componentDidMount() {
    // console.log(this.context)
    // this.props.history.listen((link)=>{
    //   console.log(link)
    // })
    // console.log(this.props.match.params.id);
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
    return (
      <div>
        <p>News---{this.state.data}</p>
        {/* <Button onClick={()=>{let that=this;that.props.history.push('/home')}}>编程跳转</Button> */}
        <NavLink to="/new/homea">homea</NavLink>
        <NavLink to="/new/homb">homeb</NavLink>
        <Route path="/new/homea" component={Homea}></Route>
        <Route path="/new/homeb" component={Homeb}></Route>
      </div>
    );
  }
}

export default New;
