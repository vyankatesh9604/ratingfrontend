import React  from 'react';
import image from '../Images/msme_champions.png'
import gif from '../Images/new-icon-gif-8.jpg'
import NavbarAdmin from './NavbarAdmin'
import './marquee.css'

const HomeAdmin = () => {
    return(
       <div>
           <NavbarAdmin></NavbarAdmin>
        <div>
            <img src={image} style={{width:'100%',marginTop:10}} alt={image}></img>
        </div>
        
        <div className="marquee bg-primary text-white font-weight-bold">
                
                <p><img src={gif} style={{width:'45px',height:'40px',marginTop:10}} alt={gif}></img>India’s Micro, Small, and Medium Enterprises (MSMEs) base is the largest in the world after China. </p>
                
        </div>

        <div class="card-deck mt-4 ml-4 mr-4">
                    <div class="card">
                        <div class="card-body bg-primary text-white">
                            <p class="card-text">The Ministry of Small Scale Industries and Agro and Rural Industries was created in October 1999. In September 2001, the ministry was split into the Ministry of Small Scale Industries and the Ministry of Agro and Rural Industries. </p>
                            <p class="card-text">The Minister of Micro, Small and Medium Enterprises is Nitin Gadkari and the Minister of State is Pratap Chandra Sarangi since 31 May 2019.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body bg-primary text-white">
                            <p class="card-text">The Government of India has introduced MSME or Micro, Small, and Medium Enterprises in agreement with Micro, Small and Medium Enterprises Development (MSMED) Act of 2006. These enterprises primarily engaged in the production, manufacturing, processing, or preservation of goods and commodities.</p>
                            <p class="card-text">MSMEs come under the Ministry of Micro, Small & Medium Enterprises and are required to be registered to avail benefits and subsidies offered from various Government initiated schemes. </p>
                        </div>
                    </div>
                    </div>

       </div>

       

       
    )  
}

export default HomeAdmin;