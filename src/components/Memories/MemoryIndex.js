import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { memoryIndex } from '../../api/memory'
import messages from '../AutoDismissAlert/messages'

class MemoryIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      memories: []
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props

    memoryIndex(this.props.user)
      .then(res => {
        this.setState({ memories: res.data.memories })
      })
      .catch(() => {
        msgAlert({
          heading: 'Show All Memories Failed',
          variant: 'danger',
          message: messages.memoryShowFailure
        })
      })
  }

  render () {
    const { memories } = this.state

    let memoriesJsx

    if (this.state.memories.length < 1) {
      memoriesJsx = (<h3>Nothing to view - please add a memory.</h3>)
    } else {
      memoriesJsx = (memories.map(memory => (
        <Card key={memory.id}>
          <Card.Header>{memory.title}</Card.Header>
          <Card.Body>
            <Card.Text>{memory.description}</Card.Text>
            <Link to={`/memories/${memory.id}`}>
              <Button block="true">
              View Memory
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )))
    }

    return (
      <div>
        {memoriesJsx}
      </div>
    )
  }
}

export default MemoryIndex
