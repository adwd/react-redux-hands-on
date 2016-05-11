import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import LinearProgress from 'material-ui/LinearProgress'
import { fetchTodos, editTodo, addTodo, removeTodo } from '../../redux/modules/asyncTodo'

class ReduxAsyncSample extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    todo: PropTypes.any
  }

  componentDidMount () {
    this.props.dispatch(fetchTodos())
  }

  render () {
    const { dispatch } = this.props
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
    console.log(this.props)

    const edit = (e) => dispatch(editTodo(e.target.value))
    const add = () => dispatch(addTodo(this.refs.newTodo.value))
    const remove = (index) => () => dispatch(removeTodo(index))

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
  })
)(ReduxAsyncSample)

export default ConnectedReduxAsyncSample
