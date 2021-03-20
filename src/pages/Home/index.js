import React from 'react';

import { Header, Wrapper } from '../../components/Header';
import Logo from '../../components/MariLogo';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
     <Header>
      <Wrapper>
        <Logo />
        <Button>new video</Button>
      </Wrapper>
     </Header>

     <Footer />
    </>
  );
}

export default Home;