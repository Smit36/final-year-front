import React, { Component } from 'react';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button, Card, CardActions, CardContent } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './CreateProject.css'

class CreateProject extends Component {
    render() {
        return (
           
                <div className='CreateProject'>
                <div className='Container'>
                    <div className='Close-Container'>
                        <Typography >
                            X
                        </Typography>
                    </div>
                    <Card className='Card-Container' >
                        <CardContent>
                            <div>
                                <Typography variant='h5' align='left'>
                                    New Project
                                </Typography>
                                <TextField
                                    fullWidth={true}
                                    id="outlined-dense"
                                    label="Project Name"
                                    margin="dense"
                                    variant="outlined"
                                    required
                                />
                            </div>
                            <div className='Api-Container'>
                                <Typography variant='h6' align='left'>
                                    Select API
                                </Typography>
                                <div className='Api-Selection'>
                                    <div className='Api-Items'>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Semantic Prasing"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Topic Modelling"
                                        />
                                    </div>
                                    <div className='Api-Items'>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Machine Translation"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Named Entity Recognition"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <div className='Create-Button'>
                                <Button size="small" color='primary' variant='contained'>Create</Button>
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </div> 
            
        );
    }
}

export default CreateProject;
