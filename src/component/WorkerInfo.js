import React from 'react'
import Navbar from './Navbar'


const WorkerInfo = () =>{
      
    const user =JSON.parse( localStorage.getItem('user'))
    const rating =user.rating
    
    return(
        <div>
            <Navbar/>
            <div className="my-4 ml-4">
              <h1>Your rating</h1>
            </div>
            
            <div className="col-md-6 col-12 mx-auto">
              <div className=" card ">
                <label  className="font-weight-bold m-0 ml-2 mt-2">Your Name-</label>
                 <p className="mb-3 pl-4">{user.name}</p>
              </div>
             { rating.length && rating.map((item)=>{
                  let Avg =((item.training + item.environment + item.health + item.teamsprit + item.policies ) / 5)
                  return( 
                    <div className="card-deck mt-2">
                      <div className="card mr-1"> 
                        <label className=" font-weight-bold m-0  ml-2 mt-2 text-center ">Company Name</label>
                        <p className="text-center">{item.companyname}</p>
                      </div>
                      <div className="card ml-0 ">
                        <label className=" font-weight-bold m-0 ml-2 mt-2 text-center">Avarge rating</label>
                        <p className="text-center">{Avg}</p>
                      </div>
                    </div>
                  )
                })
              }
              {/* <div className="card mt-2">
                <label className=" font-weight-bold m-0  ml-2 mt-2">Training-</label>
                <p className="pl-5">{rating.training}</p>
              </div>
              <div className="card mt-2">
                <label className=" font-weight-bold m-0  ml-2 mt-2">Good Environment-</label>
                <p className="pl-5">{rating.environment}</p>
              </div>
              <div className="card mt-2">
                <label className=" font-weight-bold m-0  ml-2 mt-2">Epf Benefit-</label>
                <p className="pl-5">{rating.epf}</p>
              </div>
              <div className="card mt-2">
                <label className=" font-weight-bold m-0  ml-2 mt-2">Health Consiousness-</label>
                <p className="pl-5">{rating.health}</p>
              </div>
              <div className="card mt-2">
                <label className=" font-weight-bold m-0  ml-2 mt-2">Developing team sprit-</label>
                <p className="pl-5">{rating.teamsprit}</p>
              </div>
              <div className="card mt-2">
                <label className=" font-weight-bold m-0  ml-2 mt-2">Environmental protection policies-</label>
                <p className="pl-5">{rating.policies}</p>
              </div>
               */}
            </div>
        </div>
    )
}

export default  WorkerInfo;