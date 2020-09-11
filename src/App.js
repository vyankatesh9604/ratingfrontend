import React from 'react';
import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import {Switch,Route} from 'react-router-dom'
import Home from './component/Home';

import RatingForm from './component/RatingForm'
import WorkerInfo from './component/WorkerInfo'
function App() {
  return (
    <>
   
      <Switch>
      <Route  exact path ="/"  component={Login}/>
      <Route exact path ="/register"  component={Register}/>
      <Route exact path ='/home' component={Home}/>
      <Route exact path ='/ratingform' component={RatingForm}/>
      <Route exact path ='/workerinfo' component={WorkerInfo}/>
      
    </Switch>
  </>
  );
}

export default App;
