import React from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MemberHome from "./components/protected/MemberHome"

import './App.css';

function App() {
  return (
     <div>
       <header>
         <h1>Bookr</h1>
       </header>
       <Route path="/login" component={Login}/>
       <Route path="/signup" component={Signup}/>
       <PrivateRoute path="/member-area" component={MemberHome} />
     </div>
  );
}

export default App;


