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
            <div>
                {
                    companyrating && Object.keys(companyrating).map((companyname)=>{
                    return <h3>{companyname}:{companyrating[companyname]}</h3>

                    })
                }
            </div>
        </div>
    )
}

export default CompanyInfo