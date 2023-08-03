import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Contact from './Contact';
import  Timemorning, {Timeevening} from './Jsdetail';
import AOS from "aos";
import { useState } from 'react';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import appointment from "../images/Home/appointment.jpg";

import Datt from '../js/Datt';


const SERVICE_ID = "service_g96vrgq"
const TEMPLATE_ID = "template_npk431o"
const PUBLIC_KEY = "AvZusWay-sgKOE-Kf"

function Appointment() {
    const handleOnSubmit1 = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Your Appointment has been booked Successfully"
                    
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
        AOS.init(
            {
                once: true
            }
        );
    }, [])
    return (
        <>
            <Container fluid className="appointment-bg">
                <Row>
                    <Col md={6} className="text-white p-sm-5 appointment-heading" data-aos="fade-right" data-aos-duration="2000">
                        <span className="text-primary "> <b>For Appointment</b></span>
                        <h1
                            className="mt-3 fw-bold subheadingnirjara1">Make an Appointment</h1>
                        <p align="justify" className="mt-3 text-justify opacity-75 paranirjara">To ensure focused approach and customised treatment based on individual needs, we attend patience with prior appointments only. Please fill the required details to seek appointment, once confirmed, you will get intimation on mobile number as well as email ID mentioned provided by you:</p>

                        <img className='img-fluid appointment-img'  src={appointment} alt='not found' />

                        {/* <p className="text-justify opacity-75">Officiis culpa doloribus
                            neque sapiente, aut fuga corporis illum
                            explicabo
                            adipisci, optio deserunt
                            incidunt </p> */}
                        {/* <button type="button" href={<Contact />}
                            className="btn-bg btn btn-lg rounded-pill fs-2 p-2 ps-4 pe-4 mt-3 mb-4 text-white"
                            style={{ fontWeight: "550" }}>Contact Us</button> */}
                    </Col>
                    <Col md={6} className="p-md-5 px-sm-5 pb-5 appointment-heading paranirjara" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="bg-light">
                            <form  
                                className="p-3 appointment-form" onSubmit={handleOnSubmit1}>
                                <div className="input-group mb-4 shadow ">
                                    <span className="input-group-text border-0 appointment-icon-bg"><i
                                        className="bi bi-person"></i></span>
                                    <input type="text" name="form_namedetail" className="form-control formnamesize border-0" placeholder="Enter Full Name" required={true} />
                                </div>
                                <div className="input-group mb-4 shadow">
                                    <span className="input-group-text border-0 appointment-icon-bg"><i
                                        className="bi bi-phone"></i></span>
                                    <input type="tel" name="form_numberdetail" minLength="10" maxLength="10" className="form-control formnamesize border-0" placeholder="Enter Mobile Number" required={true}/>
                                </div>
                                <div className="input-group mb-4 shadow">
                                    <span className="input-group-text border-0 appointment-icon-bg"><i
                                        className="bi bi-envelope"></i></span>
                                    <input type="email" name="form_emaildetail" className="form-control formnamesize border-0" placeholder="Enter Email Address" required={true} />
                                </div>
                                <div className="input-group mb-4 shadow ">
                                    <span className="input-group-text border-0 appointment-icon-bg"><i
                                        className="bi bi-capsule"></i></span>
                                    <input type="text" name="form_consultationdetail" className="form-control formnamesize border-0" placeholder="Purpose of Consultation / Health Problem" required={true} />
                                </div>

                                <label className="mb-2">Appointment Date :</label>
                                <div className="input-group mb-4 shadow">
                                    <span className="input-group-text border-0 appointment-icon-bg"><i
                                        className="bi bi-calendar"></i></span>
                                    {/* <input type="text" id="date" name="form_datedetail"   className="form-control border-0"  placeholder="Appointment Date" onFocus={Datt} /> */}
                                    <input type="text" id="dd" name="form_datedetail"   className="form-control formnamesize border-0"  placeholder="Appointment Date" onMouseOver={Datt} required={true}/>
                                </div>

                                <div className="mb-2">
                                    <label>Gender : </label> &nbsp;
                                    <input type="radio" name="form_genderdetail" value="Male" required={true}/> Male &nbsp;
                                    <input type="radio" name="form_genderdetail" value="Female"  /> Female
                                </div>
                                <div className="mb-4">
                                    <label>Consultant Hour : </label> &nbsp;
                                    <input type="radio" name="form_consultant" value="Morning" onClick={Timemorning} required={true} /> Morning &nbsp;
                                    <input type="radio" name="form_consultant"  value="Evening" onClick={Timeevening}  /> Evening
                                    <div style={{"height":"20px","fontWeight":"600", "color":"#0000ff","marginTop":"5px"}}  id="timedetail"></div>
                                </div>
                                {/* <div className="mb-4">
                                    <label>Consultant Hour : </label> &nbsp;
                                    <input type="radio" name="Consultant" value="Morning" onClick={()=>setTime("Dhaval")}/> Morning &nbsp;
                                    <input type="radio" name="Consultant" value="Evening" onClick={()=>setTime("Hetasvi")}  /> Evening
                                    <p>{time}</p>
                                </div> */}

                                <div className="d-grid gap-2 col-sm-5 mx-auto">
                                    <button name="sub" className="btn-bg btn btn-md text-white fs-5" type="submit" 
                                        style={{ fontWeight: "550" }}>Book
                                        Appointment</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Appointment;
