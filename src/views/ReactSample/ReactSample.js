import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class ReactSample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newTodo: '',
      todos: [
        'learn react',
        'learn flux',
        'learn redux'
      ]
    }

    this.handleTextChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({newTodo: e.target.value})
  }

  handleClick = () => {
    const todo = this.state.newTodo
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, todo]
    })
  }

  render () {
    const style = {
      content: {
        padding: '10px 40px'
      },
      pre: {
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: 12,
        backgroundColor: '#eeeeee',
        margin: '20px',
        padding: '10px'
      }
    }

    return (
      <div style={style.content}>
        <h1>React Sample</h1>
        <h2>Todos</h2>
        <input type='text' value={this.state.newTodo} onChange={this.handleTextChange} />
        <button onClick={this.handleClick}>add todo</button>
        {
          this.state.todos.map((v, i) => <TodoItem key={i} text={v} count={i + 1} />)
        }
        <h3>state: </h3>
        <pre style={style.pre}>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
