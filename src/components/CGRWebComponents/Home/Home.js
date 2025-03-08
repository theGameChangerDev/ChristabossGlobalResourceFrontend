import React from 'react'
import Slider from '../Slider/Slider.js';
import "./Home.css"
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <Slider />
            <div className='HomeContent'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='img1'>
                                <img src='../images/servblockimg.jpg' alt='' />
                            </div>
                            <h4 className='grid-title'>
                                Best In Service Delivery 
                            </h4>
                            <p>
                                At CGR, we are commited to delivering 
                                the best possible service to customers
                            </p>

                               <Link to='/services'>READ MORE</Link>
                        </div>
                        
                        <div className='col-4'>
                            <div className='img2'>
                                <img src='../images/servetool.jpg' alt='' />
                            </div>
                            <h4 className='grid-title'>
                               Quality Assurance
                            </h4>
                            <p>In pursuit of excellence in regard to maintaining
                                standard in our service,CGR sells and supply high quality
                                materials</p>
                                <Link to='/about'>READ MORE</Link>
                        </div>
                        <div className='col-4'>
                            <div className='img3'>
                                <img src='../images/serveVisionImg.jpg' alt='' />
                            </div>
                            <h4 className='grid-title'>
                               The CGR Mission
                            </h4>
                            <p>To perform and makes deleiveries in a manner to ensure that our
                                 clients are left with tangible value
                                  and utmost satisfaction</p>
                            <Link to='/about'>READ MORE</Link>


                        </div>




                    </div>
                


                </div>
               
            </div>
              
        </div>
    )
}

export default Home

/* <div className='highlight2'>
                    <div className='others'>
                        <div className='service'>
                            <h2>Our Promise</h2>
                            <p>We provide services to a diverse clientele group. They include private home developers, real estate developers, 
                                state governments, engineering and civil construction companies</p>
                        </div>

                    </div>

                </div> */


