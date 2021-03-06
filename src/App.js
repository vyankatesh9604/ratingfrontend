import React from 'react';
import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import {Switch,Route} from 'react-router-dom'
import Home from './component/Home';
import CompanyInfo from './component/CompanyInfo'
import RatingForm from './component/RatingForm'
import WorkerInfo from './component/WorkerInfo'
import HomeAdmin from './component/HomeAdmin';
function App() {
  return (
    <>
   
      <Switch>
      <Route  exact path ="/"  component={Login}/>
      <Route exact path ="/register"  component={Register}/>
      <Route exact path ='/home' component={Home}/>
      <Route exact path ='/ratingform' component={RatingForm}/>
      <Route exact path ='/workerinfo' component={WorkerInfo}/>
      <Route exact path ='/homeadmin' component={HomeAdmin}/>
      <Route exact path ='/companyinfo' component={CompanyInfo}/>
      
    </Switch>
  </>
  );
}

export default App;
