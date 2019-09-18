import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard'

class MainContent extends Component {
  render() {
    return (
      <div className='MainContent'> 
            <div className='Dashboard'>
                 <Dashboard />
            </div>
            <div className='Setting'>

            </div>
      </div>
    );
  }
}

export default MainContent;
