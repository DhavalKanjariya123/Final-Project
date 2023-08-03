import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import imp_ayurveda_img from "../images/Home/ayurveda.jpg";
import AOS from "aos";

function Imp_Ayurveda() {
    useEffect(() => {
        AOS.init(
            {
                once: true
            }
        );
    }, [])
    return (
        <>
            <Container className="mt-sm-5 home-ayurveda-bg pb-5">
                <Row className="ayurveda-bg justify-content-around">
                    <h1 className="text-white text-center p-4 subheadingnirjara1"><b>Why to Consult NIRJARA Ayurveda?</b></h1>
                    <Col lg={6} className="px-2 pb-3">
                        <img className="img-fluid join-ayurveda-img" src={imp_ayurveda_img} alt="not found" />
                    </Col>
                    <Col lg={6}  className="text-white ayurveda-text ps-md-4 paranirjara">
                        <p data-aos="fade-up" data-aos-duration="1500" className='imp-nirjara-ayurveda-text' align="justify"
                            style={{ textIndent: "50px" }}>Ayurveda is an ancient holistic system of medicine that originated in India over 5,000 years ago. It offers a unique approach to healthcare and well-being, focusing on achieving balance and harmony in the body, mind, and spirit. Here are several reasons why one should Consult NIRJARA Ayurveda:</p>
                        <h6 data-aos="fade-up" data-aos-duration="1500" className='fw-bold text-warning'>Holistic approach:</h6>
                        <p data-aos="fade-up" data-aos-duration="1500" align="justify"
                            style={{ textIndent: "50px" }}>We consider individual as a whole, recognizing the interconnectedness of the body, mind, and spirit. Our aim is to address the root cause of imbalances rather than just treating symptoms. By focusing on overall well-being, we can help promote long-term health and prevent diseases.</p>
                        <h6 data-aos="fade-up" data-aos-duration="1500" className='fw-bold text-warning'>Personalized treatment: </h6>
                        <p data-aos="fade-up" data-aos-duration="1500" align="justify"
                            style={{ textIndent: "50px" }}>We recognize that each person is unique, with different body types and constitutional makeups. We provide personalized treatments and recommendations based on an individual's specific needs, including diet, lifestyle, herbal remedies, and therapeutic practices. This personalized approach can lead to more effective and tailored healing. </p>
                        <h6 data-aos="fade-up" data-aos-duration="1500" className='fw-bold text-warning d-none d-xl-block'>Emphasis on natural remedies:  </h6>
                        <p data-aos="fade-up" data-aos-duration="1500" align="justify" className='d-none d-xl-block'
                            style={{ textIndent: "50px" }}>We primarily utilize natural remedies derived from plants, herbs, minerals, and other natural substances. These remedies are often gentle, safe, and have fewer side effects compared to synthetic drugs. Our treatments aim to strengthen the body's inherent healing abilities rather than suppressing symptoms. </p>

                    </Col>
                    <div className="text-white ayurveda-text ps-md-4 ayurveda-text-margin paranirjara">
                        <h6 data-aos="fade-up" data-aos-duration="1500" className='fw-bold text-warning ayurveda-para-nirjara'>Emphasis on natural remedies:  </h6>
                        <p data-aos="fade-up" data-aos-duration="1500" align="justify" className='ayurveda-para-nirjara'
                            style={{ textIndent: "50px" }}>We primarily utilize natural remedies derived from plants, herbs, minerals, and other natural substances. These remedies are often gentle, safe, and have fewer side effects compared to synthetic drugs. Our treatments aim to strengthen the body's inherent healing abilities rather than suppressing symptoms. </p>
                        <h6 data-aos="fade-up" data-aos-duration="1500" className='fw-bold text-warning ayurveda-para-nirjara-heading'>Promotion of balance and prevention:   </h6>
                        <p data-aos="fade-up" data-aos-duration="1500" align="justify"
                            style={{ textIndent: "50px" }}>We place a strong emphasis on maintaining balance in the body and mind. This offer various practices and recommendations to prevent diseases and promote optimal health. By adopting Ayurvedic principles and lifestyle choices, individuals can support their overall well-being and reduce the risk of illnesses.</p>
                        <p data-aos="fade-up" data-aos-duration="1500" align="justify"> We at NIRJARA Ayurveda provide personalized guidance based on your individual needs and circumstances.</p>
                    </div>

                </Row>

            </Container>
        </>
    )
}

export default Imp_Ayurveda;
