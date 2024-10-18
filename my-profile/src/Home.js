import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to my React Profile</h1>
      <p>I'm Aldrin Frades, My career goal is to be a successful com-sci student</p>
      <button>
        <Link to="/about">Go to About</Link>
      </button>
      <button>
        <Link to="/skill">Go to Skills</Link>
      </button>
      <button>
        <Link to="/contact">Go to Contact</Link>
      </button>
    </div>
  );
};

export default Home;
