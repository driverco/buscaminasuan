import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';
import SelectBoard from './components/SelectBoard';
import About from './components/About';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import Page404 from './components/Page404';

const AppRoutes = () => 
<App>
    <Switch>
        <Route exact path="/home" component = {Home} />
        <Route exact path="/" component = {Home} />
        <Route exact path="/app" component = {App} />
        <Route exact path="/selectBoard" component = {SelectBoard} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/registerUser" component = {RegisterUser} />
        <Route exact path="/login" component = {Login} />
        <Route component = {Page404} />
    </Switch>
</App>

export default AppRoutes;