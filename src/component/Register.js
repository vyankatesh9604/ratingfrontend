import React, { useState } from 'react'  
import './register.css'
import { Link } from 'react-router-dom';
import axios from'axios';


const Register = () => {
	const [name,setName]= useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')	
	
	const getregister =(e) =>{
		e.preventDefault()
		console.log(name,email,password)
		axios.post('/users/signup',{name:name,email:email,password:password})
		.then((res)=>{
			console.log(res)
		})
	}

	return (
			  <section className="container-fluid">
				<section className ="row justify-content-center">
					<section className="col-12 col-sm-6 col-md-3">
	            		<form className="form-container" onSubmit={(e) => getregister(e)}>
	            			<h2>REGISTER</h2>
                            <div className="form-group">
								<input type="text" className="form-control" id="exampleInputName1" placeholder="Enter name" required=" "
								value={name} onChange={(e)=>setName(e.target.value)}/>
								
							</div>
							<div className="form-group">	
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" 
								 value={email} required=" "   onChange={(e)=>setEmail(e.target.value)}/>
								
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"
								  required=" " value={password} onChange={(e)=>setPassword(e.target.value)}/>
							</div>
							<button className="btn btn-primary btn-block" type='submit'>Register</button>
                            <label>Already Have Account</label>
                            <Link to="/" style={{color:'blue',marginTop:20,marginLeft:10}}>Login</Link>                            
						</form>
					</section>
				</section>
			</section>
			
        );
}

export default Register;