/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-28 17:15:07
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 17:18:54
 */ 
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
// import helloSaga from '../saga/sagas'
import {data} from './reducer'
const sagaMiddleware =createSagaMiddleware();
export const store = createStore(data,applyMiddleware(sagaMiddleware))

// sagaMiddleware.run(helloSaga)