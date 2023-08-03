import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import StudentManage from './StudenuManage';

function Student() {
  const [show, setShow] = useState(false);
    

  const stuname = useRef("");
  const studate = useRef("");
  const attend = useRef("");

  const Clk = () => {
    var insert = {
      stuname: stuname.current.value,
      studate: studate.current.value,
      attend: attend.current.value,


    }
    axios.post("http://localhost:4000/student", insert)
      .then(() => {
        alert("Your data is successfully submitted");
        window.location = ("/");
      });
  }

 


  return (
    <>
      <Container fluid className='bg-dark text-white p-1'>
        <Row>
          <Col md={6} className='text-center'>
            <h3>Student Attendance Management</h3>
          </Col>
          <Col md={6} className='text-center' onClick={() => setShow(true)}>
            <Button>Add Student Attendance</Button>
          </Col>
        </Row>
      </Container>

      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>

          <Modal.Title>
            <h3>Student Attendance Management</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3 mt-3">
            <input ref={stuname} type="text" class="form-control" placeholder="Username" aria-label="Enter Student Name" />
          </div>



          <div class="input-group w-50 mb-3 float-start">
            <input ref={studate} type="date" class="form-control" />
          </div>

          <div class="input-group w-50 mt-1 ps-5 mb-3 float-end" >
            <select  ref={attend}>
              <option id="ppp" value="Present" >Present</option>
              <option value="Absent" >Absent</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Clk} >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <StudentManage />
    </>
  )
}

export default Student;
