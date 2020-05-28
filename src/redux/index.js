/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 14:12:29
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 16:29:44
 */ 
import {createStore} from 'redux'
import {changeBtnReduce} from './reducers'

export const store =createStore(changeBtnReduce);
// const unsubscribe =store.subscribe(()=>{console.info(store.getState())})

// store.dispatch(changeData('修改變量'))
// unsubscribe()