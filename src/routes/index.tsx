import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from 'views/404';
import Home from '../views/home';
import Contact from '../views/contact';

// setup browser router for url routing
const Routes: React.FC<any> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
