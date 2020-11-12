import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/styles/settings/colors.css';
import './assets/styles/reset.css';

import Home from '../src/pages/Home/App.jsx';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Category';

const Pagina404 = () => ( <div>Página 404</div> )

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

