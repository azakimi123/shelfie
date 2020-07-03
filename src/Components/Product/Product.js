import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    
    render() {
        // console.log(this.props.product)
        const product = this.props.product;
        // console.log(product.product_id)
        return (
            <div>
                <section className='product-card'>
                    <img className='product-image'src={product.img}/>
                    <p className='product-name'>Name: {product.name}</p>
                    <p className='product-price'>Price: ${product.price}</p>
                    <button
                        onClick={ () => this.props.deleteFn(product.product_id)}>Delete</button>
                    <button>Edit</button>
                </section>
            </div>
        )
    }
}

export default Product;