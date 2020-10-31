import React, { useState } from 'react'  
import './login.css'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';




const Login = () => {
	const history =useHistory()
	const[email,setEmail]=useState('')
	const[password,setPassword]=useState('')
	const[role,setRole]=useState('')
	
	const getlogin = (e)=>{
		e.preventDefault()
		if(role===''){
			alert("Please select role")
		}
		else if(role==='worker'){
			axios.post('/users/signin', {email:email, password:password})
			.then((res) => {
				if(res.data.status==="fail"){
					alert(res.data.message)
				}else{
					alert("Logged IN sucessfully")
					localStorage.setItem('user',JSON.stringify(res.data.user))
					history.push('/home');
				}
				
			}).catch((err)=>{
				console.log(err)
			})
		}
		else{
			axios.post('/admin/signin', {email:email, password:password})
			.then((res) => {
				if(res.data.status==="fail"){
					alert(res.data.message)
				}else{
					alert("Logged IN sucessfully")
					localStorage.setItem('user',JSON.stringify(res.data.user))
					history.push('/homeadmin');
				}
				
			}).catch((err)=>{
				console.log(err)
			})
		}
	}
	const responseSucessGoogle = (response) =>{
		const {email,name,googleId}=response.profileObj
		axios.post('/users/googlesignin',{email,name,password:googleId})
		.then((res)=>{
			if(res.data.status==="fail"){
				alert(res.data.message)
			}else{
				localStorage.setItem('user',JSON.stringify(res.data.user))
				history.push('/home')
			}
		}).catch((err)=>{
			console.log(err)
		})
		
	}
	const responseErrorGoogle = (response) =>{
		console.log(response)
	}
	return (
			  <section className="container-fluid">
				<section className ="row justify-content-center">
					<section className="col-12 col-sm-6 col-md-3">
	            		<form className="form-container">
	            			<h2>LOGIN</h2>
							<div className="form-group">
								<select className="w-100" value={role} onChange={(e)=>setRole(e.target.value)}> 
									<option value=''>Select Role</option>
									<option value='admin'>Admin</option>
									<option value='worker'>Worker</option>
								</select>	
							</div>
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
							<GoogleLogin
								clientId="578186870132-r6epp99lv911k4dccod92frl326jbha2.apps.googleusercontent.com"
								buttonText="Login with Google"
								onSuccess={responseSucessGoogle}
								onFailure={responseErrorGoogle}
								cookiePolicy={'single_host_origin'}
								className="btn btn-block"
							/>,                               
						</form>
					</section>
				</section>
			</section>
	
        );
}

export default Login;
