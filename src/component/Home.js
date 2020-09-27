import React  from 'react';
import image from '../Images/msme_champions.png'
import Navbar from './Navbar'
import './marquee.css'

const Home = () => {
    return(
       <div>
           <Navbar></Navbar>
        <div>
            <img src={image} style={{width:'100%',marginTop:10}} alt={image}></img>
        </div>
        <div className="marquee">
                <p> Marquee in CSS </p>
        </div>
       </div>
    )
    
}

export default Home;