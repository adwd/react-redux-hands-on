import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/modules/asyncTodo'

export class ReduxAsyncSample extends Component {
  static propTypes = {
    todo: PropTypes.any,
    fetch: PropTypes.func,
    edit: PropTypes.func,
    add: PropTypes.func,
    remove: PropTypes.func
  }

  componentDidMount () {
    this.props.fetch()
  }

  render () {
    const { newTodo, todos, loading, adding, removing } = this.props.todo
    const style = {
      p: {
        margin: '10px'
      },
      content: {
        height: 500,
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto'
      },
      pre: {
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: 12,
        backgroundColor: '#eeeeee',
        margin: '20px',
        padding: '10px'
      }
    }

    const edit = (e) => this.props.edit(e.target.value)
    const add = () => this.props.add(this.refs.newTodo.value)
    const remove = (index) => () => this.props.remove(index)

    return (
      <div style={style.content}>
        <h1>Redux Async Sample</h1>
        <h2>Todos</h2>

        <input type='text' value={newTodo} onChange={edit} ref='newTodo' disabled={adding || removing} />
        <button onClick={add} disabled={adding}>add todo</button>
        {loading
          ? <p>loading todo</p>
          : todos.map((text, index) => (
            <div key={index}>
              {`${index + 1}`}: {text}
              <button onClick={remove(index)} disabled={adding || removing}>x</button>
            </div>
          ))
        }
        <pre style={style.pre}>{JSON.stringify(this.props.todo, null, 2)}</pre>
      </div>
    )
  }
}

const ConnectedReduxAsyncSample = connect(
  state => ({
    todo: state.asyncTodo
  }),
  {
    fetch: actions.fetchTodos,
    edit: actions.editTodo,
    add: actions.addTodo,
    remove: actions.removeTodo
  }
)(ReduxAsyncSample)

export default ConnectedReduxAsyncSample
