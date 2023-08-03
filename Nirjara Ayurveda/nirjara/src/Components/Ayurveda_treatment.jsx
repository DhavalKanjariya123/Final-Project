import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import tratment_img1 from "../images/Home/treatment_1.jpg";
import tratment_img2 from "../images/Home/treatment_2.jpg";
import tratment_img3 from "../images/Home/treatment_3.jpg";
import tratment_img4 from "../images/Home/treatment_4.jpg";
import tratment_img5 from "../images/Home/treatment_5.jpg";
import tratment_img6 from "../images/Home/treatment_6.jpg";

function Ayurveda_treatment() {
    return (
        <>
            <Container>
                <div>
                    <h1
                        className="text-center fw-bold mt-5 mb-3 rounded-pill aboutus-heading-nirjara subheadingnirjara1"><b>Ayurveda Agnikarma &
                            Panchkarma Treatment</b></h1>
                </div>
                <Row className="home-treatment-img m-0 justify-content-around m-0 p-0">
                    <Col md={3} className="p-0 position-relative overflow-hidden home-treatment-img-hover mt-3">
                        <img src={tratment_img1} className="img-fluid" alt="not found" />
                        <div className="home-treatment-img-bg p-2 position-absolute">
                            <h5 className="text-white fw-bold hmetreatment-fontsize paranirjara">Sciatica (Lumber spondylosis)
                            </h5>
                        </div>
                    </Col>
                    <Col md={3} className="p-0 position-relative overflow-hidden home-treatment-img-hover mt-3">
                        <img src={tratment_img2} className="img-fluid" alt="not found" />
                        <div className="home-treatment-img-bg p-2 position-absolute">
                            <h5 className="text-white fw-bold paranirjara hmetreatment-fontsize">Frozen shoulder  (Servical spondylitis)</h5>
                        </div>
                    </Col>
                    <Col md={3} className="p-0 position-relative overflow-hidden home-treatment-img-hover mt-3">
                        <img src={tratment_img3} className="img-fluid" alt="not found" />
                        <div className="home-treatment-img-bg p-2 position-absolute">
                            <h5 className="text-white fw-bold paranirjara hmetreatment-fontsize">Baldness</h5>
                        </div>
                    </Col>
                </Row>
                <Row className="home-treatment-img m-0 justify-content-around m-0 p-0">
                    <Col md={3} className="p-0 position-relative overflow-hidden home-treatment-img-hover mt-3">
                        <img src={tratment_img4} className="img-fluid" alt="not found" />
                        <div className="home-treatment-img-bg p-2 position-absolute">
                            <h5 className="text-white fw-bold paranirjara hmetreatment-fontsize">Uric acid, Gout </h5>
                        </div>
                    </Col>
                    <Col md={3}  className="p-0 position-relative overflow-hidden home-treatment-img-hover mt-3">
                        <img src={tratment_img5} className="img-fluid" alt="not found" />
                        <div className="home-treatment-img-bg p-2 position-absolute">
                            <h5 className="text-white fw-bold paranirjara hmetreatment-fontsize">Hemoglobin</h5>
                        </div>
                    </Col>
                    <Col md={3}  className="p-0 position-relative overflow-hidden home-treatment-img-hover mt-3">
                        <img src={tratment_img6} className="img-fluid" alt="not found" />
                        <div className="home-treatment-img-bg p-2 position-absolute">
                            <h5 className="text-white fw-bold paranirjara hmetreatment-fontsize">Wart</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Ayurveda_treatment;
