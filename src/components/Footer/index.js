import React from 'react';
import { FooterBase } from './styled';
import Logo from '../MariLogo';
import AluraLogo from '../AluraLogo';

function Footer() {
  return (
    <FooterBase>
      <Logo />
      <AluraLogo />
    </FooterBase>
  );
}

export default Footer;
