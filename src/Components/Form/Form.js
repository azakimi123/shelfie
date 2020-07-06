import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            imgurl: '',
            name: '',
            price: 0,
            isEditing: false
        }
    }


handleImg = (url) => {
    this.setState({imgurl: url})
}

handleName = (nameInput) => {
    this.setState({name: nameInput})
}

handlePrice = (val) => {
    this.setState({price: val})
}

handleCancelBtn = () => {
    this.setState({
        imgurl: '',
        name: '',
        price: 0
    })
}

createProduct = () => {
    axios.post('/api/product', {
        name: this.state.name,
        price: this.state.price,
        img: this.state.imgurl
    })
    .then(() => {
        this.props.getRequest();
        this.handleCancelBtn();
    })
    .catch( err => console.log(err));
}

componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.currentProduct !== this.props.currentProduct) {
        this.setState({
            productId: this.props.currentProduct.product_id,
            isEditing: true,
            name: this.props.currentProduct.name,
            price: this.props.currentProduct.price,
            imgurl: this.props.currentProduct.img
        })
    }
}

handleEditBtn = () => {
    this.setState({isEditing: false})
}

editProduct = (id) => {
    axios.put(`/api/product/${id}`, {
        name: this.state.name,
        price: this.state.price,
        img: this.state.imgurl
    })
    .then(() => {
        this.props.getRequest();
        this.handleCancelBtn();
        this.handleEditBtn();
    })
    .catch( err => console.log(err));
}

    render() {
        console.log(this.state.name)
        // console.log(this.state.price)
        // console.log(this.props.currentProduct)
        console.log(this.state.productId)
        const product = this.props.currentProduct;

        return (
            <div>
                {
                    this.state.isEditing
                    ? (
                        <section className='form-container'>
                    <img className='picture-box' src={this.state.imgurl} alt='product'/>
                    <p>Img URL:</p>
                    <input
                        value={this.state.imgurl}
                        onChange={ e => this.handleImg(e.target.value)}/>
                    <p>Name:</p>
                    <input
                        value={this.state.name}
                        onChange={ e => this.handleName(e.target.value)}/>
                    <p>Price:</p>
                    <input
                        value={this.state.price}
                        onChange={ e => this.handlePrice(e.target.value)}/>
                    <div className='button-container'>
                        <button 
                            className='cancel-btn'
                            onClick={this.handleCancelBtn}>
                            Cancel
                        </button>
                        <button 
                            className='save-changes-btn'
                            onClick={() => this.editProduct(product.product_id)}>
                            Save Changes
                        </button>
                    </div>
                </section>
                    )
                    : (
                        <section className='form-container'>
                        <img className='picture-box' src={this.state.imgurl} alt='product'/>
                        <p>Img URL:</p>
                        <input
                            value={this.state.imgurl}
                            onChange={ e => this.handleImg(e.target.value)}/>
                        <p>Name:</p>
                        <input
                            value={this.state.name}
                            onChange={ e => this.handleName(e.target.value)}/>
                        <p>Price:</p>
                        <input
                            value={this.state.price}
                            onChange={ e => this.handlePrice(e.target.value)}/>
                        <div className='button-container'>
                            <button 
                                className='cancel-btn'
                                onClick={this.handleCancelBtn}>
                                Cancel
                            </button>
                            <button 
                                className='add-btn'
                                onClick={this.createProduct}>
                                Add to Inventory
                            </button>
                        </div>
                    </section>
                    )
                }

            </div>
        )
    }
}

export default Form;