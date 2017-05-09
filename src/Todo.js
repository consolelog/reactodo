import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Utils from './utils'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodo: '',
      allCompleted: false,
      list: []
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleToggleAll = this.handleToggleAll.bind(this)
    this.handleListUpdate = this.handleListUpdate.bind(this)
    this.handleListRemove = this.handleListRemove.bind(this)
  }

  handleKeyPress (input) {
    this.setState({
      list: this.state.list.concat({
        id: Utils.uuid(),
        completed: false,
        title: input
      })
    })
  }

  handleToggleAll (event) {
    this.setState({
      list: this.state.list.map(todo => {
        return Object.assign({}, todo, {
          completed: event.target.checked
        })
      })
    })
  }

  handleListUpdate (todo) {
    this.setState({
      list: this.state.list.map(listItem => {
        if (listItem.id === todo.id) {
          return Object.assign({}, listItem, {
            completed: todo.completed
          })
        }
        return listItem
      })
    })
  }

  handleListRemove (id) {
    this.setState({
      list: this.state.list.filter(listItem => {
        return listItem.id !== id
      })
    })
  }

  render () {
    return (
      <div className='todoapp'>
        <header>
          <h1>todos</h1>
          <TodoInput
            value={this.state.newTodo}
            onKeyPress={this.handleKeyPress}
          />
        </header>
        <section className='main'>
          <input
            className='toggle-all'
            type='checkbox'
            value='this.props.allCompleted'
            onChange={this.handleToggleAll}
          />
          <TodoList
            list={this.state.list}
            onListUpdate={this.handleListUpdate}
            onListRemove={this.handleListRemove}
          />
        </section>
      </div>
    )
  }
}

export default Todo
