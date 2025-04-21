import React from "react";
import Header from "../components/Hearder";
import './About.css';
import Footer from "../components/Footer";

const About = () => {
  
  return (
    <>
    <div className="main-container">

   
    <Header />
    
      
    <div className="container">
      <h1 className="heading">About InnerBalance</h1>
      <div className="para">
      <p className="paragraph">
        InnerBalance is a mental wellness platform that connects clients, psychologists,
        and administrators through seamless video calls, voice calls, and messaging.
        Our goal is to provide a secure, supportive space where users can access
        professional mental health support, track progress, and build healthier lives.
      </p>
      <p className="paragraph">
        Whether you're a psychologist managing clients or an individual seeking
        guidance, InnerBalance offers a powerful toolset for mental well-being.
      </p>
      <p className="paragraph">
        Built with care using modern technologies like React, Node.js, and video communication APIs,
        InnerBalance is here to help you stay grounded and connected.
      </p>
      </div>
      <Footer />
    </div>
    </div>
    </>
  );
};



export default About;
