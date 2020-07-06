import React, {Component} from 'react';
import Product from '../Product/Product';
// import Form from '../Form/Form';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list: []
          }
    }

    selectedProduct = (val) => {
        this.setState({currentProduct: val})
      }

    componentDidMount = () => {
        axios.get('/api/inventory')
        .then(res => {
          this.setState({list: res.data})
          // console.log(res.data[0])
        })
        .catch( err => console.log(err));
      }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
        .then( () => {
            this.componentDidMount();
        })
        .catch( err => console.log(err));
    }




    render() {
        // console.log(this.props)
        //no longer needed because of routing
        // const selectedFn = this.props.selectedFn;
        // const list = this.props.list;
        // console.log(list)
        const mappedList = this.state.list.map((product, index) => (
                <Product key={index} product={product} deleteFn={this.deleteProduct} selectedFn={this.selectedProduct}/>

        ))
        return (
            <div>
                {mappedList}
            </div>
        )
    }
}

export default Dashboard;