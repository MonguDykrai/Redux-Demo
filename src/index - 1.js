import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

// reducer
function increment(state = 0, action = {}) {
  switch (action.type) {
    case 'INCREMENT':
      return (
        state = state + 1
      )
    default:
      return state
  }
}

const reducer = increment

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //  Used to activate Redux devtools.
)

/**
 * action
 * {type: 'INCREMENT'}
 */
store.dispatch({
  type: 'INCREMENT'
})

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'))