import React, { Component } from 'react'

class TodoListItem extends Component {
  constructor (props) {
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleCheck (event) {
    this.props.onListUpdate({
      id: this.props.todo.id,
      completed: event.target.checked,
      title: this.props.todo.title
    })
  }

  handleRemove () {
    this.props.onListRemove(this.props.todo.id)
  }

  render () {
    const completed = this.props.todo.completed
    const title = this.props.todo.title
    return (
      <li className={this.props.todo.completed ? 'completed' : ''}>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onChange={this.handleCheck}
        />
        <label>{title}</label>
        <button
          type='button'
          className='destroy'
          aria-label='remove'
          onClick={this.handleRemove}
        />
      </li>
    )
  }
}

TodoListItem.propTypes = {
  todo: React.PropTypes.object.isRequired
}

export default TodoListItem
