import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./Login";
import Home from './Home'
import SignUp from './SignUp'
import { AuthProvider } from './Auth'
import './App.css'
import PrivateRoute from "./PrivateRoute";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App