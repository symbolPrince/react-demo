/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 17:05:13
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 17:14:54
 */

var arr = [{ name: "张三", age: 18 }];
export const data = (state = arr[0].age, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.data;
    case "DEL":
      return state - action.data;
    default:
      return state;
  }
};
