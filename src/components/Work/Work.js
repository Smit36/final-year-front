import React, { Component } from 'react';
import Menu from '../Menu/Menu'
import MainContent from '../MainContent/MainContent'
import MenuBar from '../MenuBar/MenuBar'
import './Work.css'
import CreateProject from '../CreateProject/CreateProject';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false, showProject: false, name: 'Dashboard' }
    }

    handleToggleClick = () => {
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }));
    }

    createProject = () => {
        this.setState({
            showProject: true
        });
    }

    handleComponentChange = (e) => {
        const temp = e.target.innerText;
        this.setState({ name: temp });
    }

    render() {
        return (
            <div className='Work'>
                <div className='Content'>
                    <div className='MenuBar'>
                        <MenuBar show={this.state.showMenu} handleComponentChange={this.handleComponentChange} />
                    </div>
                    <div className='CreateProject'>
                        <CreateProject create={this.state.showProject} createProject={this.createProject} />
                    </div>
                    <div className='ShowContent'>
                        <div className='Menu'>
                            <Menu name={this.state.name} handleToggleClick={this.handleToggleClick} />
                        </div>
                        <div className='MainContent'>
                            <MainContent />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Work;
