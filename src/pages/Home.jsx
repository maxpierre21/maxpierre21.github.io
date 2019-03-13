import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from "../components/footer.jsx";
import Jumbotron from "../components/jumbotron.jsx";
import Section from "../components/Section.js";
import dummyText from "../DummyText"

class Home extends Component {
	render() {
		return (
			<div>
			<Navbar/>
			<Jumbotron title="Welcome" subtitle="Mes salutations chef!"/>
			<div className="container">
       
        <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
		<Footer/>
		</div>
		);
	}
}

export default Home;