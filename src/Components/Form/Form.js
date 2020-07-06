import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Form.css'
import Dashboard from '../Dashboard/Dashboard';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            productInfo: {},
            imgurl: '',
            name: '',
            price: 0,
            isEditing: false
        }
    }

componentDidMount = () => {
    if (typeof this.props.match.params.id === 'undefined'){
        this.setState({isEditing: false});
    } else {
        this.setState({isEditing: true});
        axios.get(`/api/product/${this.props.match.params.id}`)
            .then( res => {
                this.setState({
                    productInfo: res.data[0],
                    imgurl: res.data[0].img,
                    name: res.data[0].name,
                    price: res.data[0].price
                })
            })
            .catch( err => console.log(err));
    }
}

getInventory = () => {
    axios.get('/api/inventory')
    .then(res => {
        return res.data
    })
    .catch(err => console.log(err))
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
        this.getInventory();
        this.handleCancelBtn();
    })
    .catch( err => console.log(err));
}

// componentDidUpdate = (prevProps, prevState) => {
//     if (prevProps.currentProduct !== this.props.currentProduct || prevState.currentProduct !== this.state.currentProduct) {
//         this.setState({
//             productId: this.props.currentProduct.product_id,
//             isEditing: true,
//             name: this.props.currentProduct.name,
//             price: this.props.currentProduct.price,
//             imgurl: this.props.currentProduct.img
//         })
//     }
// }

handleEditBtn = () => {
    this.setState({isEditing: false})
}


editProduct = () => {
    console.log(this.props)
    axios.put(`/api/product/${this.props.match.params.id}`, {
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
        console.log(this.props)
        console.log(this.state.isEditing)
        const info = this.state.productInfo;
        // console.log(this.state.name)
        // console.log(this.state.price)
        // console.log(this.props.currentProduct)
        // console.log(this.state.productId)
        const product = this.props.currentProduct;

        return (
            <div className='container'>
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
                            onClick={ () => this.props.history.goBack()}>
                            Cancel
                        </button>
                        <Link to='/'>
                            <button 
                                className='save-changes-btn'
                                onClick={this.editProduct}>
                                Save Changes
                            </button>
                        </Link>
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
                            <Link to='/'>
                                <button 
                                    className='add-btn'
                                    onClick={this.createProduct}>
                                    Add to Inventory
                                </button>
                            </Link>
                        </div>
                    </section>
                    )
                }

            </div>
        )
    }
}

export default Form;