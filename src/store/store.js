/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 17:15:07
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 17:18:54
 */ 
import {createStore} from 'redux'
import {data} from './reducer'
export const store = createStore(data)