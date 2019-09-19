import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Menu.css';

class Menu extends Component {

   
    render() {
        return (
            <div>
                <div className='page'>                   
                    <div className='header'>
                        <div className='menu-icon' onClick={this.props.handleToggleClick}>
                            <MenuIcon />
                        </div>
                        <div className='header-name'>
                            <Typography variant='h5'>
                                {this.props.name}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Menu;
