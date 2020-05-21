import React, { Component } from 'react'
import MemoryForm from './MemoryForm'
import { memoryShow } from '../../api/memory'

class MemoryShow extends Component {
  constructor (props) {
    super(props)
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
          <MemoryForm />
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
