/*
 * @Descripttion:
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 13:33:42
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 17:26:21
 */

import * as T from "./actionType";

export const changeData = (data) => {
  return {
    data: data,
    action: {
      type: T.CHANGE_BUTTON,
    },
  };
};
