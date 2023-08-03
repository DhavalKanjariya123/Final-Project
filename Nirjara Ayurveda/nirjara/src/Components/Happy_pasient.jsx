import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


function Happy_pasient() {
    const [counteron, setcounterOn] = useState(false);
    return (
        <>
            <Container fluid className="pasient mt-5">
                {/* <div>
                    <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(true)}><span className="counter">{counteron && <CountUp start={0} end={10000} duration={5} delay={0} />}</span><span className="counter-plus">+</span></ScrollTrigger>
                    <h3 className="fs-2 paranirjara">Happy Patients</h3>
                </div> */}

                <div>
                    <ScrollTrigger ><span className="counter">&#128516;</span></ScrollTrigger>
                    <h3 className="fs-2 paranirjara">Fully Satisfied Patients</h3>
                </div>
                <div className="mt-5">

                    <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(true)}><span className="counter">{counteron && <CountUp start={0} end={100} duration={5} delay={0} />}</span><span className="counter-per">%</span></ScrollTrigger>
                    <h3 className="fs-2 paranirjara" >Authentic Ayurvedic
                        Treatment</h3>
                </div>

                <div className="mt-5">
                    <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(true)}><span className="counter">{counteron && <CountUp start={0} end={10} duration={5} delay={0} />}</span><span className="counter-plus">+</span></ScrollTrigger>
                    {/* <span className="counter">10</span>  */}
                    {/* <span className="counter-plus">+</span> */}
                    <h3 className="fs-2 paranirjara">Years of Experience</h3>
                </div>

            </Container>

        </>
    )
}

export default Happy_pasient;
