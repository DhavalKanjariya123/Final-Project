import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Form, InputGroup, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import "../../index.css";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Deletecartmenu from './Deletecartmenu';




function MydModalWithGrid(props) {
  
  const Navigate = useNavigate();


  var submenutotal = 0;
  var subtotal = 0;
  var shipping = 0;
  var total = 0;





  // const [cardetcount, setCardetcount]=useState(0);
  const [cartmenu, setCartmenu] = useState(0);
  


  useEffect(() => {
    axios.get("http://localhost:4000/cart")
      .then((res) => {
        setCartmenu(res.data)
        // setCardetcount(cartmenu.length);
      })
  }, [])

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header className="bg-danger">
        <Modal.Title id="contained-modal-title-vcenter"  >
          <h1 className='text-white fw-bold'>Order Summary</h1>
        </Modal.Title>
        <Button onClick={props.onHide} className="bg-danger text-white border-0 bi bi-x-circle fs-2"></Button>
      </Modal.Header>
      <Modal.Body className="grid-example branch-modal" >


        <Container>
          {/* <h2 className="fw-bold text-white text-center" style={{ fontFamily: "Roboto, sans-serif" }}>Cart </h2> */}

          <Table className='table table-bordered table-dark text-center'>
            <thead>
              <tr>
                <th style={{ width: "10%" }} >Menu</th>
                <th style={{ width: "10%" }}>Menu Name</th>
                <th style={{ width: "4%" }}>Quantity</th>
                <th md="4" style={{ width: "10%" }}>Price</th>
                <th md="4" style={{ width: "2%" }}>Action</th>
              </tr>
            </thead>
            {cartmenu && cartmenu.map((item, cartindex) => {
              submenutotal = item.price * item.quentity
              subtotal += item.price * item.quentity
              shipping = 0.10 * subtotal
              total = shipping + subtotal


              return (
                <>
                  <tbody>
                    <tr>
                      <td><img className="img-fluid" src={item.image} alt="not found" /></td>

                      <td className='text-white my-auto'> {item.price} </td>

                      {/* <th ><Button onClick={()=>setqty(qty+1)}>+</Button><Button>{qty}</Button><Button>-</Button></th>
                      <th>{total}</th> */}

                      <td >

                        <InputGroup>

                          <Button className="bg-danger" onClick={() => {
                            const Incqty = cartmenu.map((item, index) => { return cartindex === index ? { ...item, quentity: parseInt(item.quentity) - 1 } : item })
                            setCartmenu(Incqty)
                          }}>-</Button>



                          <Form.Control
                            value={item.quentity}
                            className='rounded-0 text-center qty'
                            readOnly
                            minLength="0"
                          />


                          <Button className="bg-danger" onClick={() => {
                            const Incqty = cartmenu.map((item, index) => { return cartindex === index ? { ...item, quentity: parseInt(item.quentity) + 1 } : item })
                            setCartmenu(Incqty)
                          }}>+</Button>

                        </InputGroup>

                      </td>
                      <td >{submenutotal}</td>
                      <td onClick={() => Navigate(`/delete-cart-menu/${item.id}`)}><b className='bi bi-trash text-danger'></b></td>




                    </tr>
                  </tbody>

                </>
              )
            })}
          </Table>
          <Row >
            <Col md="7" className='my-auto' >
                <span className='bg-danger h2 p-2 text-white fw-bold'>Place Order</span>
            </Col>
            <Col md="5" className='text-white'>
              <Table className='w-100' >

                <tr>
                  <th>SubTotal :</th>
                  <td>&#x20B9; {subtotal}</td>
                </tr>
                <tr >
                  <th>Delivery Charge (10%) :</th>
                  <td>&#x20B9; {shipping}</td>
                </tr>
                
               
                <hr className='border border-2 border-width ms-auto' />
                <tr >
                  <th>Total :</th>
                  <td>&#x20B9; {total}</td>
                </tr>
              </Table>
            </Col>
          </Row>
        </Container>



      </Modal.Body>

    </Modal>
  );
}

function Cart() {
  const [modalShow, setModalShow] = useState(false);

  const [cardetcount, setCardetcount]=useState(0);
  const [cartmenu, setCartmenu] = useState(0);
  

  useEffect(() => {
    axios.get("http://localhost:4000/cart")
      .then((res) => {
        setCartmenu(res.data)
        setCardetcount(cartmenu.length);
      })
  }, [cartmenu])

  return (
    <>
      <Button className='bg-transparent border-0 overflow-x-hidden  float-end cart-detail' onClick={() => setModalShow(true)}><b className='bi bi-cart fs-4 '> <span class="position-absolute   translate-middle badge rounded-pill bg-danger cart-icon">{cardetcount}</span></b></Button>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Cart;