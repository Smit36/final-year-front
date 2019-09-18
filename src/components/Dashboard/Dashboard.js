import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button, Card, CardActions, CardContent } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateProject from '../CreateProject/CreateProject';
import './Dashboard.css';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  showProject: false }
    }    
    createProject = () => {
        this.setState({
            showProject: true
        });
    }

    render() {
        return (
            <div className='Dashboard'>
                
                <div className='message'>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                You have not created any project.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='new'>
                    <Button variant="contained" size="medium" color="primary" className='new-button' onClick={this.props.createProject}>
                        Create New Project
                    </Button>
                </div>
            </div>
        );
    }
}

export default Dashboard;
