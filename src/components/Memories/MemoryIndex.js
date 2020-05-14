import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { memoryIndex } from '../../api/memory'

class MemoryIndex extends Component {
  constructor () {
    super()

    // UseFUL means use state:
    this.state = {
      memories: null
    }
  }

  componentDidMount () {
    memoryIndex(this.props.user)
      .then(res => {
        // console.log('Res is: ', res)
        this.setState({ memories: res.data.memories })
      })
      .catch(console.error)
  }

  render () {
    const { memories } = this.state

    let memoriesJsx

    console.log(memories)

    if (!memories) {
      memoriesJsx = 'Nothing to view - please add a memory.'
    } else {
      memoriesJsx = (
        <ul>
          {memories.map(memory => (
            <li key={memory.id}>
              <Link to={`/memories/${memory.id}`}>{memory.title}</Link>
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
