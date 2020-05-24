import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardDeck, Button } from 'react-bootstrap'
import { memoryIndex } from '../../api/memory'
import messages from '../AutoDismissAlert/messages'

class MemoryIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      memories: props.memories
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    memoryIndex(this.props.user)
      .then(res => {
        this.setState({ memories: res.data.memories })
      })
      // .then(() => {
      //   msgAlert({
      //     heading: 'Show All Memories Success',
      //     variant: 'success',
      //     message: messages.memoryIndexSuccess
      //   })
      // })
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

    if (!memories) {
      memoriesJsx = 'Nothing to view - please add a memory.'
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
        <CardDeck>
          {memoriesJsx}
        </CardDeck>
      </div>
    )
  }
}

export default MemoryIndex
