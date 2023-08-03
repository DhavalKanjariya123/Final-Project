import React from "react";
import Treatment_list from "./Treatment_list";
import Treatment_list_card from "./Treatment_list_card";
import { Container, Row, Col } from "react-bootstrap";
import heading_bg_img from "../images/Heading_bg/hading_bg_img.png";
import Footer from "./Footer";



const Treatments = () => (
  <>
    <Container>
      <Row className="heading-text-img mt-lg-3">
        <Col sm={6} className="m-auto order-sm-0 order-1">
          <h1 className="text-dark fw-bold float-sm-end heading-text subheadingnirjara1"><b>TREATMENTS</b></h1>
        </Col>
        <div className="col-sm-6 col-12 order-sm-1 order-0">
          <img className="img-fluid w-sm-100 heading-img" src={heading_bg_img} alt="not found" />
        </div>
      </Row>
    </Container>

    {Treatment_list.map((val) => {

      return (
        <>
          <Treatment_list_card
            title={val.title}
            para={val.para}
            para_det={val.para_det}
            para_det1={val.para_det1}
            para_det2={val.para_det2}
            para_benefits={val.para_benefits}
            para_indicators={val.para_indicators}
            subheading_1={val.subheading_1}
            para_subheading_1={val.para_subheading_1}
            subheading_2={val.subheading_2}
            para_subheading_2={val.para_subheading_2}
            subheading_3={val.subheading_3}
            para_subheading_3={val.para_subheading_3}
            subheading_4={val.subheading_4}
            para_subheading_4={val.para_subheading_4}
            subheading_5={val.subheading_5}
            para_subheading_5={val.para_subheading_5}
            subheading_6={val.subheading_6}
            para_subheading_6={val.para_subheading_6}
            para_det4={val.para_det4}
            
          />
        </>
      );
    })}
    <Footer/>
  </>
);

export default Treatments;
