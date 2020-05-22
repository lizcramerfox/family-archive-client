import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { memoryShow, memoryDestroy } from '../../api/memory'
import { Redirect } from 'react-router-dom'
// import MemoryForm from './MemoryForm'

class MemoryShow extends Component {
  constructor () {
    super()
    this.state = {
      editable: true,
      deleted: false
    }
  }

  componentDidMount () {
    memoryShow(this.props.user, this.props.id)
      .then(res => {
        this.setState({ memory: res.data.memory })
      })
      .catch(console.error)
  }

  deleteMemory = () => {
    memoryDestroy(this.props.user, this.props.id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
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
            <Button variant="warning">Update</Button>
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
