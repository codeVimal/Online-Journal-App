import React, { Component } from 'react'
import img1 from './img1.png'
import './Style.css'
import Button from '@mui/material/Button';
import { Link,Outlet } from 'react-router-dom'
export class Home extends Component {
  render() {
    return (
      <div className='home'>
       <div id='image1'> <img id='img' src={img1}></img> </div>
       <div id='quote'>
       <h1>"Journaling is like whispering to one's self and </h1>
        <h1> listening at the same time." </h1>
        <h1> - Mina Murray</h1>
        </div>
       <Button  id='buttonHome' varient="outlined" href="/Script"> Start Journaling </Button> 
       <Outlet/>
      </div>
    )
  }
}

export default Home