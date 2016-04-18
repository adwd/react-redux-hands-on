import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    count: PropTypes.number
  }

  render () {
    const { text, count } = this.props
    return (
      <div>
        <p>{count}: {text}</p>
      </div>
    )
  }
}
