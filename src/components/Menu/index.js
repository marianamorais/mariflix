import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
import Button from '../Button';
import LogoMari from '../LogoMari/index';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return(
    <nav className="Menu">
      <Link to="/">
        <LogoMari/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        New video
      </Button>
    </nav>
  );
}

export default Menu;