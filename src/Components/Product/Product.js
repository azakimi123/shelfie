import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    
    render() {
        console.log(this.props.product)
        const product = this.props.product;
        return (
            <div>
                <section className='product-card'>
                    <img className='product-image'src={product.img}/>
                    <p className='product-name'>Name: {product.name}</p>
                    <p className='product-price'>Price: ${product.price}</p>
                </section>
            </div>
        )
    }
}

export default Product;