import React from 'react'
import { Form, Button } from 'react-bootstrap'

// Template Form with all fields for Memory
const MemoryForm = ({ memory, handleChange, handleSubmit }) => (
  <Form>
    <Form.Group controlId="title">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a title..."
        value={memory.title || ''}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="description">
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a description..."
        value={memory.description || ''}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="people">
      <Form.Label>People</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter people ..."
        value={memory.people || ''}
        onChange={handleChange}
      />
      <Form.Text>Type the names of people in this memory.</Form.Text>
    </Form.Group>

    <Button variant="info">Save Memory</Button>
    <Button variant="secondary">Cancel</Button>

  </Form>
)

export default MemoryForm
