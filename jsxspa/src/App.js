import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import User from './User';
import Login from './Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/user"  component={User}/>
        <Route path="/login"  component={Login}/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
