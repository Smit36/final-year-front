import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header'
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom';
import './SignUp.css'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const formValid = formErrors => {
   let valid = true;

   Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false)
   });
   return valid;
}

class SignUp extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firstname: null,
         lastname: null,
         email: null,
         password: null,
         confirm_password: null,

         formErrors: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirm_password: '',

         }

      };
   }
   handleSubmit = (e) => {
      if (formValid(this.state.formErrors)) {
         console.log(
            `First Name: ${this.state.firtname}`
         );
      }
      else {
         console.error('Form InValid');
      }

   }
   handleChange = (e) => {
      const { name, value } = e.target;
      let formErrors = this.state.formErrors;

      console.log('Name', name);
      console.log('Value', value);


      switch (name) {
         case 'firstname':
            formErrors.firstname =
               value.length < 3 
                  ? 'minimum 3 characters required'
                  : '';
            break;
         case 'lastname':
            formErrors.lastname =
               emailRegex.test(value) 
                  ? 'minimum 3 characters required'
                  : '';
            break;
         case 'email':
            formErrors.email =
               value.length < 3
                  ? 'minimum 3 characters required'
                  : '';
            break;
         case 'password':
            formErrors.password =
               value.length < 3 
                  ? 'minimum 3 characters required'
                  : '';
            break;
         case 'confirm_password':
            formErrors.confirm_password =
               value.length < 3 
                  ? 'minimum 3 characters required'
                  : '';
            break;
      }
      this.setState({formErrors,[name]:value},()=> console.log(this.state));


   }
   render() {
      const {formErrors}=this.state;
      return this.state.redirect ? (
         <Redirect to='/signin' />
      ) : (
            <div className="SignUp">
               <div className='signup-header'>
                  <Header />
               </div>
               <div className='signup-page'>
                  <div className='avatar'>
                     <LockOutlinedIcon />
                  </div>
                  <div className='sign-header'>
                     <Typography variant='h5'>
                        Sign up
                  </Typography>
                  </div>
                  <div>
                     <form className='signup-form' onSubmit={this.handleSubmit} noValidate>
                        <div>
                           <div className='name'>
                              <div className='Firstname'>
                                 <TextField
                                    id="error"
                                    label="Firstname"
                                    name='firstname'
                                    margin="dense"
                                    variant="outlined"
                                    error={true}
                                    helperText='not allowed empty'
                                    required
                                    noValidate
                                    onChange={this.handleChange}
                                 />          
                                                    
                              </div>
                              
                              <div className='Lastname'>
                                 <TextField
                                    id="outlined-dense"
                                    label="Lastname"
                                    name='lastname'
                                    margin="dense"
                                    variant="outlined"
                                    required
                                    noValidate
                                    onChange={this.handleChange}
                                 />
                              </div>
                           </div>
                           <div className='Email'>
                              <TextField
                                 id="outlined-dense"
                                 label="Email Id"
                                 type='email'
                                 name='email'
                                 margin="dense"
                                 variant="outlined"
                                 fullWidth={true}
                                 required
                                 noValidate
                                 onChange={this.handleChange}
                              />
                              {formErrors.email.length > 0 &&(
                                    <span className='Error-Message'>{formErrors.email}</span>
                                 )}
                           </div>
                           <div className='Password'>
                              <TextField
                                 id="outlined-dense"
                                 label="Password"
                                 type='password'
                                 name='password'
                                 margin="dense"
                                 variant="outlined"
                                 fullWidth={true}
                                 required
                                 noValidate
                                 onChange={this.handleChange}
                              />
                           </div>
                           <div className='Confirm-Password'>
                              <TextField
                                 id="outlined-dense"
                                 label="Confirm Password"
                                 name='confirm_password'
                                 margin="dense"
                                 variant="outlined"
                                 fullWidth={true}
                                 required
                                 noValidate
                                 onChange={this.handleChange}
                              />
                              {formErrors.confirm_password.length > 0 &&(
                                    <span className='Error-Message'>{formErrors.confirm_password}</span>
                                 )}
                           </div>
                           <div className='sign-button'>
                              <Button variant="contained" size="medium" color="primary" className='sign-button-inside'>
                                 Continue
                            </Button>
                           </div>
                           <Typography color="primary" className='sign-forget' variant='body2'>
                              <Link to='signin'>
                                 Already have an account? Sign in
                           </Link>
                           </Typography>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )
   }
}

export default SignUp;
