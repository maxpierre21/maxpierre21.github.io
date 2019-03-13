import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component{
	render() {
		return (
			  <footer className="footer">
                 <div className="container">
                  <span className="text-muted"> General Tech Services &#169; {new Date().getFullYear()}</span>
                 </div>
               </footer>
			);
	}
}

export default Footer;