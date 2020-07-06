import React, {Component} from 'react';
// import Form from '../Form/Form';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    // handleToggle = () => {
    //     return <Form id={this.props.product.product_id}/>
    // }
    
    render() {
        // console.log(this.props.product)
        const product = this.props.product;
        // console.log(product.product_id)
        return (
            <div>
                <section className='product-card'>
                    <img className='product-image'src={product.img} alt={product.name}/>
                    <p className='product-name'>Name: {product.name}</p>
                    <p className='product-price'>Price: ${product.price}</p>
                    <button
                        onClick={ () => this.props.deleteFn(product.product_id)}
                        className='delete-button'>Delete</button>
                    <button onClick={()=> this.props.selectedFn(product)}
                    className='edit-button'>Edit</button>

                </section>
            </div>
        )
    }
}

export default Product;