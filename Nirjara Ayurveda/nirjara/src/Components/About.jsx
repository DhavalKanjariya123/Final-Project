import React, { useEffect } from 'react';
import AOS from "aos";
import { Container, Row, Col } from "react-bootstrap";
import Welcome_Nirjara_img from "../images/About/Welcome_Nirjara_img.JPG";
import heading_bg_img from "../images/Heading_bg/hading_bg_img.png";
import Footer from "./Footer";






function About() {
    useEffect(() => {
       
        AOS.init(
            {
                once: true
            }
        );
        window.scrollTo(0, 0);
    }, [])
    return (
        <>

            
            <Container className='ddd'>
                <Row className="heading-text-img mt-lg-3" >
                    <Col sm={6} className="m-auto order-sm-0 order-1">
                        <h1 className="text-dark fw-bold float-sm-end heading-text subheadingnirjara1"><b>ABOUT US</b></h1>
                    </Col>
                    <div className="col-sm-6 col-12 order-sm-1 order-0">
                        <img className="img-fluid w-sm-100 heading-img" src={heading_bg_img} alt="not found" />
                    </div>
                </Row>



                <div className="aboutus-content">
                    <Row className="mt-5 justify-content-between">
                        <h1 className="text-center fw-bold mb-3 rounded-pill aboutus-heading-nirjara subheadingnirjara1"><b>Welcome To Nirjara Ayurveda</b></h1>
                        <Col  md={6} className="order-1 m-auto about-para paranirjara " data-aos="fade-up" data-aos-duration="1500">
                            <p align="justify" >NIRJARA means “Mukti”. NIRJARA Ayurveda means “Total Relief from Chronic Disease” with purely Ayurvedic Treatment.</p>
                            <p align="justify" >Our aim is to ensure preventive treatment at pre-disease stage as well as curing of any existing disease. Our treatments are customised as per individual “Prakruti” suiting to the seasonal variations. The treatments are aimed to improve mental as well as physical conditions of patient without having any side effect. The medicines are prescribed in such a manner that it will not only cure the dieses but also balance the “Vata”, “Pitta” and “Kapha” and enhance the body immunity. </p>
                        </Col>
                        <Col md={6} className="order-0 about-welcome-text">
                            <img className="img-fluid w-100 h-100 border border-5 shadow" src={Welcome_Nirjara_img} alt="not found" />
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className="mt-5 exclusive-features p-5">
                <Row>
                    <h1 className="text-white mb-1 text-center subheadingnirjara1 mb-4"><b>Exclusive Features</b></h1>
                    {/* <p className="text-center mx-auto text-white mb-5 mt-4 exclusive-features-para paranirjara">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Asperiores assumenda nemo itaque modi harum. In maxime sit autem ad quidem
                        itaque eos, at minus perspiciatis non officiis quia asperiores impedit. lore</p> */}
                    <Col lg={6} className="bg-white rounded-pill py-3" data-aos="flip-right" data-aos-duration="1500">
                        <h1 className="text-center text-dark display-4 my-auto subheadingnirjara1">Your health is our priority</h1>
                    </Col>
                    <Col lg={6} className="m-auto ps-4 paranirjara">
                        <Row>
                            <Col md={6}>
                                <Row className="features-text">
                                    <Col xs={2} className="p-1 m-auto">
                                        <i
                                            className="bi bi-check fs-3 text-white rounded-circle border border-2 border-white px-1 float-end"></i>
                                    </Col>
                                    <Col align="justify" xs={10} className="p-auto m-auto">
                                        <span className="text-white" >Pure Ayurvedic Treatment </span>
                                    </Col>
                                </Row>
                                <Row className="mt-md-4 features-text">
                                    <Col xs={2} className="p-1 m-auto">
                                        <i
                                            className="bi bi-check fs-3 text-white rounded-circle border border-2 border-white px-1 float-end"></i>
                                    </Col>
                                    <Col align="justify" xs={10} className="p-auto m-auto">
                                        <span className="text-white" >Certified Ayurvedic Doctor </span>
                                    </Col>
                                </Row>
                                <Row className="mt-md-4 features-text">
                                    <Col xs={2} className="p-1 m-auto">
                                        <i
                                            className="bi bi-check fs-3 text-white rounded-circle border border-2 border-white px-1 float-end"></i>
                                    </Col>
                                    <Col align="justify" xs={10} className="p-auto m-auto">
                                        <span  className="text-white" >Expert and Qualified Analyst</span>
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col md={6}>
                                <Row className="features-text">
                                    <Col xs={2} className="p-1 m-auto">
                                        <i
                                            className="bi bi-check fs-3 text-white rounded-circle border border-2 border-white px-1 float-end"></i>
                                    </Col>
                                    <Col align="justify" xs={10} className="p-auto m-auto">
                                        <span className="text-white">Customised solutions to individuals</span>
                                    </Col>
                                </Row>
                                <Row className="mt-md-4 features-text">
                                    <Col xs={2} className="p-1 m-auto">
                                        <i
                                            className="bi bi-check fs-3 text-white rounded-circle border border-2 border-white px-1 float-end"></i>
                                    </Col>
                                    <Col align="justify" xs={10} className="p-auto m-auto">
                                        <span className="text-white">One Spot Solutions for multiple problems</span>
                                    </Col>
                                </Row>
                                <Row className="mt-md-4 features-text">
                                    <Col xs={2} className="p-1 m-auto">
                                        <i
                                            className="bi bi-check fs-3 text-white rounded-circle border border-2 border-white px-1 float-end"></i>
                                    </Col>
                                    <Col align="justify" xs={10} className="p-auto m-auto">
                                        <span className="text-white">Complementary Treatments : Diet Plan, Counselling, etc</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About;
