import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import MemoryIndex from './MemoryIndex'

const viewMemoriesButton = (
  <Fragment>
    <Button href="#memories/">View My Memories</Button>
  </Fragment>
)

const addMemoryButton = (
  <Fragment>
    <Button href="#memories-create">Add New Memory</Button>
  </Fragment>
)

const viewMemories = (
  <Fragment>
    <MemoryIndex />
  </Fragment>
)

const MemoriesDisplay = ({ user }) => (
  <div>
    { user ? viewMemoriesButton : '' }
    { user ? addMemoryButton : '' }
    { user ? viewMemories : ''}
  </div>
)

export default MemoriesDisplay
