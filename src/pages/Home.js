import React from 'react';
import{Link} from "react-router-dom";
import BannerImage from '../asserts/pizza.jpeg';
import '../components/styles/Home.css';


function Home() {
  return (
    <div className='Home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer' 
      
      >
        <h1>Navaz's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
     
    </div>
  )
}

export default Home;

