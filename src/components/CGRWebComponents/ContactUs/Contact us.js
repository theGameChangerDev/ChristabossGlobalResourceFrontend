import React from 'react'
import { useState} from 'react'
import axios from "axios"
import './Contactus.css'

function Contactus() {
    const [ fullname, setFullname ] = useState("")
    const [ phoneNo, setPhoneNo ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ prodOrder, setOrder ] = useState("")

    const submitForm = () => {
        let formData = {
            name: fullname,
            phone: phoneNo,
            email: email,
            order: prodOrder
        }

        axios.post("/api/form", formData)
            .then(res => {
                console.log(res)
            }).catch( (err) => {
                console.log(err)
            })
    }

    return ( 
        <div>
           <div className='ContactSec'> 
               <div className='container'>
               <div>
                   <br />
                   <h5 className='h5styl'>To contact us, kindly fill out the form below
                        with details of your order or questions in regard to our service</h5>
                    <br />
                    <br />
                    <strong>
                        <h5>CHRISTABOSS GLOBAL RESOURCES</h5>
                    </strong>  
                    <div className='row-1'>
                        <div className='col-12'>
                            
                          <form className='form1' >
                            <div class="form-group">
                                    <div class="row">
                                    <div class="col-12">
                                        <input type="text" 
                                        onChange ={ (e) => setFullname(e.target.value) } 
                                        class="form-control" name="full_name" 
                                        placeholder="Full Name"/>
                                    </div>
                                    </div> 
                                    <div class="row">
                                    <div class="col-12">
                                        <input class="form-control" 
                                        onChange = {(e) => setPhoneNo(e.target.value)} 
                                        placeholder="Phone Number"/>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-12">
                                        <input type="email" 
                                        onChange={ (e) => setEmail(e.target.value)} 
                                        class="form-control" placeholder="Email Address"/>
                                    </div>
                                    </div>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                    <div class="row">
                                    <div class="col-12">
                                        <textarea rows="6" 
                                        class="form-control" onChange={ (e) => setOrder(e.target.value)}
                                         placeholder="Write your order details or your questions here..."></textarea>
                                    </div>
                                    </div>
                                    </div>
                                    <br />
                                    <div class="text-center">
                                    
                                    <div class="row">
                                        <button onClick={submitForm} 
                                        class="btn btn-primary btn-lg align-center">Send</button>
                                    </div>

                                    </div>
                            </form>

                        </div>
                    </div>  
                                          
                    <div class="row-2">
                            <div class="text-center col-6">
                            
                                <strong><h6> ADDRESS I</h6></strong>
                                        <h6 className='marg'> 26 Abeokuta Street,</h6>
                                        <h6 className='marg'>Anifowoshe</h6>
                                        <h6 className='marg'>Ikeja, Lagos State</h6>
                                        <h6 className='marg'>Nigeria</h6>
                                        <h6 className='marg'><abbr title="Phone">Phone:</abbr> <a href="tel:+2348105517626">+2348105517626</a></h6>
                                        <h6 className='marg'><abbr title="Email">Email: </abbr><a href="mailto:contact@christabossglobal@yahoo.com">christabossglobal@yahoo.com</a></h6>
                            <br />
                            </div>

                        <div class="text-center col-6">
                            <strong><h6>ADDRESS II</h6></strong>
                                        <h6 className='marg'>Fakale Street,</h6>
                                        <h6 className='marg'>Fakala Road</h6>
                                        <h6 className='marg'>Sagamu, Ogun State</h6>
                                        <h6 className='marg'>Nigeria</h6>
                                        <h6 className='marg'><abbr title="Phone">Phone:</abbr> <a href="tel:+2349057226965">+2349057226965</a></h6>
                                        <h6 className='marg'><abbr title="Email">Email: </abbr><a href="mailto:christabossglobal@yahoo.com">christabossglobal@yahoo.com</a></h6>
                                <br />
                        </div>
                    </div>
               </div>
           </div>
           </div>   
        </div>
        
    )
}

export default Contactus
