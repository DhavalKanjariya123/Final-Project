import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
// import { useState } from "react";
import { useEffect } from "react";



function Navbarlist() {
    // const [toggle, setToggle]=useState (false);
    return (
        <>

            <Navbar expand="lg" variant="dark" className="navbar-bg sticky-lg-top border-bottom border-2 border-white shadow paranirjara " >
                <Container fluid>
                    <Navbar.Brand className="col-md-4 col-lg-4 p-0 ">
                        <span className="fs-2 fw-bold name-clinic">NIRJARA</span> &nbsp;
                        <i className="fs-6 fw-bold text-lowercase name-clinic-ayurveda">AYURVEDA</i>
                    </Navbar.Brand>
                    <Navbar.Toggle id="toggle"
                        data-bs-toggle="collapse" data-bs-target="#navbar-list" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <i className="bi bi-grid" id="toggle"></i></Navbar.Toggle>
                    <div className="collapse navbar-collapse me-auto" id="navbar-list"  >
                        {/* <div > */}
                        <ul className="navbar-nav  fw-bold ms-auto" >
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus"  ><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >About Us</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/treatment"><span data-bs-toggle="collapse" data-bs-target="#navbar-list.show">Treatments</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus"><span data-bs-toggle="collapse" data-bs-target="#navbar-list.show">Contact Us</span></Link>
                            </li>
                        </ul>
                        <ul className="col-xl-3  my-2 m-0 p-0">
                            <div className="float-lg-end float-none">
                                <Button size="md" className="btn-appointment btn-text fs-6 fw-bold px-4 btn btn-warning border-0"><Link
                                    className="text-decoration-none text-dark" to="/appointment"><span data-bs-toggle="collapse" data-bs-target="#navbar-list.show">Appointment</span></Link></Button>
                            </div>
                        </ul>
                        {/* </div> */}
                    </div>

                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
export default Navbarlist;