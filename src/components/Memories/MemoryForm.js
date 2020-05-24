import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Template Form with all fields for Memory
const MemoryForm = ({ memory, user, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="title">
      <Form.Label>Title</Form.Label>
      <Form.Control
        name="title"
        type="text"
        placeholder="Enter a title..."
        value={memory.title || ''}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Form.Group>

    <Form.Group controlId="description">
      <Form.Label>Description</Form.Label>
      <Form.Control
        name="description"
        type="text"
        placeholder="Enter a description..."
        value={memory.description || ''}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Form.Group>

    <Form.Group controlId="people">
      <Form.Label>People</Form.Label>
      <Form.Control
        name="people"
        type="text"
        placeholder="Enter people ..."
        value={memory.people || ''}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Form.Text>Type the names of people in this memory.</Form.Text>
    </Form.Group>
    <Link to={'/memories'}>
      <Button variant="warning">Cancel</Button>
    </Link>
    <Button type="submit" variant="success">Save Memory</Button>
  </Form>
)

export default MemoryForm
