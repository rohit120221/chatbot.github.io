import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './RecyclingDepot.css'
import handslogo from './handslogo.png'
import ImageSlider from "../slideshow/ImageSlider";
import { SliderData } from "../slideshow/SliderData";


function App() {

    return <div>map here</div>;
}




function RecyclingDepotPage(){
    return(
        
        <div className='WhatRecycleSplash'>
        
            <h1>
                Find your nearest Recycling depot!
            </h1>
        <div className='GreenhandLogo'>
             <img src={handslogo} width="100" alt="logo" />
             </div>  
        
             <div className='Heading1'>
            <h2> - Google Maps goes here - </h2>
        </div> 

        <div className='Heading2'>
        <h3>We want you to recycle but it needs to be efficient and easy for you to do so. You can use the maps above to find where your nearest recycling depot is. The pointers on the map show the different recycling depots near your location. Tap the one closest to you to see where it is located.  </h3>
        </div> 
       
        
  
         
        
        </div>
        
    )
}

export default RecyclingDepotPage