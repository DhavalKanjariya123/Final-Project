import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";

function Treatment_list_card(props) {
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
      <Container>
        <Row className="main-content">
          <Col xs={12} className="mt-5">
            <Card>
              <div
                className="card-header text-center  text-white fs-2 fw-bold service-treatmrnt-bg p-2 subheadingnirjara1">
                {props.title}
              </div>

              <div className="card-body paranirjara" data-aos="fade-up" data-aos-duration="1500">
                <p className="card-text" align="justify">{props.para}</p>
                <p className="card-text" align="justify">{props.para_det}</p>
                <p className="card-text" align="justify">{props.para_det1}</p>
                <p className="card-text fw-bold" align="justify">{props.para_det2}</p>
                <h4 className="treatment-indications-heading">{props.para_benefits}</h4>
                {/* <h4 className="treatment-indications-heading">Benefits:</h4> */}
                <p className="card-text" align="justify">{props.para_indicators}
                </p>
                {/* <h6 className="treatment-indications-heading">{props.subheading_1}</h6> */}
                <div align="justify" className="mb-1">
                  <h6 className="treatment-indications-heading d-inline ">{props.subheading_1} </h6>
                  <span className="card-text" >{props.para_subheading_1}</span>
                </div>


                <div align="justify" className="mb-1">
                  <h6 className="treatment-indications-heading d-inline">{props.subheading_2} </h6>
                  <span className="card-text" >{props.para_subheading_2}</span>
                </div>

                <div align="justify" className="mb-1">
                  <h6 className="treatment-indications-heading d-inline">{props.subheading_3} </h6>
                  <span className="card-text dhk" >{props.para_subheading_3}</span>
                </div>

                <div align="justify" className="mb-1">
                  <h6 className="treatment-indications-heading d-inline">{props.subheading_4} </h6>
                  <span className="card-text dhk" >{props.para_subheading_4}</span>
                </div>

                <div align="justify" className="mb-1">
                  <h6 className="treatment-indications-heading d-inline">{props.subheading_5} </h6>
                  <span className="card-text dhk" >{props.para_subheading_5}</span>
                </div>
                <div align="justify" className="mb-1">
                  <h6 className="treatment-indications-heading d-inline">{props.subheading_6} </h6>
                  <span className="card-text dhk" >{props.para_subheading_6}</span>
                </div>
                <p className="card-text" align="justify">{props.para_det4}</p>
              </div>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Treatment_list_card;