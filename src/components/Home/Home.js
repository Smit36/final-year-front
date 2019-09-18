import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import laptop from './laptop.jpg'
import { Button } from '@material-ui/core'

import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="Home">

                <div className='Header-Component'>
                    <div className="Header">
                        <div className="Header-name">
                            <b>NLP</b> Suite
                         </div>
                        <div className='Header-Login-Button' >
                            <Link to='/signin'>
                                <Button variant='outlined' size='medium' >Login</Button>
                            </Link>
                        </div>
                        <div className='Header-Signup-Button'>
                            <Link to='/signup'>
                            <Button variant='contained' size='medium'>Free Trial</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='Home-Component'>
                    <div className="Home-first">
                        <div className="Home-first-left">
                            Do your best work,all in one suite.
                        <div>
                                <Link to='/signup'>
                                    <Button variant='contained' size='large'>Free Trial</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="Laptop-screen">
                            <img src={laptop} />
                        </div>
                    </div>
                    <div className="Home-second">
                        <div className="Home-second-name">
                            Rest API
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home