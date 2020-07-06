import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                <header>
                    <p className='header-title'>SHELFIE</p>
                    <section className='nav-buttons'>
                        <Link to='/'>
                            <button>Dashboard</button>
                        </Link>
                        <Link to='/add' >
                            <button>Add Inventory</button>
                        </Link>
                    </section>
                </header>
            </div>
        )
    }
}

export default Header;