import React from 'react';
import ReactDOM from 'react-dom/client';
import "./js/Main.js";
import './index.css';
import "./jquery-ui.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarlist from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Treatments from "./Components/Treatments";
import Contact from "./Components/Contact";
import Appointment from './Components/Appointment';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "animate.css";
// import Particle from "./Components/Particle";
// import "./Style.css";
// import "./js/app.js";
// import "../src/js/particles.js";
// import "../src/js/particles.json"




const root = ReactDOM.createRoot(document.getElementById('nirjara-ayurveda'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbarlist />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/treatment" element={<Treatments />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
