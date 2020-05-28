/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 11:15:24
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 16:28:23
 */

import * as T from "./actionType";
const initState = {
  data: "全局变量",
};
export const changeBtnReduce = (state = initState, action) => {
  switch (action.type) {
    case T.CHANGE_BUTTON:
      return {
        ...state,
        data: action.data,
      };
      default:
        return{
          state
        }
  }
};
