import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {combineReducers, createStore} from 'redux'

class App extends Component {
  render() {
    console.log(this.props)
    const { store } = this.props
    const { increment, changeColor } = store.getState()
    console.log(`increment:${increment}`)
    const { color } = changeColor
    return (
      <div className="App">
        <span style={{ color, fontSize: 30 }}>{ increment }</span>
        <button style={styles.button} onClick={this.props.handleIncrement}>INCREMENT</button>
      </div>
    )
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

function changeColor(state = {color: 'red'}, action = {}) {
  switch (action.type) {
    case 'BLUE':
      return (state = {
        color: 'blue'
      })
    default:
      return state
  }
}

const reducer = combineReducers({increment, changeColor})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function handleIncrement() {
  
  console.log(store.dispatch({type: 'INCREMENT'})) // {type: "INCREMENT"} ...
  console.log(store.getState()) // 1 2 3 怎么更新到视图上去？
}

ReactDOM.render(
  <App store={store} handleIncrement={handleIncrement} />, document.getElementById('root'))