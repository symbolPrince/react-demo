/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-26 10:03:44
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 17:33:41
 */

import React from "react";
import "./App.css";
import Home from "./demo/Home";
import New from "./demo/New";
import Redux from "./demo/Redux";
import "antd/dist/antd.css";
import {Button} from 'antd'
import { Route, NavLink, Switch, Redirect, withRouter} from "react-router-dom";
import "antd/dist/antd.css";
// import Home from "./demo/Home";
// import Parent from './demo/Parent'

function App(props) {
  props.history.listen((link)=>{
    console.log(link)
  })
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="App">
        <div>
          <NavLink to="/home">home</NavLink>
          <NavLink to={{pathname:'/redux',query:{name:'xiaoming'}}}>redux</NavLink>
          <NavLink to="/new/参数">new</NavLink>
          <Button onClick={()=>{props.history.push('/new')}}></Button>
        </div>
        {/* <Home/> */}
        <Switch>
          {/* <Route path='/' component={Home}></Route> */}
          <Route path="/home" component={Home}></Route>
          <Route path="/new/:id" component={New}></Route>
          <Route path="/redux" component={Redux}></Route>
          <Route path="/redux" component={Redux}></Route>
          <Redirect from="/" to="/home" exact></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
