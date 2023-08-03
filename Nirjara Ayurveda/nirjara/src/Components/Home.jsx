import React from "react";
import Slider from "./Slider";
import Imp_Ayurveda from "./Imp_ayurveda";
import Appointment from "./Appointment";
import Happy_pasient from "./Happy_pasient";
import Ayurveda_treatment from "./Ayurveda_treatment";
import Footer from "./Footer";
import { useEffect } from "react";

function Home() {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <Slider />
            <Imp_Ayurveda />
            <Appointment />
            <Happy_pasient />
            <Ayurveda_treatment />
            <Footer />
        </>
    )
}

export default Home;