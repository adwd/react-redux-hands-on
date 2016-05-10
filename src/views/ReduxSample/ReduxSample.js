import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, editNewTodo } from '../../redux/modules/todo'

class ReduxSample extends Component {
  static propTypes = {
    todo: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { todo: { newTodo, todos }, dispatch } = this.props

    // jsxのプロパティのアロー関数を入れるとESLintに怒られるのでここでつくる
    const edit = (e) => dispatch(editNewTodo(e.target.value))
    const add = () => dispatch(addTodo())
    const remove = (index) => () => dispatch(removeTodo(index))

    return (
      <div style={{padding: '10px 40px'}}>
        <h1>Redux Sample</h1>
        <h2>Todos</h2>

        <input type='text' value={newTodo} onChange={edit} />
        <button onClick={add}>add todo</button>
        {
          todos.map((text, index) => (
            <div>
              {`${index + 1}`}: {text}
              <input type='button' value='x' onClick={remove(index)} />
            </div>
          ))
        }
      </div>
    )
  }
}

const ConnectedReduxSample = connect(
  state => ({todo: state.todo})
)(ReduxSample)

export default ConnectedReduxSample
