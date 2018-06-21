import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'

class App extends Component {
  constructor(props) {
    super(props)

    const { store } = this.props
    const { increment, changeColor } = store.getState()
    const { color } = changeColor

    this.state = {
      color: color,
      increment: increment
    }
  }

  render() {
    const { color, increment } = this.state
    return (
      <div className="App">
        <span style={{ color, fontSize: 30 }}>{increment}</span>
        <button style={styles.button} onClick={() => this._handleIncrement()}>INCREMENT</button>
        <button style={styles.button} onClick={() => this._handleChangeColor()}>Chang Color</button>
      </div>
    )
  }

  _handleIncrement() {
  
    store.dispatch({ type: 'INCREMENT' }) // {type: "INCREMENT"} ...
    const { increment } = store.getState()
  
    this.setState({
      increment: increment
    })
  }

  _handleChangeColor() {
    
    store.dispatch({ type: 'BLUE' }) // {type: "INCREMENT"} ...
    const { changeColor } = store.getState()
    const { color } = changeColor
  
    this.setState({
      color: color
    })
  }
}

let styles = {
  button: {
    display: 'block',
    width: 200,
    height: 50,
    backgroundColor: 'red',
    color: '#fff',
    outline: 'none',
    border: 'none'
  }
}

function increment(state = 0, action = {}) {
  switch (action.type) {
    case 'INCREMENT':
      return (state = state + 1)
    default:
      return state
  }
}

function changeColor(state = { color: 'red' }, action = {}) {
  switch (action.type) {
    case 'BLUE':
      return (state = {
        color: 'blue'
      })
    default:
      return state
  }
}

const reducer = combineReducers({ increment, changeColor })

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <App store={store} />, document.getElementById('root'))