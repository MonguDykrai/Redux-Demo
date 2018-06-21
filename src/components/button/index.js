import React, {Component} from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions'

class Button extends Component {
  render() {
    return (
      <div className="button-container">
        <button onClick={() => this._increment()}>INCREMENT</button>
        <button className="decrement" onClick={() => this._decrement()}>DECREMENT</button>
      </div>
    )
  }

  _increment() {
    const { dispatch } = this.props
    dispatch(increment)
  }

  _decrement() {
    const { dispatch } = this.props
    dispatch(decrement)
  }
}

export default connect()(Button)