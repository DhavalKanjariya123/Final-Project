import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Menu from './BlogList';
import "../../js/Jquerylist.js";
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




function Blog() {
  const namefood = useRef("");
  const productqut=useRef("");
  const Navigate = useNavigate("");


 


 

  const Addtocart = (datadetail) => {

    axios.post("http://localhost:4000/cart", datadetail)
      .then(() => {
        alert("Thanks for submit.")
        // Navigate("/")
        window.location="/"
      });
  }


  const [data, setData] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:4000/addmenudetail")
      .then((res) => {
        setData(res.data)
      })
  }, [])



  const [items, setItems] = useState(Menu);

  const FilterItem = (categoryItms) => {
    const updateItems = Menu.filter((curElement) => {
      return curElement.category == categoryItms;
    });

    setItems(updateItems)
  }

  return (
    <>

      <div id="blog">
        <h2 className='text-center text-white fw-bold section-title' style={{ fontFamily: "Roboto, sans-serif" }}>
          EVENTS AT THE FOOD HUT
        </h2>
        <div className='text-center mb-5'>
          <Container>
            <Row className='justify-content-center'>
              <Col  >
                <Button type="button" className="btn  btn-lg px-5 btn-events text-white activetab" onClick={() => { setItems(Menu) }}>ALL</Button>
              </Col>
              <Col>
                <Button type="button" className="btn  btn-lg px-5 btn-events text-white juice-btn" onClick={() => { FilterItem("juice") }}>Juices</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="button" className="btn btn-lg px-5 btn-events  juice-btn text-white btn-food blog-btn-all" onClick={() => { FilterItem("food") }}>Foods</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid>
          <Row>

            {
              items.map((curele) => {
                const { image, subheading, description, price } = curele;

                return (
                  <Col md={4} className="mt-4">
                    <Card className='blog-card'>
                      <div className='blog'>
                        <img className='blog-img' src={image} alt='not found'></img>
                      </div>
                      <div className='text-center text-white'>
                        <h2 className='m-3 mx-5 bg-danger fw-bold'><i className="bi bi-currency-rupee"></i>{price}</h2>
                        <h4 className='fw-bold' style={{ fontFamily: "Roboto, sans-serif" }}>{subheading}</h4>
                        <p style={{ fontFamily: "Roboto, sans-serif" }}>{description}</p>
                      </div>

                      <Button onClick={() => Navigate(`/add-cart/${curele.id}`)} className='bg-danger w-50 m-auto border-0'  >Add To Cart</Button>
                    </Card>

                  </Col>


                )
              })
            }

          </Row>
        </Container>
        <Container fluid>
          <Row>
            {data && data.map((item) => {
              return (
                <>
                  <Col md={4} className="mt-4">
                    <Card className='blog-card'>
                      <div className='blog'>
                        <img className='blog-img' src={item.image} alt='not found'></img>
                      </div>
                      <div className='text-center text-white'>
                        <h2 className='m-3 mx-5 bg-danger fw-bold'><i className="bi bi-currency-rupee"></i>{item.price}</h2>
                        <span ref={namefood}><h4 className='fw-bold' style={{ fontFamily: "Roboto, sans-serif" }}>{item.subheading}</h4></span>
                        <p style={{ fontFamily: "Roboto, sans-serif", height: "75px" }}>{item.description}</p>
                      </div>


                     <p ref={productqut} className='text-white d-none'>{item.quentity}</p>

                      <Button type="button" onClick={() => Addtocart(item)} className='bg-danger w-50 m-auto border-0'>Add To Cart</Button>



                    </Card>
                  </Col>
                </>
              )
            })
            }
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Blog;





// function Adminaddmenu() {
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     axios.get("http://localhost:4000/addmenudetail")
//       .then((res) => {
//         setData(res.data)
//       })
//   }, [])

//   return (
//     <>
//       {data && data.map((item) => {
//         return (
//           <>

//             <Col md={4} className="mt-4">
//               <Card className='blog-card'>
//                 <div className='blog'>
//                   <img src={item.image} alt='not found'></img>
//                 </div>
//                 <div className='text-center text-white'>
//                   <h2 className='m-3 mx-5 bg-danger fw-bold'><i className="bi bi-currency-rupee"></i>{item.price}</h2>
//                   <h4 className='fw-bold' style={{ fontFamily: "Roboto, sans-serif" }}>{item.subheading}</h4>
//                   <p style={{ fontFamily: "Roboto, sans-serif" }}>{item.descriptiob}</p>
//                 </div>
//               </Card>
//             </Col>
//           </>
//         )
//       })
//       }
//     </>
//   )
// }
// export default Adminaddmenu;
