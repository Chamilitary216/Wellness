import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Nutrition from "./pages/Nutrition";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Fitness from "./pages/Fitness";
import Landing from "./pages/Landing";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from './store';

if(localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = './login';
  }
console.log(token)
}

function App() {
  return localStorage.jwtToken ? (
    <div className = "App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = {['/','/home']}> 
          <Homepage />
        </Route>
        <Route exact path = "/nutrition"> 
          <Nutrition />
        </Route>
        <Route exact path = "/fitness"> 
          <Fitness />
      </Route> 

      <Route exact path = "/journal"> 
          <Journal />
      </Route> 

      <Route exact path = "/contact"> 
          <Contact />
        </Route>
        <Route exact path = "/notfound"> 
          <NotFound />
        </Route> 
      </Switch>
    </Router>  
    </div>
  ) : (
  <div>
  <route exact>
    <Landing />
  </route>    
  </div>
  )
  
  }

export default App;