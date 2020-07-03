import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state ={
      list: [
        {
          img:'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Brixton-Jolt-Black-Trucker-Hat-_290849-front-US.jpg',
          name: 'Brixton Hat',
          price: 24.99
        },

        {
          img:'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Thrasher-Godzilla-Red-Hoodie-_323721-front-US.jpg',
          name: 'Thrasher Hoodie',
          price: 67.95
        },

        {
          img:'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Primitive-x-Naruto-Ichiraku-Black-T-Shirt-_331191-front-US.jpg',
          name: 'Primitive Naruto Shirt',
          price: 33.95
        }
      ]
    }
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
