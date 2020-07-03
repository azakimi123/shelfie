import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    
    render() {
        console.log(this.props.product)
        const product = this.props.product;
        return (
            <div>
                <img className='image'src={product.img}/>
                <p>Name: {product.name}</p>
                <p>Price: ${product.price}</p>
            </div>
        )
    }
}

export default Product;