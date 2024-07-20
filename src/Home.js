import React, { Component } from 'react';
import img1 from './img1.png';
import './Style.css';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div id='image1'>
          <img id='img' src={img1} alt="Home"/>
        </div>
        <div id='quote'>
          <h1>"Journaling is like whispering to one's self and</h1>
          <h1> listening at the same time."</h1>
          <h1> - Mina Murray</h1>
        </div>
        <Button id='buttonHome' variant="outlined" component={Link} to="/Script">Start Journaling</Button>
        <div className="auth-buttons">
          <Button id='buttonHome' variant="outlined" component={Link} to="/Login">Login</Button>
          <Button id='buttonHome' variant="outlined" component={Link} to="/Signup">Sign Up</Button>
        </div>
        <Outlet/>
      </div>
    );
  }
}

export default Home;
