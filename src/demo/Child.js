/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-29 14:07:59
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 15:46:47
 */

import React from "react";
import { Button } from "antd";

function Child (props){
  const {name,fun}=props
  console.log(name)
  return(
  <div>
    <div>{name}</div>
    <Button onClick={fun.bind(this,'副标题更改')}>副标题更改</Button>
  </div>
  )
}

export default React.memo(Child)
// class Child extends React.PureComponent {
//   componentDidMount(){
//     console.log(this.props.name)
//   }
//   render() {
//     return <div>{this.props.name}</div>;
//   }
// }
// export default Child;
