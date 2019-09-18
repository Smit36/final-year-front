import React from 'react';
import { Typography } from '@material-ui/core'
import './MenuBar.css';


class MenuBar extends React.Component {
    render() {
        return (
            this.props.show &&
            (
                <div className='Menu-Container'>
                    <div className='menu'>
                        <div className='menu-name'>
                            <Typography variant='h5'>
                                <b>NLP</b> Suite
                     </Typography>
                        </div>
                        <div className='menu-box'>
                            <Typography variant='h6' className='menu-items' onClick={this.props.handleComponentChange} >
                                Dashboard
                    </Typography>
                            <Typography variant='h6' className='menu-items' onClick={this.props.handleComponentChange} >
                                Documentation
                     </Typography>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default MenuBar