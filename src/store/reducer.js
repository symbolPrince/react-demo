/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 17:05:13
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 10:58:34
 */

var arr = [{ name: "张三", age: 18 }];
export const data = (state = arr, action) => {
  switch (action.type) {
    case "ADD":
      state= state.map((value)=>{
        value.age+=action.data
        return value
      });
      return state;
    case "DEL":
      return state.map((value,index)=>{
        value.age-=action.data
        return value
      });
    default:
      return state;
  }
};
