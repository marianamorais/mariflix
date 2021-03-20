import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Page404 = () => ( <div>Page 404</div> )

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;