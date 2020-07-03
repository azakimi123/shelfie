import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state ={
      list: []
    }
  }

componentDidMount = () => {
  axios.get('/api/inventory')
  .then(res => {
    this.setState({list: res.data})
  })
  .catch( err => console.log(err));
}

  render() {
    return (
      <div>
        <Header/>
        <Dashboard
        list={this.state.list}/>
        <Form/>
      </div>
    )
  }
}

export default App;
