import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import axios from 'axios'

const CompanyInfo = () =>{
    const [companyrating,setCompanyRating]=useState('')
    useEffect(()=>{
        axios.get('/users/ratingstore')
        .then((res)=>{
            if(res.data.status==='sucess'){
                setCompanyRating(res.data.companyratings)
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[]) 
    return(
        <div>
            <div>
                <NavbarAdmin></NavbarAdmin>
            </div>
            <div className="my-4 ml-4">
              <h3 className="font-weight-bold">Company-Wise-Rating</h3>
            </div>
            <div>
                {
                    companyrating && Object.keys(companyrating).map((companyname)=>{
                    return (
                        
                        <div className="col-md-6 col-12 mx-auto">
                        <div className="card-deck">
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h4 className="card-title font-weight-bold">Company Name : {companyname}</h4>
                                </div>
                                <div className="card-footer bg-secondary">
                                    <h5 className="text-light">Rating : {companyrating[companyname]}</h5>
                                </div>
                            </div>
                        </div>
                        </div>

                    )

                    })
                }
            </div>
        </div>
    )
}

export default CompanyInfo