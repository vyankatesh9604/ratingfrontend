import React from 'react'
import {NavLink,useHistory} from 'react-router-dom'
import logo from '../Images/logo1.jpg'
import './navbar.css'

const Navbar = () => {
    const history =useHistory() 
    const getlogout = () => {
       
        history.push('/')
    }
    return(
        <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} style={{width:150,height:60}} alt={logo}></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact  className="nav-link" to="home">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/ratingform">RatingForm</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/workerinfo">WorkersInfo</NavLink>
                            </li>
                            <li className='nav-item'>
                            <button className="btn nav-link bg-light" onClick={()=>getlogout()}>LOGOUT</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}
export default Navbar;