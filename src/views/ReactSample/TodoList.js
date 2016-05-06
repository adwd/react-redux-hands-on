import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  constructor (props) {
    super(props)

    // コンストラクタでstateの初期値を設定する
    // コンストラクタ内ではthis.stateに直接代入するが、
    // ここ以外の状態の変更はthis.setStateを使う
    this.state = {
      newTodo: '',
      todos: [
        'learn react',
        'learn flux',
        'learn redux'
      ]
    }

    // クラスのメソッドは手動でbindしないといけない
    this.changeText = this.changeText.bind(this)
  }

  changeText (e) {
    this.setState({ newTodo: e.target.value })
  }

  // クラスのメソッドではなく、ラムダ式でプロパティに関数を設定するとbindしなくてよい（？）
  addTodo = () => {
    const newTodo = this.state.newTodo
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodoItem = (index) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    })
  }

  render () {
    // JSON形式でスタイルシートの直接指定ができる
    const style = {
      content: {
        padding: '10px 40px'
      },
      pre: {
        // ハイフンはキャメルケースにして書く
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

        <input type='text' value={this.state.newTodo} onChange={this.changeText} />
        <button onClick={this.addTodo}>add todo</button>
        {
          this.state.todos.map((text, index) => (
            <TodoItem index={index} onRemove={this.deleteTodoItem} key={index}>
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
