import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { memoryCreate } from '../../api/memory'

import MemoryForm from './MemoryForm.js'

class MemoryCreate extends Component {
  constructor () {
    super()
    this.state = {
      memory: {
        title: '',
        description: '',
        people: ''
      },
      createdId: null
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
    this.setState({ memory: editedMemory })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    memoryCreate(this.props.user, this.state.memory)
      .then(res => {
        // take the ID that was created and set it to the memory
        this.setState({ createdId: res.data.memory.id })
      })
      .catch(console.error)
  }

  render () {
    const { memory, createdId } = this.state

    let memoryJsx

    if (createdId) {
      // If the memory's ID already exists, redirect to SHOW that id
      memoryJsx = <Redirect to={`/memories/${createdId}`}/>
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

export default MemoryCreate
