import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {
  render () {
    const listItems = this.props.list.map((listItem) => {
      return (
        <TodoListItem
          key={listItem.id}
          todo={listItem}
          onListUpdate={this.props.onListUpdate}
          onListRemove={this.props.onListRemove}
        />
      )
    })

    return (
      <div>
        <ul className='todo-list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  list: React.PropTypes.array.isRequired
}

export default TodoList
