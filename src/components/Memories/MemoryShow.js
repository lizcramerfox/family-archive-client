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
    memoryShow(this.props.user, this.props.id)
      .then(res => {
        console.log('Res is', res)
        this.setState({ memory: res.data.memory })
      })
      .catch(console.error)
  }

  // destroy = (event) => {
  //   event.preventDefault()
  //   memoryDestroy(this.props.id)
  //     .then(() => {
  //       this.setState({ deleted: true })
  //     })
  //     .catch(console.error)
  // }

  render () {
    const { memory, deleted } = this.state.props

    let memoryJsx

    console.log(memory)

    if (!memory) {
      memoryJsx = 'Loading...'
    } else if (deleted) {
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
            <Link to={`/books/${memory.id}/edit`}>Update</Link>
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
