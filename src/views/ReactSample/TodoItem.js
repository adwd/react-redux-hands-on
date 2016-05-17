import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {
  static propTypes = {
    index: PropTypes.number,
    onRemove: PropTypes.func,
    children: PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }
  
  render() {
    const { index, onRemove, children } = this.props;
    return (
      <div>
        {`${index + 1}`}: {children} <input type='button' value='x' onClick={() => onRemove(index)} />
      </div>
    );
  }
}
