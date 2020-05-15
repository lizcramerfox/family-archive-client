import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { memoryShow } from '../../api/memory'

class MemoryShow extends Component {
  constructor () {
    super()

    this.state = {
      memory: null,
      deleted: false
    }
  }

  componentDidMount () {
    console.log('this is MemoryShow', this)
    memoryShow(this.props.user, this.props.id)
      .then(res => {
        console.log('res.data.memory is: ', res.data.memory)
        this.setState({ memory: res.data.memory })
      })
      .catch(console.error)
  }

  render () {
    console.log(this.state)
    const { memory, deleted } = this.state

    let memoryJsx

    console.log(memory)

    if (deleted) {
      // If we deleted the memory, redirect to `/memories`
      memoryJsx = <Redirect to={'/memories/'}/>
    } else {
      memoryJsx = (
        <div>
          <h4>Title: {memory.title}</h4>
          <h6>Description: {memory.description}</h6>
          <p>People: {memory.people}</p>
          <button onClick={this.destroy}>Delete</button>
          <button>
            <Link to={`/memories/${memory.id}/edit`}>Update</Link>
          </button>
        </div>
      )
    }

    return (
      <div>
        {memoryJsx}
      </div>
    )
  }
}

export default MemoryShow
