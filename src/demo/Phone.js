/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-26 13:48:21
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-28 14:04:13
 */ 
import React, { Component } from 'react'
import { Button } from 'antd'
import Pubsub from 'pubsub-js'

class Phone extends Component {
    constructor(props) {
        super(props)

        this.state = {
              data:'phone中的儲值s'   
        }
    }
    fun(){ 
        Pubsub.publish('evt',this.state.data)
    }
    render() {
        return (
            <div>
                phone
                <div>{this.props.data}</div>
                {/* <Button type='primary' onClick={this.props.fun.bind(this,this.state.data)}>phone组件传值</Button> */}
                {/* <Button type='primary' onClick={this.fun.bind(this)}>点击向news中传值</Button> */}
            </div>
        )
    }
}

export default Phone
