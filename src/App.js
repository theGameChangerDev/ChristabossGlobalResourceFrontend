import React from 'react';
import './App.css';
import Header from './components/CGRWebComponents/Header/Header';
import Aboutus from './components/CGRWebComponents/AboutUs/About us';
import Contactus from './components/CGRWebComponents/ContactUs/Contact us';
import Home from './components/CGRWebComponents/Home/Home';
import Products from './components/CGRWebComponents/Products/Products';
import Projects from './components/CGRWebComponents/Projects/Projects';
import Service from './components/CGRWebComponents/Services/Services';
import Navbar from './components/Navigation/Navbar/Navbar';
import CGRFooter from './components/CGRWebComponents/Footer/Footer';


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {                                              
  return (
    <Router>
      <div className="App">
        
        <Header/>
        <Navbar />
       
        <div className='content'>
        <Switch>  
           <Route path="/" exact component={Home} />
           <Route path="/services" component={Service}/>
           <Route path="/projects" component={Projects}/>
           <Route path="/products" component={Products}/> 
           <Route path="/about"    component={Aboutus}/>
           <Route path="/contact" component={Contactus}/>
        </Switch>
        </div>
  
        <CGRFooter />

          
      </div>
    </Router>   
      
  );
}

export default App;
