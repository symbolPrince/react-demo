/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 17:05:13
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 17:14:54
 */ 
const obj={
  age:18
}
export const data=(state=obj,action)=>{
  switch (action.type) {
    case 'add':
      return {
        ...state,
        data:action.data
      }
    default:
      return {
        state
      }
  }
}