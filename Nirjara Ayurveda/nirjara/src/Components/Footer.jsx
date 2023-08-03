import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link} from "react-router-dom";
import logo_img from "../images/Logo/logo.png";
import {useEffect} from 'react';

function Footer() {

    
        
    
    return (
        <>
            <Container fluid className="mt-5 m-0 p-0 footer-bg">
                <Row className="p-2 footer-content me-0">
                    <Col md={6} className="p-1">
                        <Row>
                            <Col xs={5} sm={4} className="m-auto text-center">
                                <img className="img-fluid w-100 h-100" src={logo_img} alt="not found" />
                            </Col>
                            <Col xs={7} className="footer-address m-auto p-2">
                                <address className="text-white m-0 p-0">
                                    <h4 className="footer-address-title fw-bold subheadingnirjara1">Nirjara Aayurveda</h4>
                                    <div>
                                        <p className="text-justify m-0 p-0 paranirjara"> 8-9, 2<sup>nd </sup> 
                                            floor, Kasper Square, Opp. Gangotri
                                            Exotica,
                                            Nr. Kalp Desire, 30
                                            mtr.
                                            Gotri-Laxmipura Road, Vadodara. </p>
                                    </div>
                                </address>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6} className="m-auto footer-link-social">
                        <Row className="justify-content-around">
                            <Col md={5} lg={6} sm={5} xxl={6} className="text-white  mb-3 text-center">
                                <h4 className="fw-bold mb-1 subheadingnirjara1">Useful Links</h4>
                                <div className="list-unstyled">
                                <Link className="text-decoration-none text-white opacity-75 paranirjara" to="https://www.google.com/search?tbm=lcl&sxsrf=AB5stBiIZ_BNMMhlfUm0gxa6_-mjyfkFeA:1689855528535&q=Nirjara+Ayurveda+Clinic&rflfq=1&num=20&stick=H4sIAAAAAAAAABWQS0oDYRCEyUJxnQkKs5oj9PuxFPfiFYYYMRKMTFDwOp7Ac3kKazY_TdF_VX19cz0OpUwu7BRmVm3kNQ7sGtKloWXMqekybt2pRZTdIsmaMsYdu2coR5lB0uhkWdWo4i6P1sQQnDkOAff2IPLIqvUxxFMw4tuzlJQkYxWbiYK6LATRblIwTW1utdLMlmoUNKiGrkiRVMPAAqdxcPK2SlVXk2wy1nFIEpS0hEkXG_xprVosmiDv5ixZncDPhNVEHyuvtMD_3Xoj74B1AorAQSurGqVlCotpoq9Sj1tQtuGiDR6gha6bjKLEOJeCF3Bs9rvZ_G1unw7nj9Nhmk-X83Q5zMv-dXo5Lz9Xd4_H5W1e5un--3P5OjzP08Pp-H7c_wPeK6tBuAEAAA&ved=2ahUKEwizzf-zop2AAxU7V2wGHR1nCa4QjHJ6BAg-EAU&rldimm=8310521506444894058#lrd=0x395fc93745a04491:0x7354e74771e45f6a,3,,,,">
                                        <li>Feedback</li>
                                    </Link>
                                    {/* <Link className="text-decoration-none text-white opacity-75 active" to="/aboutus" onClick={useEffect(() => {
            window.scrollTo(0, 0)
          }, [])}>
                                        <li>About Us</li>
                                    </Link>
                                    <Link className="text-decoration-none text-white opacity-75" to="/treatment" onClick={useEffect(() => {
            window.scrollTo(0, 0)
          }, [])}>
                                        <li>Treatment</li>
                                    </Link>
                                    <Link className="text-decoration-none  text-white opacity-75" to="/contactus" onClick={useEffect(() => {
            window.scrollTo(0, 0)
          }, [])}>
                                        <li>Contact Us</li>
                                    </Link> */}
                                    <Link className="text-decoration-none  text-white opacity-75 paranirjara" to="/appointment">
                                        <li>Book Appointment</li>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={7} lg={6} sm={5} xxl={6} className="text-white mb-3 text-center footer-social-media">
                                <h4 className="fw-bold mb-1 subheadingnirjara1">Social Media</h4>
                                <div className="list-unstyled mt-4">
                                    <Link className="d-inline-block d-sm-none" to="tel:9825232729"><i
                                        className="bi bi-telephone-fill p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                        <Link to="https://www.facebook.com/search/top?q=nirjara%20ayurveda%20agnikarma%20panchkarma%20center"><i
                                        className="bi bi-facebook p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                    <Link to="mailto:yankitashrimali@gmail.com"><i
                                        className="bi bi-envelope-fill p-2 fs-6  rounded-circle bg-white text-dark m-2"></i></Link>
                                    <Link to="https://www.youtube.com/@NirjaraAyurvedaClinic-DrYankit"><i
                                        className="bi bi-youtube p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                    <Link to="https://wa.me/9825232729?text=Hi"><i
                                        className="bi bi-whatsapp p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                </div>
                            </Col>
                            {/* <Col md={7} lg={6} sm={5} xxl={6} className="text-white mb-3 text-center">
                                <h4 className="fw-bold mb-1">Social Media</h4>
                                <div className="list-unstyled mt-4">
                                    <Link className="d-block d-lg-none" to="tel:9825232729"><i
                                        className="bi bi-telephone-fill p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                        <Link to="tel:9825232729"><i
                                        className="bi bi-facebook p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                    <Link to="mailto:yankitashrimali@gmail.com"><i
                                        className="bi bi-envelope p-2 fs-6  rounded-circle bg-white text-dark m-2"></i></Link>
                                    <Link to="https://www.youtube.com/@NirjaraAyurvedaClinic-DrYankit"><i
                                        className="bi bi-youtube p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                    <Link to="https://wa.me/9825232729?text=Hi"><i
                                        className="bi bi-whatsapp p-2 fs-6 rounded-circle bg-white text-dark m-2"></i></Link>
                                </div>
                            </Col> */}
                        </Row>
                    </Col>

                </Row>
                <div className="text-white footer-bottom m-0 p-0">
                    <Row className="me-0 paranirjara">
                        <Col md={6} className="py-md-2 py-1 text-center">
                            <span align="justify" className="fs-6">Nirjara Ayurveda <i className="border border-end-2"></i>&nbsp;All
                                Rights Reserved © </span>
                        </Col>
                        <Col md={6} className="py-md-2 pb-2 text-center">
                            <span align="justify" className="text-white fs-6">Designed & Developed by Dhaval
                                Kanjariya</span>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Footer;
