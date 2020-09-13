import React from 'react';
import SignUp from './components/sign-up/sign-up'
import NavBar from './components/navBar/navBar'
import FrontPage from './components/frontPage/frontPage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LogIn from './components/login/login';
import RecentZvz from './components/recentZvz/recentZvz'




function App() {
  return (
    <div>      
      <Router>
        
      <NavBar/>
        <Switch>          
          <Route path="/recentzvz" component={RecentZvz}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" exact component={FrontPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
