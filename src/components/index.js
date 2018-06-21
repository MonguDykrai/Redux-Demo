import React, { Component } from 'react'
import Button from './button'
import Display from './display'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Display />
        <Button />
      </div>
    )
  }
}

export default App