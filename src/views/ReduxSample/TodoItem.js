/* eslint-disable react/jsx-no-bind, react/prop-types */
import React from 'react'

const TodoItem = ({ text, index, remove }) => (
  <div>
    {`${index + 1}`}: {text}
    <button onClick={() => remove(index)} >x</button>
  </div>
)

export default TodoItem
