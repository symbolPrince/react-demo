/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-29 14:09:08
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 16:24:34
 */

import React, { useState,useCallback,useMemo } from "react";
import { Button } from "antd";
import Child from "./Child";

function Parent() {
  const [title, setTitle] = useState("标题");
  const [subTitle, setSubTitle] = useState("副标题");
  const [num,setNum]=useState(0)

  function expensive(){
    let result=0
    for(let i=0;i<10000;i++){
      result+=i
    }
    return result
  }
  // const base=expensive()
  let a=0
  let b=0
  const base=useMemo(expensive,[a,b])
  function fun(){
    setSubTitle("修改副标题")
  }
  const memoizerCallBack=useCallback(fun,[])
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <Child name={'逃之夭夭'} fun={memoizerCallBack}/>
      <Button type="dashed" onClick={()=>{setTitle("改标题")}}>
        改标题
      </Button>
  <div>{num}</div>
  <Button type='ghost' onClick={()=>{setNum(num+base)}}>++</Button>
      {/* <Button type="ghost" onClick={()=>{ setSubTitle("修改副标题")}}>
        改副标题
      </Button> */}
    </div>
  );
}

export default Parent;
