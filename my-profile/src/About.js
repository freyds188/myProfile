import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="text-center">
      <h1>About Me</h1>
      <p>I'm Aldrin Frades, My career goal is to be a successful com-sci student</p>
      <button>
        <Link to="/skill">Go to Skills</Link>
        <Link to="/contact">Go to Contact</Link>
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default About;
