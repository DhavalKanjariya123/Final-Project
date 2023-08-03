import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import heading_bg_img from "../images/Heading_bg/hading_bg_img.png";
import Footer from "./Footer";
import AOS from "aos";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const SERVICE_ID = "service_g96vrgq"
const TEMPLATE_ID = "template_g0azag6"
const PUBLIC_KEY = "AvZusWay-sgKOE-Kf"


function Contact() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                })
            });
        e.target.reset()
    };

    useEffect(() => {
        AOS.init({
            once: true
        });
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Container>
                <Row className="heading-text-img mt-lg-3">
                    <Col sm={6} className="m-auto order-sm-0 order-1">
                        <h1 className="text-dark fw-bold float-sm-end heading-text subheadingnirjara1"><b>CONTACT US</b></h1>
                    </Col>
                    <div className="col-sm-6 col-12 order-sm-1 order-0">
                        <img className="img-fluid w-sm-100 heading-img" src={heading_bg_img} alt="not found" />
                    </div>
                </Row>
            </Container>

            <Container className="contact-form-bg contactus-content mt-sm-5">
                <Row className="justify-content-between p-2">
                    <Col md={6} className="bg-white p-4 shadow contactus-detail" >
                        <h2 className="fw-bold subheadingnirjara2" data-aos="fade-up"
                            data-aos-duration="1500">Contact Us</h2>
                        <p className="mb-4 paranirjara" align="justify" data-aos="fade-up"
                            data-aos-duration="1500">We will be delighted to serve you. We are available at:</p>
                        <Row className="mb-2" data-aos="fade-up"
                            data-aos-duration="1500">
                            <Col xs={1}>
                                <i className="bi bi-geo-alt fs-2 text-info"></i>
                            </Col>
                            <Col xs={11}>
                                <h4 className="contact-information-heading   ">Address:</h4>
                                <p className="paranirjara" align="justify">8-9, 2<sup>nd</sup> floor, Kasper
                                    Square, Opp. Gangotri Exotica, Nr. Kalp
                                    Desire,
                                    30
                                    mtr. Gotri-Laxmipura Road, Vadodara.</p>
                            </Col>
                        </Row>
                        <Row className="mb-2" data-aos="fade-up"
                            data-aos-duration="1500">
                            <Col xs={1}>
                                <i className="bi bi-phone fs-2 text-info"></i>
                            </Col>
                            <Col xs={11}>
                                <h4 className="contact-information-heading ">Call Us:</h4>
                                <p className="paranirjara" align="justify">(+91) 9825232729</p>
                            </Col>
                        </Row>
                        <Row className="mb-2" data-aos="fade-up"
                            data-aos-duration="1500">
                            <Col xs={1}>
                                <i className="bi bi-envelope fs-2 text-info"></i>
                            </Col>
                            <Col xs={11}>
                                <h4 className="contact-information-heading">Email Us:</h4>
                                <p className="paranirjara" align="justify">yankitashrimali@gmail.com
                                </p>
                            </Col>
                        </Row>
                        <Row className="mb-2" data-aos="fade-up"
                            data-aos-duration="1500">
                            <Col xs={1}>
                                <i className="bi bi-clock fs-2 text-info"></i>
                            </Col>
                            <Col xs={11}>
                                <h4 className="contact-information-heading">Timing:</h4>
                                <span className="paranirjara mon-sat-time">Mon-Sat </span> :<span className="paranirjara mon-sat-time1">  10:00 AM - 1:00 PM</span> <br />
                                <span className="paranirjara mon-fri-time">Mon-Fri </span> :<span className="paranirjara mon-fri-time1">  04:00 PM - 7:00 PM</span> <br />
                                {/* <span className="ps-4 paranirjara"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  :&nbsp;        04:00pm-7:00pm </span> <br /> */}
                                <span className="paranirjara sunday-time" > Sunday </span> : <span className="paranirjara sunday-time1">    Closed</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5} className="bg-light p-3 contactus-form shadow paranirjara" data-aos="zoom-in"
                        data-aos-duration="1500">
                        <form method="post" className="appointment-form" onSubmit={handleOnSubmit}>
                            <div className="input-group mb-4 shadow">
                                <span className="input-group-text border-0 appointment-icon-bg"><i
                                    className="bi bi-person"></i></span>
                                <input type="text" name="form_name" className="form-control formnamesize  border-0" placeholder="Enter Full Name" required={true} />
                            </div>
                            <div className="input-group mb-4 shadow">
                                <span className="input-group-text  border-0 appointment-icon-bg"><i
                                    className="bi bi-phone"></i></span>
                                <input type="text" name="form_mobile" minLength="10" maxLength="10" className="form-control  formnamesize border-0" placeholder="Enter  Mobile Number" required={true} />
                            </div>
                            <div className="input-group mb-4 shadow">
                                <span className="input-group-text  border-0 appointment-icon-bg"><i
                                    className="bi bi-envelope"></i></span>
                                <input type="email" name="form_email" className="form-control formnamesize border-0" placeholder="Enter  Email Address" required={true} />
                            </div>
                            <div className="input-group mb-4 shadow">
                                <span className="input-group-text border-0 appointment-icon-bg"><i
                                    className="bi bi-geo-alt"></i></span>
                                <input type="text" name="form_city" className="form-control formnamesize border-0" placeholder="Enter City Name" required={true} />
                            </div>
                            <div className="form-floating shadow">
                                <textarea name="message" className="form-control  border-0" style={{ height: " 225px" }} required={true}></textarea>
                                <label
                                >Type a Message Here</label>
                            </div>
                            <div className="d-grid gap-2 col-7 mx-auto mt-4">
                                <button name="sub" className="btn btn-bg text-white fs-5 fw-bold" type="submit" value="Send">Send Message</button>
                            </div>

                        </form>
                    </Col>
                </Row>

            </Container>


            <Container fluid className="m-0 p-0 mt-5">
                <Row className="map-detail">
                    <Col>
                        <iframe id="direction" title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.984246252937!2d73.13537281442943!3d22.316435547949634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc93745a04491%3A0x7354e74771e45f6a!2sNirjara%20ayurveda%20%2Cagnikarma%20n%20panchkarma%20center!5e0!3m2!1sen!2sin!4v1671000528631!5m2!1sen!2sin"
                            width="100%" height="450px" loading="lazy"
                        ></iframe>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default Contact;