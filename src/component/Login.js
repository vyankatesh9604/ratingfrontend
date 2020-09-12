import React, { useState } from 'react'  
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
	const[email,setEmail]=useState('')
	const[password,setPassword]=useState('')
	const getlogin = (e)=>{
		e.preventDefault()
		axios.post('/users/signin', {email:email, password:password})
      	.then((res) => {
			if(res.data.status==="fail"){
				alert(res.data.message)
			}else{
				alert("Logged IN sucessfully")
			}
			
      })
	}
	return (
			  <section className="container-fluid">
				<section className ="row justify-content-center">
					<section className="col-12 col-sm-6 col-md-3">
	            		<form className="form-container">
	            			<h2>LOGIN</h2>
							<div className="form-group">
								<label>Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail1"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required=" "/>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required=" " />
							</div>
							<button className="btn btn-primary btn-block" onClick={(e)=>getlogin(e)}>Submit</button>
                            <label>Click here to</label>
                            <Link to='/register' style={{color:'blue',marginTop:10}}> Register</Link>                            
						</form>
					</section>
				</section>
			</section>
	
        );
}

export default Login;
