import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.css';

class Navbar extends Component{
  render () {
	return (
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container nav-content">
  <Link className="navbar-brand">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="nav-items navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}><a>Home</a></Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link" activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link" activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link" activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
      </li>
    </ul>
   </div>
  </div>
</nav>
	
		);
	}
}


export default Navbar;