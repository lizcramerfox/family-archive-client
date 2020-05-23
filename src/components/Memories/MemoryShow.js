import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { memoryShow, memoryDestroy } from '../../api/memory'
import messages from '../AutoDismissAlert/messages'
import { Link, Redirect } from 'react-router-dom'

class MemoryShow extends Component {
  constructor () {
    super()
    this.state = {
      editable: true,
      deleted: false
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    memoryShow(this.props.user, this.props.id)
      .then(res => {
        this.setState({ memory: res.data.memory })
      })
      .then(() => {
        msgAlert({
          heading: 'Show Memory Success',
          variant: 'success',
          message: messages.memoryShowSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Show Memory Failed',
          variant: 'danger',
          message: messages.memoryShowFailure
        })
      })
  }

  deleteMemory = () => {
    const { msgAlert } = this.props
    memoryDestroy(this.props.user, this.props.id)
      .then(() => this.setState({ deleted: true }))
      .then(() => {
        msgAlert({
          heading: 'Delete Memory Success',
          variant: 'success',
          message: messages.memoryDeleteSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Delete Memory Failed',
          variant: 'danger',
          message: messages.memoryDeleteFailure
        })
      })
  }

  render () {
    if (!this.state.memory) {
      return (<p>Loading memory...</p>)
    } else if (this.state.deleted) {
      return (<Redirect to='/memories' />)
    } else {
      const memoryJsx = (
        <Card>
          <Card.Body>
            <Card.Header>Memory ID: {this.state.memory.id}</Card.Header>
            <Card.Title>{this.state.memory.title}</Card.Title>
            <Card.Text>{this.state.memory.description}</Card.Text>
            <Card.Text>{this.state.memory.people}</Card.Text>
            <Button variant="warning">
              <Link to={`/memories/${this.state.memory.id}/edit`}>Update</Link>
            </Button>
            <Button variant="danger" onClick={this.deleteMemory}>Delete</Button>
          </Card.Body>
        </Card>
      )
      return (
        <div>
          {memoryJsx}
        </div>
      )
    }
  }
}

export default MemoryShow
