/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-26 10:03:44
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 17:33:41
 */

// import React from "react";
import React, { Component } from 'react'
import "./App.css";
import "antd/dist/antd.css";
// import Home from "./demo/Home";
import ContextFa from './demo/ContextFa'
// import Parent from './demo/Parent'
import PropTypes from 'prop-types'
// function App() {
//   return (
//     <div className="App">
//       <div>
//          {/* <Home />
//         <Parent></Parent> */}
//         <ContextFa></ContextFa>
//       </div>
//     </div>
//   );
// }
class App extends Component {
  static childContextTypes={
    name:PropTypes.string
  }
  state={
    name:'contex'
  }
  getChildContext(){
    return {name:this.state.name}
  }
  render() {
    return (
      <div>
        这是爷爷组件
        <ContextFa/>
      </div>
    )
  }
}

export default App
