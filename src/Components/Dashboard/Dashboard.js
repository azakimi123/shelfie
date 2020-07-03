import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
        .then( () => {
            this.props.getRequest();
        })
        .catch( err => console.log(err));
    }




    render() {
        const list = this.props.list;
        console.log(list)
        const mappedList = list.map((product, index) => (
            <Product key={index} product={product} deleteFn={this.deleteProduct}/>
        ))
        return (
            <div>
                {mappedList}
            </div>
        )
    }
}

export default Dashboard;