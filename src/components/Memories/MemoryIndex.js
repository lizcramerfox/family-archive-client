import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      memoriesJsx = (
        <ul>
          {memories.map(memory => (
            <li key={memory.id}>
              <Link to={`/memories/${memory.id}`}>
                <h4>ID={memory.id} <em>{memory.title}</em></h4>
              </Link>
              <h6>{memory.description}</h6>
              <p>{memory.people}</p>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <div>
        <h1>My Saved Memories</h1>
        {memoriesJsx}
      </div>
    )
  }
}

export default MemoryIndex
