import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider_img1 from "../images/Slider/image_1.JPG";
import slider_img2 from "../images/Slider/image_2.JPG";
import slider_img3 from "../images/Slider/image_3.JPG";


function Slider() {
    return (
        <>
            <Carousel fade  className='heading-text-img'>
                <Carousel.Item className='slider-item' text="First slide" interval={2500}>
                
                    <img src={slider_img1} className="d-block img-fluid" alt="not found" />
                    <Carousel.Caption className="slider-text sliderfade">

                        <h1 className="fw-bold subheadingnirjara1">PURE AYURVEDIC TREATMENT</h1>
                        <h1 className="fw-bold subheadingnirjara1">CERTIFIED AYURVEDIC DOCTOR</h1>

                        {/* <p className="w-75 mx-auto mt-4 text-center d-none d-md-block paranirjara"
                            align="justify">Lorem ipsum,
                            dolor sit amet consectetur
                            adipisicing elit. Ex ipsa, vel quas quia aperiam quasi a molestiae maxime. Deserunt officiis
                            molestiae est ipsa? Repellendus nobis ratione quas dolor esse aliquam!</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider-item' interval={2500}>
                    <img src={slider_img2} className="d-block img-fluid" alt="not found" />
                    <Carousel.Caption className="slider-text sliderfade">
                        <h1 className="fw-bold subheadingnirjara1">EXPERT & QUALIFIED ANALYST</h1>
                        <h1 className="fw-bold subheadingnirjara1">CUSTOMISED SOLUTIONS TO INDIVIDUALS</h1>

                        {/* <p className="w-75 mx-auto mt-4 text-center d-none d-md-block paranirjara"
                            align="justify">Lorem ipsum,
                            dolor sit amet consectetur
                            adipisicing elit. Ex ipsa, vel quas quia aperiam quasi a molestiae maxime. Deserunt officiis
                            molestiae est ipsa? Repellendus nobis ratione quas dolor esse aliquam!</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider-item' interval={2500}>
                    <img src={slider_img3} className="d-block img-fluid" alt="not found" />
                    <Carousel.Caption className="slider-text sliderfade">
                    <h1 className="fw-bold subheadingnirjara1">COMPLEMENTARY TREATMENTS</h1>
                        <h1 className="fw-bold subheadingnirjara1">SPOT SOLUTIONS FOR MULTIPLE PROBLEMS</h1>
                        

                        {/* <p className="w-75 mx-auto mt-4 text-center d-none d-md-block paranirjara"
                            align="justify">Lorem ipsum,
                            dolor sit amet consectetur
                            adipisicing elit. Ex ipsa, vel quas quia aperiam quasi a molestiae maxime. Deserunt officiis
                            molestiae est ipsa? Repellendus nobis ratione quas dolor esse aliquam!</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider;
