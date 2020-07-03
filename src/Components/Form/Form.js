import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgurl: '',
            name: '',
            price: 0
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



    render() {
        // console.log(this.state.name)
        // console.log(this.state.price)
        return (
            <div>
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
                        <button className='add-btn'>Add to Inventory</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Form;