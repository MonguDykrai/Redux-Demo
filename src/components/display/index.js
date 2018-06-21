import React from 'react'
import { connect } from 'react-redux'

function Display(props) {
  return (
    <span className="displayValue">{ props.counter }</span>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(Display)