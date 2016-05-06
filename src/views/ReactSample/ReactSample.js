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

    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange (e) {
    this.setState({ newTodo: e.target.value })
  }

  handleClick = () => {
    const newTodo = this.state.newTodo
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, newTodo]
    })
  }

  handleDeleteTodoItem = (index) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
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
          this.state.todos.map((text, index) => (
            <TodoItem count={index} onRemove={this.handleDeleteTodoItem} key={index}>
              {text}
            </TodoItem>
          ))
        }

        <h3>state: </h3>
        <pre style={style.pre}>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }
}
