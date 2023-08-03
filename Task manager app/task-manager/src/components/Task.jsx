import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import swal from "sweetalert";
import Data from './Data';

function Task() {
  const [modaldet, setModaldet] = useState(false);

  const taskdetail = useRef("");
  const taskdate = useRef("");
  const Navigate = useNavigate("");

  const Click = () => {
    var insert = {
      taskdetail: taskdetail.current.value,
      taskdate: taskdate.current.value,
    }
    axios.post("http://localhost:4000/taskform", insert)
      .then(() => {
        alert("Thanks for assign a Task")
        window.location = "/";
        
      });
  }

  return (
    <>
      <Container fluid className='p-2 bg-dark text-white'>
        <Row>
          <Col md={6}>
            <h1 className='text-center text-warning'>Task Manager App</h1>
          </Col>
          <Col md={6} className='my-auto text-center'>
            <Button type='button' onClick={() => setModaldet(true)} className='btn-danger'  >Add Task</Button>
          </Col>
        </Row>
      </Container>

      <Modal show={modaldet} onHide={() => setModaldet(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Task Manager App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                ref={taskdetail}
                placeholder="Enter your Task"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                ref={taskdate}
                placeholder="Enter your Task"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={Click}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Data />
    </>
  )
}



export default Task;
