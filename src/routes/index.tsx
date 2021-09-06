import ErrorPage from '@views/404/404';
import Contact from '@views/contact/contact';
import Home from '@views/home/home';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
