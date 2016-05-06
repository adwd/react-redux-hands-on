import React, { PropTypes } from 'react'

// 状態を持たないコンポーネントはただの関数として定義できる
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
const TodoItem = ({ index, onRemove, children }) => (
  <div>
    {`${index + 1}`}: {children} <input type='button' value='x' onClick={() => onRemove(index)} />
  </div>
)

TodoItem.propTypes = {
  index: PropTypes.number,
  onRemove: PropTypes.func,
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}

export default TodoItem
