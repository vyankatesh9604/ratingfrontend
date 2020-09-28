import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const RatingForm = (props) =>{
    const [companyname , setCompanyname] = useState('')
    const [training , setTraining] = useState('')
    const [environment , setEnvironment] = useState('')
    const [epf ,setEpf]=useState('')
    const [health ,setHealth]=useState('')
    const [teamsprit , setTeamsprit]=useState('')
    const [policies ,setPolicies] =useState('')

    const getrating = (e)=>{
		e.preventDefault()
		axios.post('/users/rating', {companyname,training,environment,epf,health,teamsprit,policies})
      	.then((res) => {
			if(res.data.status==="fail"){
				alert(res.data.message)
			}else{
				alert(res.data.message)
			
			}
			
      })
	}
    return(
        <div>
            <Navbar/>
            <div className="my-4">  
                <h1 className="text-center">Rating Form</h1>
            </div>
            <div className="container rating-div">
               
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <p>*Note: please read point and based on rating will provided </p>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-lebel font-weight-bold ">Company Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" value={companyname} onChange={(e)=>setCompanyname(e.target.value)} placeholder="Enter your Company name" required=' '/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput2" className="form-lebel font-weight-bold ">Training</label>
                                <li className="pl-2">Percentage of trained workers</li>
                                <li className="pl-2">Training Facility For Untrained workers</li>
                                <input type="text" pattern='[0-9]*' className="form-control" id="exampleFormControlInput2"  value={training} onChange={(e)=>setTraining(parseInt(e.target.value))} placeholder="Enter Training rating out of 10" required=' '/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput3" className="form-lebel font-weight-bold ">Good Working Environment</label>
                                <li className="pl-2">working space available</li>
                                <li className="pl-2">Entertainment For workers</li>
                                <input type="text" pattern='[0-9]*' className="form-control" id="exampleFormControlInput3" value={environment} onChange={(e)=>setEnvironment(parseInt(e.target.value))} placeholder="Enter Good Environment rating out of 10" required=' '/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput4" className="form-lebel font-weight-bold ">EPF BENEFIT-</label>
                                <label className="p-2"><input type="radio" name="optradio"  value={'YES'} checked={epf ==='YES'}  onChange={(e)=>setEpf(e.target.value)} />YES</label>
                                <label  className="p-2"><input type="radio" name="optradio" value={'NO'} checked={epf === 'NO'}  onChange={(e)=>setEpf(e.target.value)}/>NO</label>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput5" className="form-lebel font-weight-bold ">Health Consiousness</label>
                                <li className="pl-2">primary health care available</li>
                                <input type="text"  pattern='[0-9]*' className="form-control" id="exampleFormControlInput5"  value={health} onChange={(e)=>setHealth(parseInt(e.target.value))} placeholder="Enter rating for Health Consiousness out of 10" required=' '/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput6" className="form-lebel font-weight-bold ">Developing team sprit</label>
                                <li className="pl-2">Tours Sponser by Company</li>
                                <li className="pl-2">Motivate worker when needed</li>
                                <input type="text"  pattern='[0-9]*' className="form-control" id="exampleFormControlInput6"  value={teamsprit} onChange={(e)=>setTeamsprit(parseInt(e.target.value))} placeholder="Enter rating for  team sprit out of 10" required=' '/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput6" className="form-lebel font-weight-bold ">Environmental protection policies</label>
                                <li className="pl-2">Life insurance</li>
                                <li className="pl-2">Accidental insurance</li>
                                <li className="pl-2">Health insurance</li>
                                <input type="text"  pattern='[0-9]*' className="form-control" id="exampleFormControlInput6" value={policies} onChange={(e)=>setPolicies(parseInt(e.target.value))} placeholder="Enter rating for protection policies out of 10" required=' '/>
                            </div>
                            <div className="col-14 h-50">
                                <button className="btn btn-outline-primary btn-block" type="submit" onClick={(e)=>getrating(e)}>
                                Submit form
                                </button>
                            </div>
                      </form>
                    </div>
                </div>
            </div>
      
    )
}

export default  RatingForm;