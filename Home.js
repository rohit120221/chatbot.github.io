import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './Home.css'
import handslogo from './handslogo.png'
import ImageSlider from "../slideshow/ImageSlider";
import { SliderData } from "../slideshow/SliderData";

function Home(){
    
    return(
        
        <div className='Home'>
        
            <h1>
                Welcome to GoGreen!
            </h1>
        <div className='GreenhandLogo'>
             <img src={handslogo} 
             width="100" 
             alt="logo"
            />
             </div>
        
        <div>
            <br></br> <br></br>
            <ImageSlider slides={SliderData} />
            </div>
        <div className="MapLink">
         <Link to= '/RecyclingDepot'> 
             <b>Find Your Nearest <br></br> Recycling Point</b>
         </Link>
         </div>
         <div className="Record">
         <Link to="/whathaveyourecycled">
         <b>What Have You Recycled?</b>   
         </Link>
        </div>
        <div className="RecordRecycling">
            <Link to="inputrecycling">
                <b>Record Your Recycling</b>
            </Link>
        </div>
        <div className='homeFlavour'>
        <u>Welcome to the goGreen website!</u> <br></br> The goal of our app is to encourage people to recycle on a regular basis, and to provide better and more informative feedback on exactly what impact the items the user is recycling can be used for.<br></br><br></br>As well as this, through the goGreen app you can track your nearest recycling point, and read up on exactly why recycling is such a massive issue in the modern day, as well as information on how well the country and the world is doing at solving this growing issue.
        </div>        
        </div>
    )
}

export default Home