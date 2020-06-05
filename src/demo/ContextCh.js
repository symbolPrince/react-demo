import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContextCh extends Component {
  static contextTypes={
    name:PropTypes.string
  }
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }
  componentDidMount() {
    console.log(this.context)
  }
  
  render() {
    return (
      <div>
        子类组件
      </div>
    )
  }
}

export default ContextCh
