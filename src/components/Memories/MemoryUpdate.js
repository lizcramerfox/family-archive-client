import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { memoryUpdate } from '../../api/memory'

import MemoryForm from './MemoryForm.js'

class MemoryUpdate extends Component {
  constructor () {
    super()
    this.state = {
      memory: {
        title: '',
        description: '',
        people: ''
      },
      updated: false
    }
  }

  handleChange = (event) => {
    // saves form fields into a key:value pair ("Field Name"=key; "Field Value"=value)
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // merge updated fields into an object with the edited data & state
    const editedMemory = Object.assign(this.state.memory, updatedField)

    // set the state
    this.setState({ memory: editedMemory, updated: true })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    memoryUpdate(this.user, this.state.memory)
      .then(res => {
        // take the memory that was created and set it to the new state
        this.setState({ memory: res.data.memory, updated: false })
      })
      .catch(console.error)
  }

  render () {
    const { memory, updated } = this.state

    let memoryJsx

    if (!updated) {
      // If the memory is not updated, return to SHOW
      memoryJsx = <Redirect to={`/memories/${this.memory.id}`} />
    } else {
      memoryJsx = (
        <MemoryForm
          memory={memory}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }

    return (
      <div>
        {memoryJsx}
      </div>
    )
  }
}

export default MemoryUpdate
