import React, { Component } from 'react'
import { memoryShow } from '../../api/memory'

// import MemoryForm from './MemoryForm'

class MemoryShow extends Component {
  constructor () {
    super()
    this.state = {
      editable: true
    }
  }

  componentDidMount () {
    memoryShow(this.props.user, this.props.id)
      .then(res => {
        this.setState({ memory: res.data.memory })
      })
      .catch(console.error)
  }

  render () {
    if (!this.state.memory) {
      return (<p>Loading memory...</p>)
    } else {
      const memoryJsx = (
        <div>
          {this.state.memory.id}
          {this.state.memory.title}
          {this.state.memory.description}
          {this.state.memory.people}
        </div>
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
