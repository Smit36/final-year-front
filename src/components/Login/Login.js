import React, { Component } from 'react'
import { Avatar, Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Header from '../Header/Header'
import './Login.css';
import laptop from './laptop2.jpg'



class Login extends Component {
    render() {
        return (
            <div className='Signin'>
                <Header />
                <div className='signin-page'>
                    <div className="Login">
                        <div className='avatar'>
                            <LockOutlinedIcon />
                        </div>
                        <div className='sign-header'>
                            <Typography variant='h5'>
                                Sign in
                        </Typography>
                        </div>
                        <div>
                            <form>
                                <div>
                                    <TextField
                                        className="sign-username"
                                        id="outlined-dense"
                                        label="Username"
                                        margin="dense"
                                        variant="outlined"
                                        required
                                    />
                                    <TextField
                                        className="sign-password"
                                        id="outlined-dense"
                                        label="Password"
                                        margin="dense"
                                        variant="outlined"
                                        required
                                    />
                                    <div className="sign-remember">
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                        />
                                    </div>
                                    <div className='sign-button'>
                                        <Button variant="contained" size="medium" color="primary" className='sign-button-inside'>
                                            Submit
                                         </Button>
                                    </div>
                                        <Typography color="primary" className='sign-forget' variant='body2'>
                                              Forget password?
                                        </Typography>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Login;