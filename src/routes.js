import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import VideoRegister from './pages/Register/Video';
import CategoryRegister from './pages/Register/Category';

const Page404 = () => ( <div>Page 404</div> )

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='./video-register' exact component={VideoRegister} />
        <Route path='./category-register' component={CategoryRegister} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;