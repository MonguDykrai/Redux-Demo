import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'


class Increment extends Component {
  state = {
    increment: 0
  }

  render() {
    const { styles } = this.props
    const { store } = this.props
    const increment = store.getState()
    return (
      <div>
        <span style={{ fontSize: 30 }}>{increment}</span>
        <button style={styles.button} onClick={() => this._handleIncrement(store)}>INCREMENT</button>
      </div>
    )
  }

  _handleIncrement(store) {

    store.dispatch({ type: 'INCREMENT' })

    this.setState({
      increment: store.getState()
    })
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Increment {...this.props} styles={styles} />
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
const reducer = increment

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <App store={store} />, document.getElementById('root'))