import React, { Component } from 'react'

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange (e) {
    this.setState({
      title: e.target.value
    })
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.props.onKeyPress(e.target.value.trim())
      this.setState({
        title: ''
      })
    }
  }

  render () {
    return (
      <div className='form'>
        <input
          className='new-todo'
          type='text'
          placeholder='What needs to be done?'
          aria-label='New todo item'
          value={this.state.title}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}

export default TodoInput
