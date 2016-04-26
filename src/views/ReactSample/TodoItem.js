import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {
  static propTypes = {
    count: PropTypes.number,
    children: PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }

  render () {
    const { count, children } = this.props
    return (
      <div>
        {count}: {children}
      </div>
    )
  }
}
