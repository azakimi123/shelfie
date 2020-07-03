import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.list;
        // console.log(list)
        const mappedList = list.map((product, index) => (
            <Product key={index} product={product}/>
        ))
        return (
            <div>
                {mappedList}
            </div>
        )
    }
}

export default Dashboard;