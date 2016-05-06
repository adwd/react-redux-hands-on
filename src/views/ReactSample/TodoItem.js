import React, { PropTypes } from 'react'

const TodoItem = ({ count, onRemove, children }) => (
  <div>
    {`${count + 1}`}: {children} <input type='button' value='x' onClick={() => onRemove(count)}></input>
  </div>
)

TodoItem.propTypes = {
  count: PropTypes.number,
  onRemove: PropTypes.func,
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

export default TodoItem
