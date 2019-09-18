import React, { Component } from 'react'
import Link from '../Link/Link';

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-name">
                    <b>NLP</b> Suite
                 </div>
            </div>
        )
    }
}

export default Header;