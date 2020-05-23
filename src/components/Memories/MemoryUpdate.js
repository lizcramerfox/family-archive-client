import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { memoryUpdate, memoryShow } from '../../api/memory'
import messages from '../AutoDismissAlert/messages'
import MemoryForm from './MemoryForm'

class MemoryUpdate extends Component {
  constructor () {
    super()

    this.state = {
      memory: null,
      updated: false
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    memoryShow(this.props.user, this.props.id)
      .then(res => {
        this.setState({ memory: res.data.memory })
      })
      // .then(() => {
      //   msgAlert({
      //     heading: 'Display Memory Success',
      //     variant: 'success',
      //     message: messages.memoryShowSuccess
      //   })
      // })
      .catch(() => {
        msgAlert({
          heading: 'Display Memory Failed',
          variant: 'danger',
          message: messages.memoryShowFailure
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { msgAlert } = this.props

    memoryUpdate(this.props.user, this.state.memory, this.props.id)
      .then(() => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Update Memory Success',
          variant: 'success',
          message: messages.memoryShowSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Update Memory Failed',
          variant: 'danger',
          message: messages.memoryUpdateFailure
        })
      })
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

  render () {
    const { memory, user, updated } = this.state

    let memoryJsx

    if (!memory) {
      memoryJsx = 'Loading...'
    } else if (updated) {
      memoryJsx = <Redirect to={`/memories/${this.props.id}`} />
    } else {
      memoryJsx = (
        <div>
          <MemoryForm
            memory={memory}
            user={user}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }
    return (
      memoryJsx
    )
  }
}

export default MemoryUpdate
