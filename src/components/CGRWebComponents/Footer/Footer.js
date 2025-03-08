import React from 'react'
import './Footer.css'
import instagram from '../../../assets/images/ChristabossGRLogo-rembg.png'
import {  Link } from 'react-router-dom'
import instagramImg from '../../../assets/images/instagramImage-rembg.jpg'
import facebook from '../../../assets/images/facebookImg3.png'
import twitter from '../../../assets/images/twitterImg2.png'


function CGRFooter() {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='row'>
                    <div  className='footer-col-2'>
                        <img src={instagram}  alt='' />

                    </div >
                    <div className='footer-col-1'>
                        <h4>Location</h4>
                        <p>Location 1</p>
                            <p>No 26, Abeokuta Street,
                            Anifowoshe ikeja Lagos</p>
                        <p>Location 2</p>
                        <p>Fakale Road, Sagamu, Ogun State</p>
                    </div>
                    <div className='footer-col-3'>
                        <h4>Menu</h4>
                        <ul>
                            <Link to='/'>
                            <li>Home</li>
                            </Link>
                            <Link to='/services'>
                            <li>Services</li>
                            </Link>
                            <Link to='/products'>
                            <li>Products</li>
                            </Link>
                            <Link to='/projects'>
                            <li>Projects</li>
                            </Link>  
                            
                        </ul>
                        
                    </div>
                    <div className='footer-col-4'>
                        <h4>CONTACT</h4>
                        <p>Phone:  08029867025</p>
                        <p>Email:christabossglobalresource@gmail.com</p>

                        
                            <h4>Visit Us</h4>
                            <ul>
                                <li className='img1'>
                                    <Link><img  src={instagramImg} alt=''/></Link>
                                </li>
                                <li className='img2'>
                                <Link><img  src={facebook} alt=''/></Link>
                                </li>
                                <li className='img3'>
                                <Link><img  src={twitter} alt=''/></Link>
                                </li>
                            </ul>
                        
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default CGRFooter
