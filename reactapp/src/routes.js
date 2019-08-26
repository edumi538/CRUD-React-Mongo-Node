import React from 'react';

import 
    { BrowserRouter, Switch, Route }
from 'react-router-dom'

import Main from './pages/main';
import Listagem from './pages/listagem';
import Product from './pages/product';
import Create from './pages/create';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main }/>
            <Route path="/product/:id" component={ Product }/>
            <Route path="/create" component= { Create }/>
            <Route path="/list" component= { Listagem }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;