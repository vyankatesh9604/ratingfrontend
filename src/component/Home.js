import React  from 'react';
import image from '../Images/msme_champions.png'
import Navbar from './Navbar'


const Home = () => {
    return(
       <div>
           <Navbar></Navbar>
       <div>
           <img src={image} style={{width:'100%',marginTop:10}} alt={image}></img>
       </div>
       </div>
    )
    
}

export default Home;