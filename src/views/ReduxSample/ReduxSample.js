/* eslint-disable react/jsx-no-bind, react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, editNewTodo } from '../../redux/modules/todo'
import TodoItem from './TodoItem'

const ReduxSample = ({ todo: { newTodo, todos }, dispatch }) => (
  <div style={{padding: '10px 40px'}}>
    <h1>Redux Sample</h1>
    <h2>Todos</h2>

    <input type='text' value={newTodo}
      onChange={e => dispatch(editNewTodo(e.target.value))} />
    <button onClick={() => dispatch(addTodo())}>add todo</button>
    {
      todos.map((text, index) => (
        <TodoItem key={index} text={text} index={index}
          remove={index => dispatch(removeTodo(index))} />
      ))
    }
  </div>
)

const ConnectedReduxSample = connect(
  state => ({todo: state.todo})
)(ReduxSample)

export default ConnectedReduxSample
