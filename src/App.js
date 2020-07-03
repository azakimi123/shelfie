import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component{
  render() {
    return (
      <div>
        <Dashboard/>
        <Form/>
        <Header/>
      </div>
    )
  }
}

export default App;
