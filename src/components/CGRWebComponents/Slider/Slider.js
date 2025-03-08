import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css'



function Slider() {
    return (
        <div>
             <Carousel className="imgSlider">
            <Carousel.Item interval={2000} className='imgslide'>
                <img
                className="d-block w-100"
                src="../images/buildingMat1.png"
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="../images/homeImage.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
               
               
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="../images/building4slide.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
                        
        </div>
    )
}

export default Slider
