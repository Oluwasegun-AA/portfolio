import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Contact from '../views/contact';

// setup browser router for url routing
const Routes: React.FC<any> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
