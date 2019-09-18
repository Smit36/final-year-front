import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Menu from './components/Menu/Menu';
import Dashboard from './components/Dashboard/Dashboard';
import Work from './components/Work/Work'
import CreateProject from './components/CreateProject/CreateProject';
import MenuBar from './components/MenuBar/MenuBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path='/' render={() => (
                            <Fragment>                                    
                                <Home />                            
                                <Footer />
                            </Fragment>
                        )}
                            exact={true}
                        />
                        <Route path='/signup' render={() => (
                            <Fragment>
                                <SignUp />
                            </Fragment>
                        )}
                            exact={true}
                        />
                        <Route path='/signin' render={() =>(
                            <Fragment>
                                <Login />
                            </Fragment>
                        )}
                            exact={true}
                        />  
                        <Route path='/work' render={() =>(
                            <Fragment>
                                <Work />
                            </Fragment>
                        )}
                            exact={true}
                        />    
                        <Route path='/dashboard' render={() =>(
                            <Fragment>
                                <Dashboard />
                            </Fragment>
                        )}
                            exact={true}
                        />    
                        <Route path='/new' render={() =>(
                            <Fragment>
                                <CreateProject
                                 />
                            </Fragment>
                        )}
                            exact={true}
                        />                         
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App