import React from 'react';
import { Route} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MemberHome from "./components/protected/MemberHome"

import './App.css';

class App extends React.Component {

   logout = event => {
    event.preventDefault();
    localStorage.removeItem("token")
    this.props.history.push('/login')
  }
  render() {
    return (
     <div className="app">
       <header>
         <h1>Bookr</h1>
         {localStorage.getItem("token") ? 
         <button onClick={this.logout}>Logout</button> : null}
       </header>
       <Route path="/login" component={Login}/>
       <Route path="/signup" component={Signup}/>
       <PrivateRoute path="/member-area" component={MemberHome} />
     </div>
  );
  }
  
}

export default App;


