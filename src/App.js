import React, { Component } from 'react';
// import axios from 'axios';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component{
  // constructor(props) {
  //   super(props);
  //   no longer needed because of routing
  //   this.state ={
  //     list: [],
  //     currentProduct: {}
  //   }

  // }

  //no longer needed because of routing
// componentDidMount = () => {
//   axios.get('/api/inventory')
//   .then(res => {
//     this.setState({list: res.data})
//     // console.log(res.data[0])
//   })
//   .catch( err => console.log(err));
// }

// selectedProduct = (val) => {
//   this.setState({currentProduct: val})
// }

  render() {
    // console.log(this.state.list)
    return (
      <HashRouter>
      <div>
          <Header/>
          {routes}
        {/* <div className='main-container'>  
        <section>
          <Dashboard
          // list={this.state.list}
          // getRequest={this.componentDidMount}
          // selectedFn={this.selectedProduct}
          />
        </section>
        <section>
          <Form
          getRequest={this.componentDidMount}
          currentProduct={this.state.currentProduct}
           /> 
        </section>
        </div> */}
      </div>
      </HashRouter>
    )
  }
}

export default App;
