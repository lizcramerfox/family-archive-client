import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { memoryIndex } from '../../api/memory'

class MemoryIndex extends Component {
  constructor (props) {
    super(props)
    console.log('In the INDEX constructor')
    // UseFUL means use state:
    this.state = {
      memories: props.memories
    }
  }

  componentDidMount () {
    memoryIndex(this.props.user)
      .then(res => {
        console.log('In componentDidMount, res is: ', res, '')
        this.setState({ memories: res.data.memories })
      })
      .catch(console.error)
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
              <Link to=
                {{ pathname: `/memories/${memory.id}`, state: { id: memory.id } }}>
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
