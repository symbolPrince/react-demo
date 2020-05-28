import React, { Component } from 'react';
import {store} from '../store/store'
import * as ACTION from '../store/action'
import { Button } from 'antd';

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            age:store.getState()
        }
        
    }
    componentDidMount(){
        console.log(store.getState())
        store.subscribe(()=>{this.setState({
            age:store.getState()
        })})
    }
  render() {
    return (
      <div> {this.state.age} <Button onClick={()=>{store.dispatch(ACTION.add(1))}}>加</Button><Button onClick={()=>{store.dispatch(ACTION.del(1))}}>减</Button></div>
    );
  }
}
