import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav'
import './App.css';
import Mainpage from './Mainpage'
import Signin from './Signin'
import signup from './Signup'
import Dashboard from './Dashboard'



function App() {
  return (
    <div className="App">
      
        <React.Fragment>
         <Router>
         <Nav/>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/signin" component={Signin} />
          </Switch>
         </Router>
       </React.Fragment>
        
    </div>
  );
}

export default App;
