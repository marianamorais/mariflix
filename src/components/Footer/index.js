import React from 'react';
import { FooterBase } from './styled';
import Logo from '../LogoMari';
import ReactAluraLogo from '../ReactAluraLogo';

function Footer() {
  return (
    <FooterBase>
      <Logo />
      <ReactAluraLogo />
    </FooterBase>
  );
}

export default Footer;
