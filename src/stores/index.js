/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-27 14:42:09
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-27 14:50:15
 */ 
export const createStore=function (initState){
    let state=initState
    let listeners=[]
    /**
     * 订阅 
     */
    function subscribe(listener){
        listeners.push(listeners)
    }

    /**
     * 改变值
     */
    function changeState(newState){
        state=newState
        for(let i =0;i<listeners.length;i++){
            const listener =listeners[i]
            listener()
        }
    }
    /**
     * 得到值
     */
    function getState(){
        return state
    }
    return{
        subscribe,
        changeState,
        getState
    }

}